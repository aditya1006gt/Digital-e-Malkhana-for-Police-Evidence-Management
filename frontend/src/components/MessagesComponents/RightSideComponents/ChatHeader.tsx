export default function ChatHeader({firstname, lastname, profilepic, isTyping}: any) {
    return (
        <div className="h-20 border-b border-gray-200 bg-white flex items-center justify-between px-8 shadow-sm z-10">
            <div className="flex items-center gap-4">
                <div className="relative">
                    <img src={profilepic || ""} className="w-10 h-10 rounded-2xl border border-gray-100 shadow-sm object-cover bg-gray-100" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
                </div>
                <div>
                    <h2 className="text-sm font-black uppercase tracking-tight text-gray-900">
                        {firstname} {lastname}
                    </h2>
                    {isTyping ? (
                        <p className="text-[9px] text-blue-600 font-black uppercase tracking-widest animate-pulse">Encoding transmission...</p>
                    ) : (
                        <p className="text-[9px] text-emerald-600 font-black uppercase tracking-widest">● Secure Line Active</p>
                    )}
                </div>
            </div>
            <div className="hidden md:block">
                <span className="text-[8px] font-black text-gray-300 uppercase tracking-[0.2em] border border-gray-100 px-3 py-1 rounded-full">
                    Malkhana Comms Protocol
                </span>
            </div>
        </div>
    )
}