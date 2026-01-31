import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../config";
import { AppBar } from "../components/AppBar";

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
        });
    }, [id]);

    if (loading) return <div className="h-screen flex items-center justify-center font-mono">RETRIEVING CASE RECORDS...</div>;

    return (
        <div className="min-h-screen bg-white pb-20">
            <AppBar />
            <div className="max-w-5xl mx-auto p-6">
                <div className="flex justify-between items-end mb-8 border-b pb-6">
                    <div>
                        <span className="bg-black text-white px-2 py-1 text-[10px] font-bold rounded">OFFICIAL RECORD</span>
                        <h1 className="text-4xl font-black mt-2">{caseInfo.crimeNumber}</h1>
                        <p className="text-gray-500 uppercase tracking-widest text-sm">{caseInfo.policeStation} • {caseInfo.actLaw} Sec {caseInfo.sectionLaw}</p>
                    </div>
                    <button onClick={() => window.print()} className="px-6 py-2 bg-gray-900 text-white rounded-lg font-bold text-sm">PRINT ALL TAGS</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2">
                    {caseInfo.properties.map((item: any) => (
                        <div key={item.id} className="border-2 border-black p-4 flex gap-4 bg-white rounded-lg">
                            <div className="flex-shrink-0">
                                <img src={item.qrCodeImage} alt="QR" className="w-24 h-24 border p-1" />
                                <p className="text-[8px] font-mono text-center mt-1">{item.qrString}</p>
                            </div>
                            <div className="flex-grow flex flex-col justify-between">
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">{item.description}</h3>
                                    <p className="text-xs text-gray-600">Category: {item.category}</p>
                                    <p className="text-xs font-bold mt-1">LOC: {item.location}</p>
                                </div>
                                <div className="border-t pt-1 mt-2">
                                    <p className="text-[10px] font-bold uppercase">{caseInfo.crimeNumber}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};