import { Send } from "lucide-react";

export default function MessageInput({newMessage, setNewMessage, sendMessage, handleTyping}: any) {
    return (
        <div className="p-6 bg-white border-t border-gray-200">
            <div className="max-w-4xl mx-auto flex gap-3 items-center bg-gray-100 rounded-2xl p-2 focus-within:ring-2 ring-blue-600/20 transition-all">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => { setNewMessage(e.target.value); handleTyping(); }}
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), sendMessage())}
                    placeholder="ENTER SECURE TRANSMISSION..."
                    className="flex-1 bg-transparent border-none outline-none px-4 py-2 text-sm font-bold placeholder:text-gray-400 placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest"
                />
                <button
                    onClick={sendMessage}
                    disabled={!newMessage.trim()}
                    className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-200 active:scale-95 disabled:opacity-20"
                >
                    <Send className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}