import { useState } from "react";
import axios from "axios";
import { URL } from "../config";
import { AppBar } from "../components/AppBar";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/SideBar";

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
        belongingTo: "ACCUSED", // Default value
        nature: "RECOVERED",   // Default value
        quantity: "1",
        location: "",
        description: ""
    }]);

    const handleAddProperty = () => {
        setProperties([...properties, {
            category: "ELECTRONICS", 
            belongingTo: "ACCUSED", 
            nature: "RECOVERED",
            quantity: "1", 
            location: "", 
            description: ""
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
            alert("Failed to register case.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <AppBar />
            <div className="flex">
                <aside className="hidden md:block w-64 border-r border-gray-100 h-[calc(100vh-64px)] sticky top-16 bg-gray-50/50">
                    <Sidebar />
                </aside>

                <main className="flex-1">
                    <div className="max-w-4xl mx-auto p-6">
                        <div className="mb-8">
                            <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">New Case Registration</h1>
                            <p className="text-gray-500 font-medium">Step {step} of 2: {step === 1 ? "FIR Details" : "Evidence Inventory"}</p>
                        </div>

                        {step === 1 ? (
                            <div className="space-y-6 bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
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
                                    <div key={index} className="p-8 border border-gray-200 rounded-3xl bg-white space-y-6 shadow-sm">
                                        <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                                            <h3 className="font-black text-gray-400 uppercase text-[10px] tracking-widest">Property Item #{index + 1}</h3>
                                            {properties.length > 1 && (
                                                <button 
                                                    onClick={() => setProperties(properties.filter((_, i) => i !== index))}
                                                    className="text-[10px] font-black text-red-400 hover:text-red-600 uppercase"
                                                >
                                                    Remove
                                                </button>
                                            )}
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="md:col-span-2">
                                                <InputBox label="Item Description" placeholder="Full details (e.g. iPhone 13, Serial: 123456)" value={prop.description} onChange={e => {
                                                    const newProps = [...properties]; newProps[index].description = e.target.value; setProperties(newProps);
                                                }} />
                                            </div>

                                            {/* Selectors Grid */}
                                            <div className="flex flex-col space-y-1">
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Category</label>
                                                <select className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm font-bold outline-none focus:border-blue-500 transition" 
                                                    value={prop.category} onChange={e => {
                                                        const newProps = [...properties]; newProps[index].category = e.target.value; setProperties(newProps);
                                                }}>
                                                    <option value="ELECTRONICS">Electronics</option>
                                                    <option value="WEAPON">Weapon</option>
                                                    <option value="CASH">Cash</option>
                                                    <option value="NARCOTICS">Narcotics</option>
                                                    <option value="VEHICLE">Vehicle</option>
                                                    <option value="DOCUMENTS">Documents</option>
                                                </select>
                                            </div>

                                            <div className="flex flex-col space-y-1">
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Belonging To</label>
                                                <select className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm font-bold outline-none focus:border-blue-500 transition" 
                                                    value={prop.belongingTo} onChange={e => {
                                                        const newProps = [...properties]; newProps[index].belongingTo = e.target.value; setProperties(newProps);
                                                }}>
                                                    <option value="ACCUSED">Accused</option>
                                                    <option value="COMPLAINANT">Complainant</option>
                                                    <option value="VICTIM">Victim</option>
                                                    <option value="UNKNOWN">Unknown / Unclaimed</option>
                                                </select>
                                            </div>

                                            <div className="flex flex-col space-y-1">
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Nature of Property</label>
                                                <select className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm font-bold outline-none focus:border-blue-500 transition" 
                                                    value={prop.nature} onChange={e => {
                                                        const newProps = [...properties]; newProps[index].nature = e.target.value; setProperties(newProps);
                                                }}>
                                                    <option value="RECOVERED">Recovered</option>
                                                    <option value="SEIZED">Seized</option>
                                                    <option value="ABANDONED">Abandoned</option>
                                                </select>
                                            </div>

                                            <InputBox label="Quantity / Units" type="number" placeholder="1" value={prop.quantity} onChange={e => {
                                                const newProps = [...properties]; newProps[index].quantity = e.target.value; setProperties(newProps);
                                            }} />

                                            <div className="md:col-span-2">
                                                <InputBox label="Storage Location (Rack/Room/Locker ID)" placeholder="e.g. Room 4, Locker 12B" value={prop.location} onChange={e => {
                                                    const newProps = [...properties]; newProps[index].location = e.target.value; setProperties(newProps);
                                                }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className="flex flex-col gap-4 mt-8">
                                    <button 
                                        onClick={handleAddProperty} 
                                        className="text-xs font-black text-blue-600 hover:text-blue-800 tracking-widest uppercase py-4 border-2 border-dashed border-blue-100 rounded-2xl transition hover:bg-blue-50/50"
                                    >
                                        + Add Another Property Item
                                    </button>
                                    <div className="flex gap-4 pt-4">
                                        <button 
                                            onClick={() => setStep(1)} 
                                            className="flex-1 py-4 rounded-xl border border-gray-200 font-bold text-gray-500 hover:bg-gray-50 transition uppercase text-xs tracking-widest"
                                        >
                                            Back to FIR Details
                                        </button>
                                        <div className="flex-[2]">
                                            <Button label={loading ? "Registering..." : "Finalize Registration"} onPress={handleSubmit} loading={loading} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};