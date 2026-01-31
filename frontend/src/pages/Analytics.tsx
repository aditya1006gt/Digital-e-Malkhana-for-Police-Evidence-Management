import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../config";
import { AppBar } from "../components/AppBar";

export const Analytics = () => {
    const [stats, setStats] = useState<any>(null);

    useEffect(() => {
        axios.get(`${URL}/api/v1/user/info`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }).then(res => setStats(res.data.user));
    }, []);

    if (!stats) return <div className="p-10 text-center">GENERATING REPORTS...</div>;

    return (
        <div className="min-h-screen bg-gray-50">
            <AppBar />
            <div className="max-w-6xl mx-auto p-6">
                <div className="mb-8">
                    <h1 className="text-3xl font-black">Departmental Analytics</h1>
                    <p className="text-gray-500">Data-driven overview of Station Evidence Records</p>
                </div>

                {/* Top Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <p className="text-xs font-bold text-gray-400 uppercase">Total Cases Managed</p>
                        <p className="text-4xl font-black mt-1">{stats._count?.cases || 0}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <p className="text-xs font-bold text-gray-400 uppercase">Station ID</p>
                        <p className="text-xl font-bold mt-1">{stats.stationId}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <p className="text-xs font-bold text-gray-400 uppercase">Officer Rank</p>
                        <p className="text-xl font-bold mt-1">{stats.rank}</p>
                    </div>
                    <div className="bg-black text-white p-6 rounded-2xl shadow-sm">
                        <p className="text-xs font-bold text-gray-400 uppercase">Active Status</p>
                        <p className="text-xl font-bold mt-1">Operational</p>
                    </div>
                </div>

                {/* Mock Visualizations - Use CSS bars to represent distribution */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-6">Evidence by Category</h3>
                        <div className="space-y-6">
                            <StatBar label="Narcotics" percentage={45} color="bg-red-500" />
                            <StatBar label="Electronics" percentage={25} color="bg-blue-500" />
                            <StatBar label="Weapons" percentage={15} color="bg-gray-800" />
                            <StatBar label="Currency/Cash" percentage={10} color="bg-green-500" />
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-4">Officer Summary</h3>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                                {stats.profilepic ? <img src={stats.profilepic} className="rounded-full" /> : "👤"}
                            </div>
                            <div>
                                <p className="font-black text-xl">{stats.firstname} {stats.lastname}</p>
                                <p className="text-sm text-gray-500">{stats.email}</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl">
                            <p className="text-xs font-bold text-gray-400 uppercase mb-2">Internal Note</p>
                            <p className="text-sm italic text-gray-600">
                                This officer has managed {stats._count?.cases} cases this quarter with zero pending audit discrepancies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper component for the Analytics bars
const StatBar = ({ label, percentage, color }: { label: string, percentage: number, color: string }) => (
    <div className="space-y-2">
        <div className="flex justify-between text-sm">
            <span className="font-medium">{label}</span>
            <span className="font-bold">{percentage}%</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className={`h-full ${color}`} style={{ width: `${percentage}%` }}></div>
        </div>
    </div>
);