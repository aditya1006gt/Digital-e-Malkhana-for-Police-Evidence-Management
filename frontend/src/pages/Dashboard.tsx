import { useNavigate } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { CaseTable } from "../components/CaseTable";
import { Footer } from "../components/Footer";
import { useCases } from "../hooks/useCases";
import Loader from "../components/Loader";
import { Sidebar } from "../components/SideBar";
import { StatsCard } from "../components/StatsCards";
import { useEffect, useState } from "react";

export function Dashboard() {
  const navigate = useNavigate();
  const { cases, loading, stats } = useCases();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
  }}, []);
  

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <AppBar />
      <div className="flex">
        {/* Sidebar - Updated to match light theme */}
        <aside className="hidden md:block w-64 border-r border-gray-100 h-[calc(100vh-64px)] sticky top-16 bg-gray-50/50">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto">
          <header className="mb-8 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Officer Dashboard</h1>
              <p className="text-gray-500 mt-1">
                Evidence Management System • Station {stats?.stationId || "Loading..."}
              </p>
            </div>
            <button 
              onClick={() => navigate("/create-case")}
              className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium transition shadow-sm"
            >
              + Register New FIR
            </button>
          </header>

          {/* Stats Overview - Using the gray-50 card style from CreateCase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <StatsCard title="Total Cases" value={stats?.totalCases || 0} icon="📁" color="blue" />
            <StatsCard title="Items in Custody" value={stats?.totalItems || 0} icon="🏷️" color="emerald" />
            <StatsCard title="Pending Disposal" value={stats?.pendingDisposal || 0} icon="⏳" color="amber" />
          </div>

          {/* Evidence Management Section */}
          <section className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h2 className="text-lg font-bold text-gray-800">Recent Case Records</h2>
              <div className="flex gap-2">
                 <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">ACTIVE SESSION</span>
              </div>
            </div>

            <div className="p-0"> {/* Table usually looks better with zero padding if it has borders */}
              {loading ? (
                <div className="p-6 space-y-4">
                  {[1, 2, 3].map((i) => <Loader key={i} variant="table-row" />)}
                </div>
              ) : (
                <CaseTable cases={cases} />
              )}
            </div>
          </section>
          
          {/* Mobile Action Button */}
          <div className="md:hidden mt-6">
            <button 
                onClick={() => navigate("/create-case")}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold"
            >
                + NEW CASE REGISTRATION
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}