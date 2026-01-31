import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../config";
import { AppBar } from "../components/AppBar";
import { Sidebar } from "../components/SideBar";
import { useNavigate } from "react-router-dom";

export const Analytics = () => {
    const [stats, setStats] = useState<any>(null);
    const [categoryData, setCategoryData] = useState<any>({});
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")) {
        navigate("/");
    }}, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const headers = { Authorization: `Bearer ${token}` };

                // Fetch both User info and Category stats in parallel
                const [userRes, analyticsRes] = await Promise.all([
                    axios.get(`${URL}/api/v1/user/info`, { headers }),
                    axios.get(`${URL}/api/v1/case/analytics-stats`, { headers })
                ]);

                setStats(userRes.data.user);
                setCategoryData(analyticsRes.data.categories);
            } catch (err) {
                console.error("Error fetching analytics:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading || !stats) return (
        <div className="min-h-screen bg-white">
            <AppBar />
            <div className="flex">
                <aside className="hidden md:block w-64 border-r border-gray-100 h-[calc(100vh-64px)] sticky top-16 bg-gray-50/50">
                    <Sidebar />
                </aside>
                <main className="flex-1 flex items-center justify-center h-[calc(100vh-64px)]">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                        <div className="font-black text-xs tracking-[0.3em] text-gray-400 uppercase">
                            Generating Operational Reports...
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );

    // Calculate dynamic percentages
    // We sum all category counts to get the total properties owned by this officer
    const totalProperties = Object.values(categoryData).reduce((a: any, b: any) => a + b, 0) as number;
    
    const calculatePercent = (count: number) => {
        if (totalProperties === 0) return 0;
        return Math.round((count / totalProperties) * 100);
    };

    return (
        <div className="min-h-screen bg-white text-gray-900">
            <AppBar />
            <div className="flex">
                <aside className="hidden md:block w-64 border-r border-gray-100 h-[calc(100vh-64px)] sticky top-16 bg-gray-50/50">
                    <Sidebar />
                </aside>

                <main className="flex-1 p-6 md:p-10">
                    <div className="max-w-6xl mx-auto">
                        <header className="mb-8">
                            <h1 className="text-3xl font-black uppercase tracking-tight">Departmental Analytics</h1>
                            <p className="text-gray-500 mt-1">Data-driven overview of Station Evidence Records & Performance</p>
                        </header>

                        {/* Top Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Cases</p>
                                <p className="text-4xl font-black mt-2 text-blue-600">{stats._count?.cases || 0}</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Evidence Items</p>
                                <p className="text-xl font-black mt-2 uppercase">{totalProperties}</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Rank</p>
                                <p className="text-xl font-black mt-2 uppercase">{stats.rank || "Officer"}</p>
                            </div>
                            <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg shadow-gray-200">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">System Status</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <p className="text-lg font-black uppercase italic">Operational</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Category Distribution Card - NOW WITH LIVE DATA */}
                            <section className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="font-black text-sm uppercase tracking-widest text-gray-400">Evidence Distribution</h3>
                                    <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded">LIVE LEDGER</span>
                                </div>
                                <div className="space-y-7">
                                    <StatBar label="Narcotics" percentage={calculatePercent(categoryData.NARCOTICS || 0)} color="bg-red-500" />
                                    <StatBar label="Electronics" percentage={calculatePercent(categoryData.ELECTRONICS || 0)} color="bg-blue-500" />
                                    <StatBar label="Weapons" percentage={calculatePercent(categoryData.WEAPON || 0)} color="bg-gray-900" />
                                    <StatBar label="Currency/Cash" percentage={calculatePercent(categoryData.CASH || 0)} color="bg-emerald-500" />
                                    <StatBar label="Vehicles" percentage={calculatePercent(categoryData.VEHICLE || 0)} color="bg-orange-500" />
                                </div>
                            </section>

                            {/* Officer Profile Summary Card */}
                            <section className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col">
                                <h3 className="font-black text-sm uppercase tracking-widest text-gray-400 mb-8">Officer Credentials</h3>
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-20 h-20 bg-gray-100 rounded-2xl border-4 border-white shadow-md overflow-hidden flex items-center justify-center">
                                        {stats.profilepic ? (
                                            <img src={stats.profilepic} className="w-full h-full object-cover" alt="Profile" />
                                        ) : (
                                            <span className="text-3xl opacity-20">👤</span>
                                        )}
                                    </div>
                                    <div>
                                        <p className="font-black text-2xl uppercase tracking-tighter text-gray-900">
                                            {stats.firstname} {stats.lastname}
                                        </p>
                                        <p className="text-sm font-mono text-gray-500 mt-1">{stats.email}</p>
                                    </div>
                                </div>
                                
                                <div className="mt-auto bg-gray-50 p-5 rounded-2xl border border-gray-100">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Service Summary</p>
                                    <p className="text-sm leading-relaxed text-gray-600 font-medium">
                                        Managing <span className="text-gray-900 font-black">{stats._count?.cases} active cases</span> with <span className="text-gray-900 font-black">{totalProperties} tagged items</span>. 
                                        All movement logs are digitally signed and verified in the primary ledger.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

const StatBar = ({ label, percentage, color }: { label: string, percentage: number, color: string }) => (
    <div className="space-y-3">
        <div className="flex justify-between items-end">
            <span className="text-xs font-black uppercase text-gray-700 tracking-wide">{label}</span>
            <span className="text-xs font-black text-gray-400">{percentage}%</span>
        </div>
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
            <div 
                className={`h-full ${color} transition-all duration-1000 ease-out`} 
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    </div>
);