export default function List({activeTab, filteredConversations, selectConversation, selectedConversation, formatTime, filteredUsers, createOrGetConversation, currentUserId}: any) {
    return (
        <div className="flex-1 overflow-y-auto custom-scrollbar">
            {activeTab === "chats" ? (
                filteredConversations.map((conv: any) => (
                    <div
                        key={conv.id}
                        onClick={() => selectConversation(conv)}
                        className={`p-4 border-b border-gray-50 cursor-pointer transition-all relative ${
                            selectedConversation?.id === conv.id ? "bg-blue-50/50" : "hover:bg-gray-50"
                        }`}
                    >
                        {selectedConversation?.id === conv.id && <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600" />}
                        <div className="flex items-center gap-3">
                            <img src={conv.otherUser.profilepic || ""} className="w-12 h-12 rounded-2xl border border-gray-200 object-cover bg-gray-100" />
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-[11px] font-black uppercase text-gray-900 truncate tracking-tight">
                                        {conv.otherUser.firstname} {conv.otherUser.lastname}
                                    </h3>
                                    {conv.lastMessage && (
                                        <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter">
                                            {formatTime(conv.lastMessage.createdAt)}
                                        </span>
                                    )}
                                </div>
                                <p className="text-[10px] text-gray-500 truncate font-bold opacity-70">
                                    {conv.lastMessage?.senderId === currentUserId && "OUTGOING: "}
                                    {conv.lastMessage?.content || "No transmission records"}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                filteredUsers.map((user: any) => (
                    <div
                        key={user.id}
                        onClick={() => createOrGetConversation(user.id)}
                        className="p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer flex items-center gap-3 transition-all"
                    >
                        <img src={user.profilepic || ""} className="w-10 h-10 rounded-xl border border-gray-200 bg-gray-100" />
                        <div className="flex-1">
                            <h3 className="text-[11px] font-black uppercase text-gray-900 tracking-tight">
                                {user.firstname} {user.lastname}
                            </h3>
                            <p className="text-[9px] text-blue-600 font-black uppercase tracking-widest opacity-60">@{user.username || "OFFICER"}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}