import { useNavigate } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { CaseTable } from "../components/CaseTable"; // New Component
import { Footer } from "../components/Footer";
import { useCases } from "../hooks/useCases"; // Updated Hook
import Loader from "../components/Loader";
import { StatsCard } from "../components/StatsCards";
import { Sidebar } from "../components/SideBar";


export function Dashboard() {
  const navigate = useNavigate();
  const { cases, loading, stats } = useCases(); // Fetches /my-cases and counts

  if (!localStorage.getItem("token")) navigate("/signin");

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <AppBar />
      <div className="flex">
        {/* Sidebar - Fixed width for consistency */}
        <aside className="hidden md:block w-64 border-r border-slate-800 h-screen sticky top-0 bg-slate-900/50">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 space-y-8">
          <header>
            <h1 className="text-3xl font-bold">Officer Dashboard</h1>
            <p className="text-slate-400">Welcome back. Monitoring evidence for Station {stats?.stationId}</p>
          </header>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard title="Total Cases" value={stats?.totalCases || 0} icon="📁" color="blue" />
            <StatsCard title="Items in Custody" value={stats?.totalItems || 0} icon="🛡️" color="emerald" />
            <StatsCard title="Pending Disposal" value={stats?.pendingDisposal || 0} icon="⏳" color="amber" />
          </div>

          {/* Evidence Management Section */}
          <section className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Recent Case Records</h2>
              <button 
                onClick={() => navigate("/create-case")}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
              >
                + Register New FIR/Case
              </button>
            </div>

            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => <Loader key={i} variant="table-row" />)}
              </div>
            ) : (
              <CaseTable cases={cases} />
            )}
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}