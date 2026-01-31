import { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../config";
import { AppBar } from "../components/AppBar";
import { InputBox } from "../components/InputBox";
import { Sidebar } from "../components/SideBar"; // Added Sidebar import

export const Disposal = () => {
    const [search, setSearch] = useState("");
    const [disposalItems, setDisposalItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch items marked for disposal or awaiting court order
        axios.get(`${URL}/api/v1/property/disposal-list`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }).then(res => {
            setDisposalItems(res.data.items || []);
            setLoading(false);
        }).catch(() => setLoading(false));
    }, []);

    const handleDisposal = async (id: string) => {
        const confirmAction = window.confirm("Are you sure you want to mark this item as DISPOSED? This action is permanent and legally binding.");
        if (!confirmAction) return;

        try {
            await axios.post(`${URL}/api/v1/property/dispose/${id}`, {}, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            setDisposalItems(prev => prev.filter(item => item.id !== id));
            alert("Status updated to Disposed.");
        } catch (e) {
            alert("Error updating disposal status.");
        }
    };

    return (
        <div className="min-h-screen bg-white text-gray-900">
            <AppBar />
            <div className="flex">
                {/* Sidebar Section */}
                <aside className="hidden md:block w-64 border-r border-gray-100 h-[calc(100vh-64px)] sticky top-16 bg-gray-50/50">
                    <Sidebar />
                </aside>

                {/* Main Content Section */}
                <main className="flex-1 p-6 md:p-10">
                    <div className="max-w-6xl mx-auto">
                        <header className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                            <div>
                                <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Disposal Management</h1>
                                <p className="text-gray-500 mt-1">Authorized release or destruction of evidence records</p>
                            </div>
                            <div className="w-full md:w-80">
                                <InputBox 
                                    label="Search Case or Property ID" 
                                    placeholder="e.g. FIR-2026-001" 
                                    value={search} 
                                    onChange={(e) => setSearch(e.target.value)} 
                                />
                            </div>
                        </header>

                        {loading ? (
                            <div className="text-center py-20 text-gray-400 font-bold animate-pulse tracking-widest text-xs">
                                ACCESSING DISPOSAL REGISTRY...
                            </div>
                        ) : (
                            <section className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-gray-50 border-b border-gray-100">
                                                <th className="px-6 py-4 text-[10px] font-black uppercase text-gray-400 tracking-widest">Item Details</th>
                                                <th className="px-6 py-4 text-[10px] font-black uppercase text-gray-400 tracking-widest">Case Reference</th>
                                                <th className="px-6 py-4 text-[10px] font-black uppercase text-gray-400 tracking-widest">Legal Status</th>
                                                <th className="px-6 py-4 text-[10px] font-black uppercase text-gray-400 tracking-widest text-right">Protocol</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {disposalItems.map((item) => (
                                                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="px-6 py-4">
                                                        <div className="font-bold text-gray-900">{item.description}</div>
                                                        <div className="text-[10px] text-gray-400 font-mono mt-0.5">{item.qrString}</div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-semibold text-gray-700">
                                                        {item.case?.crimeNumber || "N/A"}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="bg-amber-50 text-amber-700 border border-amber-200 text-[10px] px-2.5 py-1 rounded-lg font-black uppercase">
                                                            Awaiting Court Order
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button 
                                                            onClick={() => handleDisposal(item.id)}
                                                            className="text-[10px] font-black text-red-600 border border-red-100 px-4 py-2 rounded-xl hover:bg-red-50 hover:border-red-200 transition-all uppercase tracking-tighter"
                                                        >
                                                            Execute Disposal
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    
                                    {disposalItems.length === 0 && (
                                        <div className="text-center py-20">
                                            <div className="text-4xl mb-4">📄</div>
                                            <p className="text-gray-400 font-bold text-sm">No items currently pending disposal in registry.</p>
                                        </div>
                                    )}
                                </div>
                            </section>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};