import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { URL } from "../config";
import { AppBar } from "../components/AppBar";
import { Sidebar } from "../components/SideBar";

// Type Definitions
interface Property {
    id: string;
    qrCodeImage: string;
    qrString: string;
    description: string;
    category: string;
    location: string;
}

interface CaseRecord {
    id: string;
    crimeNumber: string;
    policeStation: string;
    actLaw: string;
    sectionLaw: string;
    ioName: string;
    ioId: string;
    userId: string; // Added to check ownership
    properties: Property[];
}

export const CaseDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [caseInfo, setCaseInfo] = useState<CaseRecord | null>(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentUserId, setCurrentUserId] = useState<string | null>(null);

    // Module 6: Print-specific styles injection
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @media print {
                nav, aside, button, .print-hidden { display: none !important; }
                main { padding: 0 !important; margin: 0 !important; }
                .max-w-5xl { max-width: 100% !important; }
                .grid { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 10px !important; }
                .border-2 { border: 1px solid #000 !important; }
                body { background: white !important; }
            }
        `;
        document.head.appendChild(style);
        return () => { document.head.removeChild(style); };
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/");
            return;
        }
        
        // Get current user info to verify if they are the IO in charge
        axios.get(`${URL}/api/v1/user/info`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => {
            setCurrentUserId(res.data.user.id);
        }).catch(err => console.error("User Auth Error", err));

    }, []);
    
    // Edit Form State
    const [formData, setFormData] = useState({
        ioName: "",
        ioId: "",
        actLaw: "",
        sectionLaw: "",
        policeStation: ""
    });

    const fetchCaseData = async () => {
        try {
            const res = await axios.get(`${URL}/api/v1/case/specific/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            const data = res.data.case;
            setCaseInfo(data);
            setFormData({
                ioName: data.ioName || "",
                ioId: data.ioId || "",
                actLaw: data.actLaw || "",
                sectionLaw: data.sectionLaw || "",
                policeStation: data.policeStation || ""
            });
        } catch (err) {
            console.error("Fetch Error:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCaseData();
    }, [id]); 

    const handleUpdate = async () => {
        try {
            await axios.put(`${URL}/api/v1/case/update/${caseInfo?.id}`, formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            setIsEditing(false);
            fetchCaseData();
        } catch (err) {
            alert("Failed to update case details. Ensure you are the authorized officer.");
        }
    };

    if (loading) return (
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

    if (!caseInfo) return <div className="p-20 text-center">Case not found.</div>;

    // Check if current user is the owner (In-charge Inspector/IO)
    const isAuthorized = currentUserId === caseInfo.userId;

    return (
        <div className="min-h-screen bg-white">
            <AppBar />
            <div className="flex">
                <aside className="hidden md:block w-64 border-r border-gray-100 h-[calc(100vh-64px)] sticky top-16 bg-gray-50/50 print:hidden">
                    <Sidebar />
                </aside>

                <main className="flex-1 p-6 md:p-10">
                    <div className="max-w-5xl mx-auto">
                        
                        {/* Header */}
                        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-b border-gray-100 pb-8 gap-4">
                            <div>
                                <span className="bg-gray-900 text-white px-3 py-1 text-[10px] font-black rounded uppercase tracking-widest">Official Record</span>
                                <h1 className="text-5xl font-black mt-3 text-gray-900 tracking-tighter uppercase">{caseInfo.crimeNumber}</h1>
                                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mt-2">
                                    {caseInfo.policeStation} • {caseInfo.actLaw} Sec {caseInfo.sectionLaw}
                                </p>
                                <p className="text-gray-400 text-[10px] mt-1 font-mono uppercase">IO: {caseInfo.ioName} (ID: {caseInfo.ioId})</p>
                            </div>
                            <div className="flex gap-3 print:hidden">
                                {/* Only show Edit if Authorized */}
                                {isAuthorized && (
                                    <button 
                                        onClick={() => setIsEditing(true)}
                                        className="px-5 py-2.5 border-2 border-gray-900 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-50 transition"
                                    >
                                        Edit Details
                                    </button>
                                )}
                                <button 
                                    onClick={() => window.print()} 
                                    className="px-5 py-2.5 bg-gray-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:shadow-lg transition"
                                >
                                    Print Tags
                                </button>
                            </div>
                        </header>

                        {/* Property Tags Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2">
                            {caseInfo.properties.map((item) => (
                                <div 
                                    key={item.id} 
                                    onClick={() => navigate(`/property/${item.qrString}`)}
                                    className="border-2 border-gray-900 p-5 flex gap-5 bg-white rounded-2xl cursor-pointer hover:bg-gray-50 transition group"
                                >
                                    <div className="flex-shrink-0 flex flex-col items-center">
                                        <div className="p-2 border border-gray-100 rounded-xl bg-white shadow-sm group-hover:border-gray-900 transition">
                                            <img src={item.qrCodeImage} alt="QR" className="w-20 h-20" />
                                        </div>
                                        <p className="text-[8px] font-mono font-bold text-gray-400 mt-2 uppercase">{item.qrString.slice(0, 12)}</p>
                                    </div>
                                    <div className="flex-grow flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-black text-lg leading-tight text-gray-900 uppercase tracking-tighter group-hover:text-blue-600 transition">{item.description}</h3>
                                            <div className="mt-2 space-y-1">
                                                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">CAT: <span className="text-gray-700">{item.category}</span></p>
                                                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">LOC: <span className="text-gray-700 font-bold">{item.location}</span></p>
                                            </div>
                                        </div>
                                        <div className="border-t border-gray-100 pt-3 mt-3 flex justify-between items-center">
                                            <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest">{caseInfo.crimeNumber}</p>
                                            <span className="text-[8px] font-black text-gray-300 group-hover:text-blue-400 uppercase tracking-widest print:hidden">View History →</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {caseInfo.properties.length === 0 && (
                            <div className="text-center py-20 border-2 border-dashed border-gray-100 rounded-3xl">
                                <p className="text-gray-400 font-black text-xs uppercase tracking-widest">No evidence logged in this case.</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>

            {/* Edit Modal */}
            {isEditing && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md border border-gray-100">
                        <div className="mb-6">
                            <h2 className="text-xl font-black uppercase tracking-tight">Modify Case Record</h2>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Authorized Entry Only</p>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">IO Name</label>
                                    <input value={formData.ioName} onChange={(e) => setFormData({...formData, ioName: e.target.value})} className="w-full border-b-2 border-gray-100 py-2 font-bold text-sm focus:border-gray-900 outline-none transition" />
                                </div>
                                <div>
                                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">IO ID</label>
                                    <input value={formData.ioId} onChange={(e) => setFormData({...formData, ioId: e.target.value})} className="w-full border-b-2 border-gray-100 py-2 font-bold text-sm focus:border-gray-900 outline-none transition" />
                                </div>
                            </div>
                            <div>
                                <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Police Station</label>
                                <input value={formData.policeStation} onChange={(e) => setFormData({...formData, policeStation: e.target.value})} className="w-full border-b-2 border-gray-100 py-2 font-bold text-sm focus:border-gray-900 outline-none transition" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Act/Law</label>
                                    <input value={formData.actLaw} onChange={(e) => setFormData({...formData, actLaw: e.target.value})} className="w-full border-b-2 border-gray-100 py-2 font-bold text-sm focus:border-gray-900 outline-none transition" />
                                </div>
                                <div>
                                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Section</label>
                                    <input value={formData.sectionLaw} onChange={(e) => setFormData({...formData, sectionLaw: e.target.value})} className="w-full border-b-2 border-gray-100 py-2 font-bold text-sm focus:border-gray-900 outline-none transition" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex gap-3">
                            <button onClick={() => setIsEditing(false)} className="flex-1 py-3 font-black text-[10px] uppercase tracking-widest text-gray-400 hover:text-gray-900 transition">Discard</button>
                            <button onClick={handleUpdate} className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-black transition">Apply Changes</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};