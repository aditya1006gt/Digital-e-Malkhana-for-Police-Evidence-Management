import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../config";
import { AppBar } from "../components/AppBar";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { Sidebar } from "../components/SideBar"; // Added Sidebar import

export const PropertyInfo = () => {
    const { qrString } = useParams();
    const [property, setProperty] = useState<any>(null);
    const [logText, setLogText] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.post(`${URL}/api/v1/case/scan/${qrString}`, {}, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
        .then(res => {
            setProperty(res.data.property);
        })
        .catch(err => {
            console.error("Authentication or Scan error:", err.response?.data);
            if (err.response?.status === 401) navigate("/signin");
        });
    }, [qrString, navigate]);

    // Consistent Loading State with Sidebar
    if (!property) return (
        <div className="min-h-screen bg-white">
            <AppBar />
            <div className="flex">
                <aside className="hidden md:block w-64 border-r border-gray-100 h-[calc(100vh-64px)] sticky top-16 bg-gray-50/50">
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
                {/* Sidebar section */}
                <aside className="hidden md:block w-64 border-r border-gray-100 h-[calc(100vh-64px)] sticky top-16 bg-gray-50/50">
                    <Sidebar />
                </aside>

                {/* Main content section */}
                <main className="flex-1 p-6 md:p-10 bg-gray-50/30">
                    <div className="max-w-3xl mx-auto">
                        
                        {/* Evidence Header Card */}
                        <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm mb-8">
                            <div className="bg-gray-900 text-white p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <p className="text-[10px] font-mono opacity-60 tracking-widest uppercase">{property.qrString}</p>
                                    <span className="bg-emerald-500 text-gray-900 px-3 py-1 rounded-full font-black uppercase text-[10px] tracking-tighter">
                                        In Custody
                                    </span>
                                </div>
                                <h1 className="text-4xl font-black tracking-tight uppercase">{property.description}</h1>
                                <p className="mt-2 text-gray-400 text-sm font-medium">Internal Property Record</p>
                            </div>

                            {/* Property Details Grid */}
                            <div className="p-8 grid grid-cols-2 gap-8 border-b border-gray-100">
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Current Location</p>
                                    <p className="font-bold text-lg text-gray-800">{property.location}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Linked Case File</p>
                                    <p className="font-bold text-lg text-blue-600 underline decoration-2 underline-offset-4 cursor-pointer">
                                        {property.case?.crimeNumber}
                                    </p>
                                </div>
                            </div>

                            {/* Audit Trail Section */}
                            <div className="p-8">
                                <h3 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                                    MOVEMENT AUDIT TRAIL
                                </h3>
                                
                                <div className="space-y-6">
                                    <div className="border-l-4 border-gray-900 pl-6 py-1 relative">
                                        <div className="absolute -left-[7px] top-0 w-3 h-3 bg-gray-900 rounded-full border-2 border-white"></div>
                                        <p className="text-sm font-black text-gray-900 uppercase">Property Registered</p>
                                        <p className="text-xs text-gray-500 mt-1 font-medium">
                                            Officer: {property.case?.ioName} • Station: {property.case?.policeStation}
                                        </p>
                                    </div>
                                    {/* You can map additional logs here in the future */}
                                </div>
                                
                                {/* Status Update Area */}
                                <div className="mt-12 pt-8 border-t border-gray-100">
                                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Official Status Remark</p>
                                        <div className="space-y-4">
                                            <InputBox 
                                                label="" 
                                                placeholder="e.g. Sent for Forensic Analysis" 
                                                value={logText} 
                                                onChange={(e) => setLogText(e.target.value)} 
                                            />
                                            <Button 
                                                label="Log Custody Movement" 
                                                onPress={() => alert("Digital signature recorded officially.")} 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Back Navigation */}
                        <div className="text-center">
                            <button 
                                onClick={() => navigate("/dashboard")}
                                className="text-xs font-black text-gray-400 hover:text-gray-900 transition uppercase tracking-widest"
                            >
                                ← Back to Registry
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};