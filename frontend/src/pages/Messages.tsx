import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { AppBar } from "../components/AppBar";
import { Sidebar } from "../components/SideBar";
import { io, Socket } from "socket.io-client";
import { URL } from "../config";
import MessageInput from "../components/MessagesComponents/RightSideComponents/MessageInput";
import MessageList from "../components/MessagesComponents/RightSideComponents/MessageList";
import ChatHeader from "../components/MessagesComponents/RightSideComponents/ChatHeader";
import SearchBar from "../components/MessagesComponents/LeftSideComponents/SearchBar";
import Tabs from "../components/MessagesComponents/LeftSideComponents/Tabs";
import List from "../components/MessagesComponents/LeftSideComponents/List";
import { Footer } from "../components/Footer";

export default function Messages() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string>("");
  const [conversations, setConversations] = useState<any[]>([]);
  const [allUsers, setAllUsers] = useState<any[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<any | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"chats" | "users">("chats");
  const [loading, setLoading] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) setCurrentUserId(userId);
  }, []);

  useEffect(() => {
    if (!currentUserId) return;
    const newSocket = io(URL, { transports: ['websocket', 'polling'] });
    newSocket.on("connect", () => newSocket.emit("join", currentUserId));
    
    newSocket.on("new-message", (message: any) => {
        // Update messages if the message belongs to current chat
        setMessages((prev) => [...prev, message]);
    });

    setSocket(newSocket);
    return () => { newSocket.close(); };
  }, [currentUserId]);

  useEffect(() => {
    if (currentUserId) {
      fetchConversations();
      fetchAllUsers();
    }
  }, [currentUserId]);

  const fetchConversations = async () => {
    try {
      const res = await axios.get(`${URL}/api/v1/message/getconversations`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setConversations(res.data);
    } catch (e) { console.error(e); } finally { setLoading(false); }
  };

  const fetchAllUsers = async () => {
    try {
      const res = await axios.get(`${URL}/api/v1/user/allusers`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setAllUsers(res.data.users);
    } catch (e) { console.error(e); }
  };

  const fetchMessages = async (conversationId: string) => {
    try {
      const res = await axios.get(`${URL}/api/v1/message/conversations/${conversationId}/messages`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setMessages(res.data);
    } catch (e) { console.error(e); }
  };

  // FIXED: Logic to handle clicking a user from the Directory
  const createOrGetConversation = async (receiverId: string) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${URL}/api/v1/message/postconversations`,
        { receiverId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const conv = res.data;
      // Determine the 'otherUser' object for the UI
      const otherUser = conv.participantOne.id === currentUserId 
        ? conv.participantTwo 
        : conv.participantOne;

      const formattedConv = { ...conv, otherUser };

      setSelectedConversation(formattedConv);
      fetchMessages(conv.id);
      setActiveTab("chats"); // Switch to chat view
    } catch (error) {
      console.error("Failed to initiate conversation:", error);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !selectedConversation) return;
    try {
      const res = await axios.post(`${URL}/api/v1/message/messages`, 
        { conversationId: selectedConversation.id, content: newMessage },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setMessages((prev) => [...prev, res.data]);
      setNewMessage("");
      socket?.emit("send-message", { conversationId: selectedConversation.id, message: res.data });
    } catch (e) { console.error(e); }
  };

  const selectConversation = (conv: any) => {
    setSelectedConversation(conv);
    fetchMessages(conv.id);
  };

  const handleSearch = (query: string) => setSearchQuery(query);
  const formatTime = (date: string) => new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const filteredConversations = conversations.filter((c) => 
    `${c.otherUser.firstname} ${c.otherUser.lastname}`.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredUsers = allUsers.filter((u) => 
    `${u.firstname} ${u.lastname}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
  <div className="min-h-screen flex flex-col bg-white">
    <AppBar />

    {/* Main Layout */}
    <div className="flex flex-1 overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex bg-gray-50">
        {/* LEFT PANEL */}
        <div className="w-[380px] bg-white border-r border-gray-200 flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-4">
              Secure Messages
            </h1>

            <SearchBar
              searchQuery={searchQuery}
              activeTab={activeTab}
              handleSearch={handleSearch}
            />

            <div className="mt-4">
              <Tabs
                setActiveTab={setActiveTab}
                setSearchQuery={setSearchQuery}
                fetchConversations={fetchConversations}
                fetchAllUsers={fetchAllUsers}
                activeTab={activeTab}
              />
            </div>
          </div>

          {/* Conversation / User List */}
          <div className="flex-1 overflow-y-auto">
            <List
              activeTab={activeTab}
              filteredConversations={filteredConversations}
              selectConversation={selectConversation}
              selectedConversation={selectedConversation}
              formatTime={formatTime}
              filteredUsers={filteredUsers}
              createOrGetConversation={createOrGetConversation}
              currentUserId={currentUserId}
            />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 flex flex-col bg-white">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <ChatHeader
                firstname={selectedConversation.otherUser.firstname}
                lastname={selectedConversation.otherUser.lastname}
                profilepic={selectedConversation.otherUser.profilepic}
                isTyping={isTyping}
              />

              {/* Messages */}
              <div className="flex-1 bg-gray-50">
                <MessageList
                  messages={messages}
                  currentUserId={currentUserId}
                  messagesEndRef={messagesEndRef}
                  formatTime={formatTime}
                />
              </div>

              {/* Input */}
              <MessageInput
                newMessage={newMessage}
                setNewMessage={setNewMessage}
                sendMessage={sendMessage}
              />
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center bg-gray-50">
              <div className="text-center max-w-sm">
                <p className="text-xs font-black uppercase tracking-widest text-gray-400">
                  Secure Communication Channel
                </p>
                <p className="mt-2 text-sm font-bold text-gray-600">
                  Select a conversation from the left panel to begin
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

}