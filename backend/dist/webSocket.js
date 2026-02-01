import { Server as SocketIOServer } from 'socket.io';
let io = null;
export function initializeWebSocket(httpServer) {
    io = new SocketIOServer(httpServer, {
        cors: {
            origin: [process.env.CLIENT_URL || 'http://localhost:3000', "https://hoppscotch.io", 'http://localhost:5173'],
            methods: ['GET', 'POST'],
            credentials: true
        }
    });
    // Store user socket mappings
    const userSockets = new Map();
    io.on('connection', (socket) => {
        console.log('✅ User connected:', socket.id);
        // User joins with their ID
        socket.on('join', (userId) => {
            if (!userId)
                return;
            // Add socket to user's set
            if (!userSockets.has(userId)) {
                userSockets.set(userId, new Set());
            }
            userSockets.get(userId).add(socket.id);
            // Join personal room
            socket.join(userId);
            console.log(`👤 User ${userId} joined (socket: ${socket.id})`);
        });
        // Join specific conversation room
        socket.on('join-conversation', (conversationId) => {
            socket.join(conversationId);
            console.log(`💬 Socket ${socket.id} joined conversation ${conversationId}`);
        });
        // Leave conversation room
        socket.on('leave-conversation', (conversationId) => {
            socket.leave(conversationId);
            console.log(`🚪 Socket ${socket.id} left conversation ${conversationId}`);
        });
        // Handle typing indicator
        socket.on('typing', (data) => {
            socket.to(data.conversationId).emit('user-typing', {
                userId: data.userId,
                isTyping: data.isTyping
            });
        });
        // Handle message read status
        socket.on('messages-read', (data) => {
            socket.to(data.conversationId).emit('messages-marked-read', {
                userId: data.userId
            });
        });
        // Handle message deletion
        socket.on('delete-message', (data) => {
            socket.to(data.conversationId).emit('message-deleted', {
                messageId: data.messageId,
                deletedForAll: data.deletedForAll
            });
        });
        // Handle disconnect
        socket.on('disconnect', () => {
            console.log('❌ User disconnected:', socket.id);
            // Remove socket from all user mappings
            userSockets.forEach((sockets, userId) => {
                sockets.delete(socket.id);
                if (sockets.size === 0) {
                    userSockets.delete(userId);
                }
            });
        });
    });
    console.log('🚀 WebSocket server initialized');
    return io;
}
export function getIO() {
    return io;
}
//# sourceMappingURL=webSocket.js.map