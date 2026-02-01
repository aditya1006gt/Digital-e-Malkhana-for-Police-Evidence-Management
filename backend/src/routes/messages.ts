import { Router, type Request, type Response } from 'express';
import { prisma } from '../lib/prisma.js';
import express from 'express';
import z from 'zod';
import authMiddleware from '../middleware.js';
import { getIO } from '../webSocket.js';



const router = express.Router();

// Get all conversations for a user
router.get('/getconversations', authMiddleware, async (req: Request, res: Response) => {
  try {
    const userId=req.userId;
    if(!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const conversations = await prisma.conversation.findMany({
      where: {
        OR: [
          { participantOneId: userId },
          { participantTwoId: userId }
        ]
      },
      include: {
        participantOne: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            username: true,
            profilepic: true
          }
        },
        participantTwo: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            username: true,
            profilepic: true
          }
        },
        messages: {
            where: {
                deletedForAll: false, // Don't show unsent messages
                NOT: {
                    deletedFor: { has: userId } // Hide if user clicked "Delete for me"
                }
            },
            orderBy: { createdAt: 'desc' },
            take: 1,
            select: {
                id: true,
                content: true,
                createdAt: true,
                senderId: true
            }
        },
      },
      orderBy: {
        lastMessageAt: 'desc'
      }
    });

    // Format the response to make it easy for the frontend
    const formattedConversations = conversations.map((conv) => {
      // Determine which participant is the "other person"
      const isP1 = conv.participantOneId === userId;
      const otherUser = isP1 ? conv.participantTwo : conv.participantOne;
      const unreadCount = isP1 ? conv.unreadCountP1 : conv.unreadCountP2;

      return {
        id: conv.id,
        lastMessageAt: conv.lastMessageAt,
        unreadCount,
        otherUser,
        lastMessage: conv.messages[0] || null,
      };
    });

    res.json(formattedConversations);


  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch conversations' });
  }
});






const conversationsPostSchema = z.object({
  receiverId: z.string().uuid(),
});
// Get or create conversation between two users
router.post('/postconversations', authMiddleware, async (req: Request, res: Response) => {
  try {

    if(!conversationsPostSchema.safeParse(req.body).success){
        return res.status(400).json({ error: "Invalid Receiver ID"});
    }
    const { receiverId } = req.body;
    const senderId = req.userId!;

    if (senderId === receiverId) {
      return res.status(400).json({ error: 'You cannot start a conversation with yourself' });
    }

    // 1. Sort IDs to ensure uniqueness (e.g., "a" comes before "b")
    const [p1, p2] = [senderId, receiverId].sort();
    const participantOneId = p1;
    const participantTwoId = p2;

    // Check if conversation already exists
    let conversation = await prisma.conversation.findUnique({
      where: {
        participantOneId_participantTwoId: {
          participantOneId,
          participantTwoId
        }
      },
      include: {
        participantOne: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            username: true,
            profilepic: true
          }
        },
        participantTwo: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            username: true,
            profilepic: true
          }
        }
      }
    });

    if (!conversation) {
      conversation = await prisma.conversation.create({
        data: {
          participantOneId,
          participantTwoId
        },
        include: {
          participantOne: {
            select: {
              id: true,
              firstname: true,
              lastname: true,
              username: true,
              profilepic: true
            }
          },
          participantTwo: {
            select: {
              id: true,
              firstname: true,
              lastname: true,
              username: true,
              profilepic: true
            }
          }
        }
      });
    }

    res.json(conversation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create conversation' });
  }
});






const messagesGetSchema = z.object({
    conversationId: z.string().uuid(),
    limit: z.string().regex(/^\d+$/).default("50").transform(Number),
    before: z.string().datetime().optional(), // Expects ISO string
});
// Get messages for a conversation
router.get('/conversations/:conversationId/messages', authMiddleware, async (req: Request, res: Response) => {
  try {

    // 1. Validate everything via Zod
    const validation = messagesGetSchema.safeParse({
      ...req.params,
      ...req.query
    });

    if (!validation.success) {
      return res.status(400).json({ error: "Invalid parameters", details: validation.error.format() });
    }

    const { conversationId, limit, before } = validation.data;
    const userId = req.userId!;
    
    // 2. SECURITY CHECK: Is the user part of this conversation?
    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId },
      select: { participantOneId: true, participantTwoId: true }
    });

    if (!conversation || (conversation.participantOneId !== userId && conversation.participantTwoId !== userId)) {
      return res.status(403).json({ error: "You are not a participant in this conversation" });
    }

    const messages = await prisma.message.findMany({
      where: {
        conversationId,
        deletedForAll: false, // Only show [This message was deleted] if sender unsent it
        NOT: {
            deletedFor: { has: userId } // REMOVE messages hidden by the user
        },
        ...(before && { createdAt: { lt: new Date(before) } })
      },
      include: {
        sender: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            username: true,
            profilepic: true
          }
        }
      },
      orderBy: { createdAt: 'desc' },
      take: limit
    });

    // 4. (Optional but recommended) Reset unread count for this user
    const isP1 = conversation.participantOneId === userId;
    await prisma.conversation.update({
      where: { id: conversationId },
      data: {
        [isP1 ? 'unreadCountP1' : 'unreadCountP2']: 0
      }
    });

    // Reverse to get chronological order (oldest -> newest) for the UI
    res.json(messages.reverse());
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});






