import { useState } from "react";
import axios from "axios";
import { URL } from "../config";
import { AppBar } from "../components/AppBar";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { useNavigate } from "react-router-dom";

export const CreateCase = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    
    const [caseData, setCaseData] = useState({
        policeStation: "",
        ioName: "",
        ioId: "",
        crimeYear: "2026",
        firDate: new Date().toISOString().slice(0, 16),
        seizureDate: new Date().toISOString().slice(0, 16),
        actLaw: "",
        sectionLaw: ""
    });

    const [properties, setProperties] = useState([{
        category: "ELECTRONICS",
        belongingTo: "ACCUSED",
        nature: "RECOVERED",
        quantity: "1",
        location: "",
        description: ""
    }]);

    const handleAddProperty = () => {
        setProperties([...properties, {
            category: "ELECTRONICS", belongingTo: "ACCUSED", nature: "RECOVERED",
            quantity: "1", location: "", description: ""
        }]);
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const payload = {
                ...caseData,
                crimeYear: parseInt(caseData.crimeYear),
                firDate: new Date(caseData.firDate).toISOString(),
                seizureDate: new Date(caseData.seizureDate).toISOString(),
                properties: properties.map(p => ({ ...p, quantity: parseInt(p.quantity) }))
            };
            
            await axios.post(`${URL}/api/v1/case/create`, payload, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            alert("Case and Evidence registered successfully!");
            navigate("/dashboard");
        } catch (e) {
            console.error(e);
            alert("Failed to register case. Check console for details.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <AppBar />
            <div className="max-w-4xl mx-auto p-6">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">New Case Registration</h1>
                    <p className="text-gray-500">Step {step} of 2: {step === 1 ? "FIR Details" : "Evidence Inventory"}</p>
                </div>

                {step === 1 ? (
                    <div className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputBox label="Police Station" placeholder="Station Name" value={caseData.policeStation} onChange={e => setCaseData({...caseData, policeStation: e.target.value})} />
                            <InputBox label="Investigating Officer (I.O.)" placeholder="Name" value={caseData.ioName} onChange={e => setCaseData({...caseData, ioName: e.target.value})} />
                            <InputBox label="I.O. ID/Badge Number" placeholder="ID Number" value={caseData.ioId} onChange={e => setCaseData({...caseData, ioId: e.target.value})} />
                            <InputBox label="Crime Year" placeholder="2026" type="number" value={caseData.crimeYear} onChange={e => setCaseData({...caseData, crimeYear: e.target.value})} />
                            <InputBox label="FIR Date & Time" placeholder="" type="datetime-local" value={caseData.firDate} onChange={e => setCaseData({...caseData, firDate: e.target.value})} />
                            <InputBox label="Seizure Date & Time" placeholder="" type="datetime-local" value={caseData.seizureDate} onChange={e => setCaseData({...caseData, seizureDate: e.target.value})} />
                            <InputBox label="Act (Law)" placeholder="IPC, NDPS, etc." value={caseData.actLaw} onChange={e => setCaseData({...caseData, actLaw: e.target.value})} />
                            <InputBox label="Section" placeholder="e.g. 302, 376" value={caseData.sectionLaw} onChange={e => setCaseData({...caseData, sectionLaw: e.target.value})} />
                        </div>
                        <div className="pt-4">
                            <Button label="Proceed to Evidence List" onPress={() => setStep(2)} />
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {properties.map((prop, index) => (
                            <div key={index} className="p-6 border rounded-2xl bg-gray-50 space-y-4">
                                <h3 className="font-bold text-gray-400 uppercase text-xs">Item #{index + 1}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <InputBox label="Item Description" placeholder="Detailed description" value={prop.description} onChange={e => {
                                        const newProps = [...properties]; newProps[index].description = e.target.value; setProperties(newProps);
                                    }} />
                                    <InputBox label="Quantity" type="number" placeholder="1" value={prop.quantity} onChange={e => {
                                        const newProps = [...properties]; newProps[index].quantity = e.target.value; setProperties(newProps);
                                    }} />
                                    <InputBox label="Storage Location" placeholder="Locker/Shelf No." value={prop.location} onChange={e => {
                                        const newProps = [...properties]; newProps[index].location = e.target.value; setProperties(newProps);
                                    }} />
                                    <div className="flex flex-col space-y-1">
                                        <label className="text-sm font-medium text-gray-500">Category</label>
                                        <select className="px-3 py-2 rounded-lg border border-gray-300 text-sm outline-none" 
                                            value={prop.category} onChange={e => {
                                                const newProps = [...properties]; newProps[index].category = e.target.value; setProperties(newProps);
                                        }}>
                                            <option value="ELECTRONICS">Electronics</option>
                                            <option value="WEAPON">Weapon</option>
                                            <option value="CASH">Cash</option>
                                            <option value="NARCOTICS">Narcotics</option>
                                            <option value="VEHICLE">Vehicle</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="flex flex-col gap-3">
                            <button onClick={handleAddProperty} className="text-sm font-bold text-blue-600 hover:underline w-fit">+ ADD ANOTHER ITEM</button>
                            <div className="flex gap-4">
                                <button onClick={() => setStep(1)} className="w-full py-2 rounded-lg border border-gray-300 font-medium">Back</button>
                                <Button label={loading ? "Registering..." : "Finalize Registration"} onPress={handleSubmit} loading={loading} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};