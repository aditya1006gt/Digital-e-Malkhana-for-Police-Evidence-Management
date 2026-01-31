import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../config";
import { AppBar } from "../components/AppBar";
import { Sidebar } from "../components/SideBar";
import { MovementModal } from "../components/MovementModal";
import { DisposalModal } from "../components/DisposalModal"; // Ensure you create this component

export const PropertyInfo = () => {
    const { qrString } = useParams();
    const [property, setProperty] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDisposalOpen, setIsDisposalOpen] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")) {
        navigate("/");
    }}, []);

    useEffect(() => {
        axios.post(`${URL}/api/v1/case/scan/${qrString}`, {}, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
        .then(res => {
            setProperty(res.data.property);
        })
        .catch(err => {
            console.error("Scan error:", err.response?.data);
            if (err.response?.status === 401) navigate("/");
        });
    }, [qrString, navigate]);

    if (!property) return (
        <div className="min-h-screen bg-white flex flex-col">
            <AppBar />
            <div className="flex flex-1">
                <aside className="hidden md:block w-64 border-r border-gray-100 bg-gray-50/50">
                    <Sidebar />
                </aside>
                <main className="flex-1 flex items-center justify-center font-black text-xs tracking-[0.3em] text-gray-400">
                    SEARCHING MALKHANA DATABASE...
                </main>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-white text-gray-900">
            <AppBar />
            <div className="flex">
                <aside className="hidden md:block w-64 border-r border-gray-100 h-[calc(100vh-64px)] sticky top-16 bg-gray-50/50">
                    <Sidebar />
                </aside>

                <main className="flex-1 p-6 md:p-10 bg-gray-50/30">
                    <div className="max-w-3xl mx-auto">
                        
                        {/* Evidence Header */}
                        <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm mb-8">
                            <div className={`p-8 text-white transition-colors duration-500 ${property.status === 'IN_CUSTODY' ? 'bg-gray-900' : 'bg-red-700'}`}>
                                <div className="flex justify-between items-start mb-4">
                                    <p className="text-[10px] font-mono opacity-60 tracking-widest uppercase">{property.qrString}</p>
                                    <span className={`px-3 py-1 rounded-full font-black uppercase text-[10px] tracking-tighter ${property.status === 'IN_CUSTODY' ? 'bg-emerald-500 text-gray-900' : 'bg-white text-red-700'}`}>
                                        {property.status === 'IN_CUSTODY' ? 'In Custody' : 'Disposed'}
                                    </span>
                                </div>
                                <h1 className="text-4xl font-black tracking-tight uppercase">{property.description}</h1>
                                {property.status === 'DISPOSED' && (
                                    <p className="mt-2 text-red-200 text-[10px] font-black uppercase tracking-[0.2em]">Closed Record • Terminated from Malkhana</p>
                                )}
                            </div>

                            <div className="p-8 grid grid-cols-2 gap-8 border-b border-gray-100 bg-white">
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Current Physical Location</p>
                                    <p className="font-bold text-lg text-gray-800">{property.location}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Linked Case File</p>
                                    <p className="font-bold text-lg text-blue-600 underline decoration-2 underline-offset-4">
                                        {property.case?.crimeNumber}
                                    </p>
                                </div>
                            </div>

                            {/* Audit Trail Section */}
                            <div className="p-8">
                                <div className="flex justify-between items-center mb-10">
                                    <h3 className="font-black text-xs uppercase tracking-widest text-gray-400 flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${property.status === 'IN_CUSTODY' ? 'bg-blue-600 animate-pulse' : 'bg-red-600'}`}></div>
                                        Chain of Custody Tracks
                                    </h3>
                                    
                                    <div className="flex gap-2">
                                        {property.status === 'IN_CUSTODY' && (
                                            <>
                                                <button 
                                                    onClick={() => setIsModalOpen(true)}
                                                    className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-700 transition shadow-lg shadow-blue-100"
                                                >
                                                    + Authorize Handover
                                                </button>
                                                <button 
                                                    onClick={() => setIsDisposalOpen(true)}
                                                    className="bg-red-50 text-red-600 border border-red-100 px-5 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-600 hover:text-white transition"
                                                >
                                                    Dispose
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                                
                                <div className="space-y-10">
                                    {/* Disposal Event (If exists) */}
                                    {property.disposal && (
                                        <div className="border-l-4 border-red-600 pl-8 py-1 relative">
                                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-sm"></div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <p className="text-sm font-black text-red-700 uppercase">FINAL DISPOSAL: {property.disposal.type}</p>
                                            </div>
                                            <div className="bg-red-50 p-3 rounded-xl border border-red-100 w-fit">
                                                <p className="text-[10px] font-bold text-red-800">Order Ref: {property.disposal.courtOrderRef}</p>
                                                <p className="text-[10px] text-red-600 mt-1">{property.disposal.remarks}</p>
                                            </div>
                                            <p className="mt-2 text-[10px] font-medium text-gray-400">
                                                {new Date(property.disposal.disposedAt).toLocaleString()}
                                            </p>
                                        </div>
                                    )}

                                    {/* Active Movement Logs */}
                                    {property.custodyLogs?.map((log: any) => (
                                        <div key={log.id} className="border-l-4 border-blue-600 pl-8 py-1 relative">
                                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm"></div>
                                            
                                            <div className="flex flex-wrap items-center gap-3 mb-2">
                                                <p className="text-sm font-black text-gray-900 uppercase">Movement: {log.purpose}</p>
                                                <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-black uppercase">Verified</span>
                                            </div>

                                            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100 w-fit">
                                                <div className="text-center px-2">
                                                    <p className="text-[8px] font-black text-gray-400 uppercase">From</p>
                                                    <p className="text-xs font-bold text-gray-600">{log.fromOfficer || "Malkhana"}</p>
                                                </div>
                                                <div className="h-4 w-[1px] bg-gray-200"></div>
                                                <div className="text-center px-2">
                                                    <p className="text-[8px] font-black text-blue-400 uppercase">To Recipient</p>
                                                    <p className="text-xs font-bold text-blue-700">{log.toOfficer}</p>
                                                </div>
                                            </div>

                                            <div className="mt-3 flex items-center gap-4 text-[10px] font-medium text-gray-400">
                                                <span>{new Date(log.movedAt).toLocaleString()}</span>
                                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                <span className="italic">Remarks: {log.remarks || "No additional notes"}</span>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Initial Registration - Grayed Out (The Root) */}
                                    <div className="border-l-4 border-gray-800 pl-8 py-1 relative opacity-50">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-800 rounded-full border-4 border-white"></div>
                                        <p className="text-sm font-black text-gray-600 uppercase">Initial Registration (Malkhana Entry)</p>
                                        <div className="mt-2 flex items-center gap-4 text-[10px] font-medium text-gray-600">
                                            <span>Officer: {property.case?.ioName}</span>
                                            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                                            <span>Station: {property.case?.policeStation}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mb-10">
                            <button 
                                onClick={() => navigate("/dashboard")}
                                className="text-xs font-black text-gray-400 hover:text-gray-900 transition uppercase tracking-widest"
                            >
                                ← Back to Case Ledger
                            </button>
                        </div>
                    </div>
                </main>
            </div>

            {/* Modals */}
            {isModalOpen && (
                <MovementModal
                    propertyId={property.id} 
                    onClose={() => setIsModalOpen(false)} 
                    onSuccess={() => window.location.reload()} 
                />
            )}

            {isDisposalOpen && (
                <DisposalModal
                    propertyId={property.id}
                    onClose={() => setIsDisposalOpen(false)}
                    onSuccess={() => window.location.reload()}
                />
            )}
        </div>
    );
};