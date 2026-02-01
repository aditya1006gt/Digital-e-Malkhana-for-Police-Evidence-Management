import { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../config";
import { AppBar } from "../components/AppBar";
import { Sidebar } from "../components/SideBar";
import { useNavigate } from "react-router-dom";

export const ManageEntries = () => {
    const [search, setSearch] = useState("");
    const [cases, setCases] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCases = async () => {
            const endpoint = search 
                ? `${URL}/api/v1/case/manage/search?query=${search}` 
                : `${URL}/api/v1/case/my-cases`;
            
            try {
                const res = await axios.get(endpoint, {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
                });
                setCases(res.data.cases);
            } catch (e) {
                console.error("Search error", e);
            } finally {
                setLoading(false);
            }
        };

        const delayDebounce = setTimeout(fetchCases, 300);
        return () => clearTimeout(delayDebounce);
    }, [search]);

    return (
        <div className="min-h-screen bg-white">
            <AppBar />
            <div className="flex">
                <aside className="hidden md:block w-64 border-r border-gray-100 h-[calc(100vh-64px)] sticky top-16 bg-gray-50/50">
                    <Sidebar />
                </aside>

                <main className="flex-1 p-6 md:p-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex justify-between items-center mb-10">
                            <h1 className="text-3xl font-black uppercase tracking-tighter">Case Registry</h1>
                            <input 
                                className="w-80 p-3 bg-gray-100 rounded-xl border-none outline-none font-bold text-sm focus:ring-2 ring-blue-500"
                                placeholder="Search FIR, IO, or Sections..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {cases.map((c) => (
                                <div 
                                    key={c.id} 
                                    onClick={() => navigate(`/case/${c.id}`)}
                                    className="group border border-gray-200 p-6 rounded-2xl hover:border-blue-500 transition-all cursor-pointer flex justify-between items-center bg-white shadow-sm"
                                >
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="text-[10px] font-black bg-blue-600 text-white px-2 py-0.5 rounded uppercase">
                                                {c.status}
                                            </span>
                                            <p className="text-xl font-black text-gray-900">{c.crimeNumber}</p>
                                        </div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                            {c.actLaw} • Section {c.sectionLaw}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-black text-gray-800">{c._count?.properties} Items</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">IO: {c.ioName}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};