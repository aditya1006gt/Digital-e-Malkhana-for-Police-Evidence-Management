export default function MessageList({messages, currentUserId, messagesEndRef, formatTime}: any) {
    return (
        <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-gray-50/50 custom-scrollbar">
            {messages.map((msg: any) => {
                const isMe = msg.senderId === currentUserId;
                return (
                    <div key={msg.id} className={`flex ${isMe ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2`}>
                        <div className="max-w-[65%]">
                            <div className={`p-4 rounded-3xl text-[13px] shadow-sm leading-relaxed ${
                                isMe ? "bg-blue-600 text-white rounded-tr-none font-medium" : "bg-white border border-gray-200 text-gray-800 rounded-tl-none font-bold"
                            }`}>
                                <p>{msg.content}</p>
                            </div>
                            <p className={`text-[8px] mt-2 font-black uppercase tracking-widest text-gray-400 ${isMe ? "text-right" : "text-left"}`}>
                                {formatTime(msg.createdAt)} {isMe && msg.isRead && " • DECODED"}
                            </p>
                        </div>
                    </div>
                );
            })}
            <div ref={messagesEndRef} />
        </div>
    );
}