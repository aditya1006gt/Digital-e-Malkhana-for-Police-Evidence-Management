import { useState } from "react";
import axios from "axios";
import { URL } from "../config";

export const DisposalModal = ({ propertyId, onClose, onSuccess }: any) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        type: "RETURNED",
        courtOrderRef: "",
        dateOfDisposal: new Date().toISOString().split('T')[0],
        remarks: ""
    });

    const handleDisposal = async () => {
        setLoading(true);
        try {
            await axios.post(`${URL}/api/v1/case/property/${propertyId}/dispose`, 
            { ...formData, dateOfDisposal: new Date(formData.dateOfDisposal).toISOString() }, 
            { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }});
            onSuccess();
        } catch (e) {
            alert("Disposal failed. Ensure all fields are valid.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
            <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-red-600 p-6 text-white">
                    <h2 className="text-xl font-black uppercase tracking-tight">Final Disposal Order</h2>
                    <p className="text-[10px] opacity-80 font-bold uppercase tracking-widest mt-1">Irreversible Custody Termination</p>
                </div>
                
                <div className="p-8 space-y-5">
                    <div>
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Disposal Method</label>
                        <select 
                            className="w-full mt-1 p-3 bg-gray-50 border rounded-xl font-bold text-sm outline-none"
                            value={formData.type}
                            onChange={(e) => setFormData({...formData, type: e.target.value})}
                        >
                            <option value="RETURNED">Returned to Owner</option>
                            <option value="DESTROYED">Authorized Destruction</option>
                            <option value="AUCTION">Public Auction</option>
                            <option value="TRANSFERRED">Court Custody Transfer</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Court Order Reference</label>
                        <input 
                            placeholder="e.g. CRT/2024/88/J"
                            className="w-full mt-1 p-3 bg-gray-50 border rounded-xl font-mono text-sm outline-none focus:border-red-500"
                            onChange={(e) => setFormData({...formData, courtOrderRef: e.target.value})}
                        />
                    </div>

                    <div>
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Execution Date</label>
                        <input 
                            type="date"
                            className="w-full mt-1 p-3 bg-gray-50 border rounded-xl font-bold text-sm outline-none"
                            value={formData.dateOfDisposal}
                            onChange={(e) => setFormData({...formData, dateOfDisposal: e.target.value})}
                        />
                    </div>

                    <div>
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Final Remarks</label>
                        <textarea 
                            placeholder="Witnessed by SDM / Panchnama details..."
                            className="w-full mt-1 p-3 bg-gray-50 border rounded-xl text-sm outline-none h-20"
                            onChange={(e) => setFormData({...formData, remarks: e.target.value})}
                        />
                    </div>
                </div>

                <div className="p-6 bg-gray-50 flex gap-3">
                    <button onClick={onClose} className="flex-1 text-[10px] font-black uppercase text-gray-400 hover:text-gray-600">Cancel</button>
                    <button 
                        onClick={handleDisposal}
                        disabled={loading}
                        className="flex-[2] bg-red-600 text-white py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-700 transition"
                    >
                        {loading ? "PROCESSING..." : "CONFIRM DISPOSAL"}
                    </button>
                </div>
            </div>
        </div>
    );
};