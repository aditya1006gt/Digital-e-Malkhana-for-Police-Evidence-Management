import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useNavigate } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { InputBox } from "../components/InputBox";

export const QRScanner = () => {
    const navigate = useNavigate();
    const [manualCode, setManualCode] = useState("");

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            <AppBar />
            <div className="flex flex-col items-center justify-center pt-12 p-6">
                <div className="w-full max-w-sm text-center">
                    <h1 className="text-2xl font-bold mb-2">Evidence Scanner</h1>
                    <p className="text-slate-400 text-sm mb-8">Scan the QR code on the property tag to view status.</p>
                    
                    <div className="relative aspect-square bg-black rounded-3xl border-4 border-slate-700 overflow-hidden shadow-2xl">
                        <BarcodeScannerComponent
                            width="100%"
                            height="100%"
                            onUpdate={(err, result) => {
                                if (result) navigate(`/property/${result.getText()}`);
                            }}
                        />
                        <div className="absolute inset-0 border-2 border-blue-500/30 m-12 rounded-xl pointer-events-none animate-pulse"></div>
                    </div>

                    <div className="mt-10 p-6 bg-slate-800 rounded-2xl">
                        <p className="text-xs font-bold text-slate-500 mb-4 uppercase">Or Enter Manually</p>
                        <InputBox 
                            label="" 
                            placeholder="Enter PROP-UUID..." 
                            value={manualCode} 
                            onChange={(e) => setManualCode(e.target.value)} 
                        />
                        <button 
                            onClick={() => navigate(`/property/${manualCode}`)}
                            className="w-full mt-3 bg-white text-black py-2 rounded-lg font-bold text-sm"
                        >
                            VERIFY ID
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};