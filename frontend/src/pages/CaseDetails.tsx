import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../config";
import { AppBar } from "../components/AppBar";
import { Sidebar } from "../components/SideBar"; // Added Sidebar import

export const CaseDetails = () => {
    const { id } = useParams();
    const [caseInfo, setCaseInfo] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${URL}/api/v1/case/specific/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }).then(res => {
            setCaseInfo(res.data.case);
            setLoading(false);
        }).catch(() => setLoading(false));
    }, [id]);

    // Consistent layout for Loading state
    if (loading) {
        return (
            <div className="min-h-screen bg-white">
                <AppBar />
                <div className="flex">
                    <aside className="hidden md:block w-64 border-r border-gray-100 h-[calc(100vh-64px)] sticky top-16 bg-gray-50/50">
                        <Sidebar />
                    </aside>
                    <main className="flex-1 flex items-center justify-center font-black text-xs tracking-[0.3em] text-gray-400">
                        RETRIEVING CASE RECORDS...
                    </main>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white pb-20">
            <AppBar />
            <div className="flex">
                {/* Sidebar section */}
                <aside className="hidden md:block w-64 border-r border-gray-100 h-[calc(100vh-64px)] sticky top-16 bg-gray-50/50 print:hidden">
                    <Sidebar />
                </aside>

                {/* Main content section */}
                <main className="flex-1">
                    <div className="max-w-5xl mx-auto p-6">
                        <header className="flex justify-between items-end mb-8 border-b border-gray-100 pb-8">
                            <div>
                                <span className="bg-gray-900 text-white px-3 py-1 text-[10px] font-black rounded uppercase tracking-widest">Official Record</span>
                                <h1 className="text-4xl font-black mt-3 text-gray-900 tracking-tighter uppercase">{caseInfo.crimeNumber}</h1>
                                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mt-1">
                                    {caseInfo.policeStation} • {caseInfo.actLaw} Sec {caseInfo.sectionLaw}
                                </p>
                            </div>
                            <button 
                                onClick={() => window.print()} 
                                className="px-6 py-3 bg-gray-900 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition print:hidden"
                            >
                                Print Property Tags
                            </button>
                        </header>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 print:grid-cols-2">
                            {caseInfo.properties.map((item: any) => (
                                <div key={item.id} className="border-2 border-gray-900 p-5 flex gap-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex-shrink-0 flex flex-col items-center">
                                        <div className="p-2 border border-gray-100 rounded-xl bg-white">
                                            <img src={item.qrCodeImage} alt="QR" className="w-24 h-24" />
                                        </div>
                                        <p className="text-[9px] font-mono font-bold text-gray-400 text-center mt-2 uppercase">{item.qrString.slice(0, 15)}...</p>
                                    </div>
                                    <div className="flex-grow flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-black text-xl leading-tight text-gray-900 uppercase tracking-tighter">{item.description}</h3>
                                            <div className="mt-2 space-y-1">
                                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Category: <span className="text-gray-700">{item.category}</span></p>
                                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Location: <span className="text-gray-700">{item.location}</span></p>
                                            </div>
                                        </div>
                                        <div className="border-t border-gray-100 pt-3 mt-4">
                                            <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">{caseInfo.crimeNumber}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {caseInfo.properties.length === 0 && (
                            <div className="text-center py-20 border-2 border-dashed border-gray-100 rounded-3xl">
                                <p className="text-gray-400 font-bold">No property items linked to this case file.</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};