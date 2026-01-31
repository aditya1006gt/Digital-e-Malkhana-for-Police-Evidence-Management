import { useState } from "react";
import axios from "axios";
import { URL } from "../config";
import { InputBox } from "./InputBox";
import { Button } from "./Button";

interface MovementModalProps {
    propertyId: string;
    onClose: () => void;
    onSuccess: () => void;
}

export const MovementModal = ({ propertyId, onClose, onSuccess }: MovementModalProps) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        toOfficer: "",
        purpose: "COURT",
        newLocation: "",
        remarks: ""
    });

    const handleSubmit = async () => {
        if (!formData.toOfficer || !formData.newLocation) {
            alert("Please fill in the Officer and Location fields.");
            return;
        }

        setLoading(true);
        try {
            await axios.post(`${URL}/api/v1/case/property/${propertyId}/move`, formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            onSuccess();
            onClose();
        } catch (e) {
            console.error(e);
            alert("Failed to log movement. Verify backend route exists.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Header */}
                <div className="bg-gray-900 p-6 text-white flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-black uppercase tracking-tight">Chain of Custody</h2>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Movement Authorization Form</p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition text-2xl">&times;</button>
                </div>

                {/* Form Body */}
                <div className="p-8 space-y-5">
                    <InputBox 
                        label="Recipient Officer Name / Rank" 
                        placeholder="e.g. Inspector Raj Sharma" 
                        value={formData.toOfficer} 
                        onChange={(e) => setFormData({...formData, toOfficer: e.target.value})} 
                    />

                    <div className="flex flex-col space-y-1">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Purpose of Movement</label>
                        <select 
                            className="w-full px-4 py-3 border rounded-xl border-gray-200 bg-gray-50 font-bold text-sm outline-none focus:border-blue-500 transition"
                            value={formData.purpose}
                            onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                        >
                            <option value="COURT">Court Production</option>
                            <option value="FSL">Forensic Lab (FSL) Analysis</option>
                            <option value="STORAGE">Transfer to Malkhana Storage</option>
                            <option value="INVESTIGATION">Interrogation / Investigation</option>
                            <option value="DISPOSAL">Disposal Committee</option>
                        </select>
                    </div>

                    <InputBox 
                        label="New Physical Location" 
                        placeholder="e.g. FSL Room 4 / Court Vault" 
                        value={formData.newLocation} 
                        onChange={(e) => setFormData({...formData, newLocation: e.target.value})} 
                    />

                    <div className="flex flex-col space-y-1">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Remarks / Seal Status</label>
                        <textarea 
                            className="w-full px-4 py-3 border rounded-xl border-gray-200 bg-gray-50 font-bold text-sm outline-none focus:border-blue-500 transition min-h-[80px]"
                            placeholder="e.g. Paper seal intact, signatures verified."
                            value={formData.remarks}
                            onChange={(e) => setFormData({...formData, remarks: e.target.value})}
                        />
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 bg-gray-50 border-t flex gap-4">
                    <button 
                        onClick={onClose}
                        className="flex-1 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition uppercase text-xs tracking-widest"
                    >
                        Cancel
                    </button>
                    <div className="flex-[2]">
                        <Button 
                            label={loading ? "LOGGING..." : "AUTHORIZE MOVEMENT"} 
                            onPress={handleSubmit} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};