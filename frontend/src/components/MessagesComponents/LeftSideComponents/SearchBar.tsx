import { Search } from "lucide-react";

export default function SearchBar({searchQuery, activeTab, handleSearch}: {searchQuery:string; activeTab: "chats" | "users"; handleSearch: (query:string) => void}) {
    return (
        <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
                type="text"
                placeholder={`SEARCH ${activeTab === 'chats' ? 'COMMUNICATIONS' : 'OFFICERS'}...`}
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-100 border-none rounded-xl text-[10px] font-black uppercase tracking-widest focus:ring-2 ring-blue-600 outline-none transition-all placeholder:text-gray-400"
            />
        </div>
    )
}