const messagePostSchema = z.object({
  conversationId: z.string().uuid(),
  content: z.string().min(1).max(2000),
  replyToId: z.string().uuid().optional()
});
// Send a message
router.post('/messages', authMiddleware, async (req: Request, res: Response) => {
  try {
    const validation = messagePostSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: "Invalid message data", details: validation.error.format() });
    }

    const { conversationId, content, replyToId } = validation.data;
    const senderId = req.userId!; // Trust the token, not the body

    // 1. Verify membership and get the other participant's ID
    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId }
    });

    if (!conversation) {
      return res.status(404).json({ error: "Conversation not found" });
    }

    const isP1 = conversation.participantOneId === senderId;
    const isP2 = conversation.participantTwoId === senderId;

    if (!isP1 && !isP2) {
      return res.status(403).json({ error: "You are not a participant in this conversation" });
    }

    // 2. Use a Transaction to create message and update conversation stats
    const result = await prisma.$transaction(async (tx) => {
      // 1. Create the message
      const newMessage = await tx.message.create({
        data: {
          conversationId,
          senderId,
          content,
          replyToId: replyToId || null,
        },
        include: {
          sender: {
            select: { id: true, firstname: true, lastname: true, username: true, profilepic: true }
          }
        }
      });

      // 2. Update Conversation
      await tx.conversation.update({
        where: { id: conversationId },
        data: {
          lastMessageAt: new Date(),
          lastMessageId: newMessage.id,
          // Correct Logic: 
          // If I am P1, increment P2's count. 
          // If I am P2, increment P1's count.
          // We use 'undefined' so Prisma ignores the field we DON'T want to change.
            ...(isP2 && { unreadCountP1: { increment: 1 } }),
            ...(isP1 && { unreadCountP2: { increment: 1 } }),
        }
      });

      // after result returned
      try {
        const io = getIO();
        if (io) {
          // Emit the message to the conversation room
          io.in(conversationId).emit('new-message', result);

          // Notify the other user (compute recipient)
          const recipientId = isP1 ? conversation.participantTwoId : conversation.participantOneId;
          io.to(recipientId).emit('message-notification', {
            conversationId,
            message: result
          });
        } else {
          console.warn('POST /messages: io not initialized yet');
        }
      } catch (err) {
        console.error('POST /messages: emit error', err);
      }


      return newMessage;
    });

    res.json(result);

  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
});




const messagesPatchSchema = z.object({
    conversationId: z.string().uuid(),
});
// Mark messages as read
router.patch('/conversations/:conversationId/read', authMiddleware, async (req: Request, res: Response) => {
  try {
    const userId = req.userId!;
    if(!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }
    const validation = messagesPatchSchema.safeParse(req.params);
    if (!validation.success) {
      return res.status(400).json({ error: "Invalid parameters", details: validation.error.format() });
    }
    const { conversationId } = validation.data;

    // 1. First, check if the user is part of the conversation
    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId },
      select: { participantOneId: true, participantTwoId: true }
    });

    if (!conversation || (conversation.participantOneId !== userId && conversation.participantTwoId !== userId)) {
      return res.status(403).json({ error: "Not a participant in this conversation" });
    }

    // 2. Run updates in a transaction for data consistency
    await prisma.$transaction([
      // Update all messages sent by the OTHER person to 'read'
      prisma.message.updateMany({
        where: {
          conversationId,
          senderId: { not: userId },
          isRead: false
        },
        data: { isRead: true }
      }),
      // Reset the specific unread count for the current user
      prisma.conversation.update({
        where: { id: conversationId },
        data: {
          ...(conversation.participantOneId === userId ? { unreadCountP1: 0 } : { unreadCountP2: 0 })
        }
      })
    ]);

    res.json({ success: true });

  } catch (error) {
    res.status(500).json({ error: 'Failed to mark messages as read' });
  }
});




const messagesDeleteSchema = z.object({
    messageId: z.string().uuid(),
});
// Delete message
router.delete('/messages/:messageId', authMiddleware, async (req: Request, res: Response) => {
  try {
    const validation = messagesDeleteSchema.safeParse(req.params);
    if (!validation.success) {
      return res.status(400).json({ error: "Invalid parameters", details: validation.error.format() });
    }
    const { messageId } = validation.data;
    const { deleteForAll } = req.body;
    const userId = req.userId!;

    // 1. Fetch the message to check permissions
    const message = await prisma.message.findUnique({
      where: { id: messageId },
      include: { conversation: true }
    });

    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }

    // 2. Check if user is even in the conversation
    const isParticipant = 
      message.conversation.participantOneId === userId || 
      message.conversation.participantTwoId === userId;

    if (!isParticipant) {
      return res.status(403).json({ error: "Access denied" });
    }

    if (deleteForAll) {
        // 3. Only the SENDER can delete for everyone
        if (message.senderId !== userId) {
            return res.status(403).json({ error: "Only the sender can unsend this message" });
        }
      await prisma.message.update({
        where: { id: messageId },
        data: { 
            deletedForAll: true,
            content: "[This message was deleted]" // Optional: Wipe the text content for privacy
        }
      });
    } else {
        // 4. Delete for Me (Hide from specific user)
        // We use 'set' to avoid duplicate IDs in the array
        if (!message.deletedFor.includes(userId)) {
            await prisma.message.update({
                where: { id: messageId },
                data: {
                    deletedFor: {
                    push: userId
                    }
                }
            });
        }
    }

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete message' });
  }
});

// To view This message was deleted
// Simply remove the deletedForAll: false line.
/** This is your get route for messages
  where: {
  conversationId, // (only in Route 2)
  // REMOVED: deletedForAll: false
  NOT: {
    deletedFor: { has: userId } // Keep this! It hides "Delete for Me" messages
  },
  ...(before && { createdAt: { lt: new Date(before) } })
},
*/

export default router;