import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import Loader from "../components/Loader";
import ImageUpload from "../components/ImageUpload";
import { URL } from "../config";

interface UserInfo {
  firstname: string;
  lastname: string;
  email: string;
  profilepic: string;
  rank: string;      // Added for Police System
  stationId: string; // Added for Police System
  about: string;
  _count?: {
    cases: number;    // Changed from blogs
    properties: number; // Changed from likes
  };
}

// Sub-component for Official Stats
function StatItem({ label, value, onClick }: { label: string; value: number; onClick: () => void }) {
  return (
    <div
      className="cursor-pointer flex flex-col items-center p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all duration-200"
      onClick={onClick}
    >
      <span className="text-3xl font-black text-white">{value}</span>
      <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-2 text-center">{label}</span>
    </div>
  );
}

export function UserProfile() {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [isPicModalOpen, setIsPicModalOpen] = useState(false);
  const navigate = useNavigate();

  async function refreshUser() {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${URL}/api/v1/user/info`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data.user);
    } catch (err) {
      console.error("Failed to fetch officer info", err);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }
    refreshUser();
  }, [navigate]);

  async function handleUpload(url: string) {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${URL}/api/v1/user/update`,
        { profilepic: url },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      await refreshUser();
      setIsPicModalOpen(false);
    } catch (err) {
      console.error("Failed to update profile pic:", err);
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950">
        <AppBar />
        <div className="flex items-center justify-center h-[calc(100vh-64px)]">
          <Loader variant="profile" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <AppBar />

      {/* Profile Picture Modal */}
      {isPicModalOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex justify-center items-center z-50 p-4">
          <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-700 w-full max-w-sm">
            <h2 className="text-xl font-bold mb-6 text-center">Update Identification Photo</h2>
            <ImageUpload onImageUploaded={handleUpload} currentImage={user.profilepic} />
            <button
              className="mt-6 w-full px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 font-medium transition"
              onClick={() => setIsPicModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <main className="max-w-5xl mx-auto pt-16 px-6 pb-20">
        <div className="bg-slate-900/40 border border-slate-800 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-12">
            <div className="relative group">
              <div className="w-44 h-44 rounded-3xl overflow-hidden border-4 border-slate-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={user.profilepic || "https://via.placeholder.com/150"}
                  className="w-full h-full object-cover"
                  alt="Officer"
                />
              </div>
              <button
                className="absolute -bottom-3 -right-3 p-3 rounded-2xl bg-blue-600 hover:bg-blue-500 shadow-xl transition transform hover:scale-110"
                onClick={() => setIsPicModalOpen(true)}
              >
                <EditIcon />
              </button>
            </div>

            <div className="text-center md:text-left flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                <h1 className="text-4xl font-black text-white uppercase tracking-tight">
                  {user.firstname} {user.lastname}
                </h1>
                <span className="w-fit mx-auto md:mx-0 px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-[10px] font-black border border-blue-500/20 uppercase">
                   {user.rank || "Officer"}
                </span>
              </div>
              <p className="text-slate-400 font-mono text-sm">{user.email}</p>
              
              <div className="mt-6 flex flex-col gap-2">
                <div className="flex items-center justify-center md:justify-start gap-2 text-slate-300">
                    <span className="text-slate-500">Station ID:</span>
                    <span className="font-bold">{user.stationId || "N/A"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Departmental Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <StatItem label="Cases Registered" value={user._count?.cases || 0} onClick={() => navigate('/dashboard')} />
            <StatItem label="Total Properties" value={user._count?.properties || 0} onClick={() => navigate('/dashboard')} />
            <StatItem label="Pending Disposal" value={0} onClick={() => navigate('/disposal')} />
            <StatItem label="System Access" value={100} onClick={() => {}} />
          </div>

          {/* Official Bio */}
          <div className="border-t border-slate-800 pt-8 mb-10">
            <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Official Remarks / Bio</h3>
            <p className="text-slate-300 leading-relaxed text-lg font-medium opacity-90">
              {user.about || "No official remarks or bio provided for this officer profile."}
            </p>
          </div>

          {/* Action Bar */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              className="flex-1 min-w-[150px] px-6 py-4 rounded-2xl bg-white text-black font-black hover:bg-slate-200 transition active:scale-95 text-sm uppercase"
              onClick={() => navigate('/update')}
            >
              Edit Official Details
            </button>
            <button
              className="px-6 py-4 rounded-2xl bg-slate-800 border border-slate-700 hover:bg-slate-700 transition font-bold text-sm uppercase"
              onClick={() => navigate('/analytics')}
            >
              View Performance
            </button>
            <button
              className="px-6 py-4 rounded-2xl border border-red-900/30 text-red-500 hover:bg-red-950/20 transition font-bold text-sm uppercase"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/");
              }}
            >
              Terminate Session
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

function EditIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  );
}