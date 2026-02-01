import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useNavigate } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { InputBox } from "../components/InputBox";
import { Sidebar } from "../components/SideBar"; // Added Sidebar import

export const QRScanner = () => {
    const navigate = useNavigate();
    const [manualCode, setManualCode] = useState("");

    return (
        <div className="min-h-screen bg-white">
            <AppBar />
            <div className="flex">
                {/* Sidebar Section */}
                <aside className="hidden md:block w-64 border-r border-gray-100 h-[calc(100vh-64px)] sticky top-16 bg-gray-50/50">
                    <Sidebar />
                </aside>

                {/* Main Content Section */}
                <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
                    <div className="w-full max-w-md text-center">
                        <header className="mb-8">
                            <h1 className="text-3xl font-bold text-gray-900">Evidence Scanner</h1>
                            <p className="text-gray-500 mt-1">Scan the QR code on the property tag to view status.</p>
                        </header>
                        
                        {/* Scanner Viewport */}
                        <div className="relative aspect-square bg-black rounded-[2.5rem] border-8 border-gray-100 overflow-hidden shadow-xl">
                            <BarcodeScannerComponent
                                width="100%"
                                height="100%"
                                onUpdate={(err, result) => {
                                    if (result) navigate(`/property/${result.getText()}`);
                                }}
                            />
                            {/* Scanning Overlay Animation */}
                            <div className="absolute inset-0 border-2 border-blue-500/40 m-16 rounded-2xl pointer-events-none animate-pulse">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-scan"></div>
                            </div>
                        </div>

                        {/* Manual Entry Section */}
                        <div className="mt-10 p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
                            <p className="text-[10px] font-black text-gray-400 mb-4 uppercase tracking-[0.2em]">Manual Identification</p>
                            <InputBox 
                                label="" 
                                placeholder="Enter PROP-UUID (e.g. PROP-70cc...)" 
                                value={manualCode} 
                                onChange={(e) => setManualCode(e.target.value)} 
                            />
                            <button 
                                onClick={() => navigate(`/property/${manualCode}`)}
                                className="w-full mt-4 bg-gray-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-black transition active:scale-[0.98]"
                            >
                                VERIFY PROPERTY ID 
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};