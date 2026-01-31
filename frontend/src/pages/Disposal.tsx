import { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../config";
import { AppBar } from "../components/AppBar";
import { InputBox } from "../components/InputBox";
import { Sidebar } from "../components/SideBar";
import { DisposalModal } from "../components/DisposalModal";
import { useNavigate } from "react-router-dom";


export const Disposal = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")) {
        navigate("/");
    }}, []);

    const [search, setSearch] = useState("");
    const [properties, setProperties] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);

    useEffect(() => {
        axios.get(`${URL}/api/v1/case/properties/all`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }).then(res => {
            setProperties(res.data.properties || []);
            setLoading(false);
        }).catch(() => setLoading(false));
    }, []);

    const filteredItems = properties.filter(item => 
        item.description.toLowerCase().includes(search.toLowerCase()) || 
        item.qrString.toLowerCase().includes(search.toLowerCase()) ||
        item.case?.crimeNumber.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-white text-gray-900">
            <AppBar />
            <div className="flex">
                <aside className="hidden md:block w-64 border-r border-gray-100 h-[calc(100vh-64px)] sticky top-16 bg-gray-50/50">
                    <Sidebar />
                </aside>

                <main className="flex-1 p-6 md:p-10">
                    <div className="max-w-6xl mx-auto">
                        <header className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                            <div>
                                <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Evidence Disposal Registry</h1>
                                <p className="text-gray-500 mt-1">Legal tracking of property release and destruction</p>
                            </div>
                            <div className="w-full md:w-80">
                                <InputBox 
                                    label="Search Ledger" 
                                    placeholder="Search Description or FIR..." 
                                    value={search} 
                                    onChange={(e) => setSearch(e.target.value)} 
                                />
                            </div>
                        </header>

                        {loading ? (
                            <div className="text-center py-20 text-gray-400 font-bold animate-pulse tracking-widest text-xs">
                                ACCESSING DATABASE...
                            </div>
                        ) : (
                            <section className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-gray-50 border-b border-gray-100">
                                                <th className="px-6 py-4 text-[10px] font-black uppercase text-gray-400 tracking-widest">Property Description</th>
                                                <th className="px-6 py-4 text-[10px] font-black uppercase text-gray-400 tracking-widest">Case Reference</th>
                                                <th className="px-6 py-4 text-[10px] font-black uppercase text-gray-400 tracking-widest">Status / Method</th>
                                                <th className="px-6 py-4 text-[10px] font-black uppercase text-gray-400 tracking-widest text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {(filteredItems.length!=0)?filteredItems.map((item) => (
                                                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="px-6 py-4">
                                                        <div className="font-bold text-gray-900">{item.description}</div>
                                                        <div className="text-[10px] text-gray-400 font-mono mt-0.5">{item.qrString}</div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-semibold text-gray-700">
                                                        {item.case?.crimeNumber || "N/A"}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {item.status === "DISPOSED" ? (
                                                            <div className="flex flex-col">
                                                                <span className="bg-red-50 text-red-700 border border-red-200 text-[10px] px-2.5 py-1 rounded-lg font-black uppercase w-fit">
                                                                    {item.disposal?.type || "DISPOSED"}
                                                                </span>
                                                                <span className="text-[9px] text-gray-400 mt-1 font-mono">{item.disposal?.courtOrderRef}</span>
                                                            </div>
                                                        ) : (
                                                            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] px-2.5 py-1 rounded-lg font-black uppercase">
                                                                In Custody
                                                            </span>
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        {item.status === "IN_CUSTODY" ? (
                                                            <button 
                                                                onClick={() => setSelectedPropertyId(item.id)}
                                                                className="text-[10px] font-black text-red-600 border border-red-100 px-4 py-2 rounded-xl hover:bg-red-600 hover:text-white transition-all uppercase tracking-tighter"
                                                            >
                                                                Log Disposal
                                                            </button>
                                                        ) : (
                                                            <button 
                                                                disabled
                                                                className="text-[10px] font-black text-gray-300 border border-gray-100 px-4 py-2 rounded-xl uppercase tracking-tighter cursor-not-allowed"
                                                            >
                                                                Finalized
                                                            </button>
                                                        )}
                                                    </td>
                                                </tr>
                                            )):(
                                                <tr>
                                                    <td colSpan={6} className="text-center py-4 text-gray-500">
                                                        📄 No Disposal Records Found
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        )}
                    </div>
                </main>
            </div>

            {selectedPropertyId && (
                <DisposalModal 
                    propertyId={selectedPropertyId} 
                    onClose={() => setSelectedPropertyId(null)} 
                    onSuccess={() => {
                        setSelectedPropertyId(null);
                        window.location.reload();
                    }}
                />
            )}
        </div>
    );
};