export default function Tabs({setActiveTab, setSearchQuery, fetchConversations, fetchAllUsers, activeTab}: any) {
    return (
        <div className="flex gap-2 p-1 bg-gray-100 rounded-xl">
            <button
                onClick={() => { setActiveTab("chats"); setSearchQuery(""); fetchConversations(); }}
                className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${
                    activeTab === "chats" ? "bg-white text-blue-600 shadow-sm" : "text-gray-400 hover:text-gray-600"
                }`}
            >
                Recent
            </button>
            <button
                onClick={() => { setActiveTab("users"); setSearchQuery(""); fetchAllUsers(); }}
                className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${
                    activeTab === "users" ? "bg-white text-blue-600 shadow-sm" : "text-gray-400 hover:text-gray-600"
                }`}
            >
                Directory
            </button>
        </div>
    );
}