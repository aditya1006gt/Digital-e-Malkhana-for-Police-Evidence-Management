import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../config";
import { AppBar } from "../components/AppBar";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";

export const PropertyInfo = () => {
    const { qrString } = useParams();
    const [property, setProperty] = useState<any>(null);
    const [logText, setLogText] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
    // Note the empty {} as the second argument
    axios.post(`${URL}/api/v1/case/scan/${qrString}`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
        setProperty(res.data.property);
    })
    .catch(err => {
        console.error("Authentication or Scan error:", err.response?.data);
        // Optional: Redirect to login if token is expired
        if (err.response?.status === 401) navigate("/signin");
    });
}, [qrString]);

    if (!property) return <div className="p-10 font-mono">SEARCHING MALKHANA DATABASE...</div>;

    return (
        <div className="min-h-screen bg-gray-50">
            <AppBar />
            <div className="max-w-3xl mx-auto p-6">
                <div className="bg-white border-2 border-black rounded-2xl overflow-hidden shadow-sm">
                    <div className="bg-black text-white p-6">
                        <p className="text-[10px] font-mono opacity-70">{property.qrString}</p>
                        <h1 className="text-3xl font-black">{property.description}</h1>
                        <p className="mt-2 text-sm">Status: <span className="bg-green-500 text-black px-2 py-0.5 rounded font-bold uppercase text-[10px]">In Custody</span></p>
                    </div>

                    <div className="p-6 grid grid-cols-2 gap-4 border-b">
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-bold">Location</p>
                            <p className="font-semibold">{property.location}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-bold">Linked Case</p>
                            <p className="font-semibold">{property.case?.crimeNumber}</p>
                        </div>
                    </div>

                    <div className="p-6">
                        <h3 className="font-bold mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span>
                            MOVEMENT AUDIT TRAIL
                        </h3>
                        <div className="space-y-4">
                            {/* Static example logs */}
                            <div className="border-l-2 border-gray-100 pl-4 py-1">
                                <p className="text-sm font-bold">Property Registered</p>
                                <p className="text-xs text-gray-500">Officer: {property.case?.ioName} • PS: {property.case?.policeStation}</p>
                            </div>
                        </div>
                        
                        <div className="mt-8 pt-6 border-t space-y-3">
                            <InputBox label="Add Status Remark" placeholder="e.g. Sent for Forensic Analysis" value={logText} onChange={(e) => setLogText(e.target.value)} />
                            <Button label="Update Custody Log" onPress={() => alert("Log updated officially")} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};