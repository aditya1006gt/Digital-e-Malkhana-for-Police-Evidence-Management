import { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../config";
import { AppBar } from "../components/AppBar";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";

export const Disposal = () => {
    const [search, setSearch] = useState("");
    const [disposalItems, setDisposalItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch items marked for disposal or awaiting court order
        axios.get(`${URL}/api/v1/property/disposal-list`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }).then(res => {
            setDisposalItems(res.data.items || []);
            setLoading(false);
        }).catch(() => setLoading(false));
    }, []);

    const handleDisposal = async (id: string) => {
        const confirmAction = window.confirm("Are you sure you want to mark this item as DISPOSED? This action is permanent.");
        if (!confirmAction) return;

        try {
            await axios.post(`${URL}/api/v1/property/dispose/${id}`, {}, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            setDisposalItems(prev => prev.filter(item => item.id !== id));
            alert("Status updated to Disposed.");
        } catch (e) {
            alert("Error updating disposal status.");
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <AppBar />
            <div className="max-w-6xl mx-auto p-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-black">Disposal Management</h1>
                        <p className="text-gray-500">Authorized release or destruction of evidence</p>
                    </div>
                    <div className="w-full md:w-80">
                        <InputBox 
                            label="Filter by Case/Item ID" 
                            placeholder="Search..." 
                            value={search} 
                            onChange={(e) => setSearch(e.target.value)} 
                        />
                    </div>
                </div>

                {loading ? (
                    <div className="text-center py-20 font-mono animate-pulse">SCANNING DISPOSAL RECORDS...</div>
                ) : (
                    <div className="overflow-x-auto border rounded-xl">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="p-4 text-xs font-bold uppercase text-gray-400">Item Details</th>
                                    <th className="p-4 text-xs font-bold uppercase text-gray-400">Case Ref</th>
                                    <th className="p-4 text-xs font-bold uppercase text-gray-400">Court Order</th>
                                    <th className="p-4 text-xs font-bold uppercase text-gray-400">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {disposalItems.map((item) => (
                                    <tr key={item.id} className="border-b hover:bg-gray-50">
                                        <td className="p-4">
                                            <div className="font-bold">{item.description}</div>
                                            <div className="text-xs text-gray-500">{item.qrString}</div>
                                        </td>
                                        <td className="p-4 font-mono text-sm">{item.case?.crimeNumber}</td>
                                        <td className="p-4">
                                            <span className="bg-yellow-100 text-yellow-800 text-[10px] px-2 py-1 rounded font-bold">AWAITING ORDER</span>
                                        </td>
                                        <td className="p-4">
                                            <button 
                                                onClick={() => handleDisposal(item.id)}
                                                className="text-xs font-bold text-red-600 border border-red-200 px-3 py-1 rounded hover:bg-red-50"
                                            >
                                                EXECUTE DISPOSAL
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {disposalItems.length === 0 && (
                            <div className="text-center py-10 text-gray-400">No items currently pending disposal.</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};