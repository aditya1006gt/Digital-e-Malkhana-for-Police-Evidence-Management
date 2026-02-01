import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { Sidebar } from "../components/SideBar";
import Loader from "../components/Loader";
import ImageUpload from "../components/ImageUpload";
import { URL } from "../config";

interface UserInfo {
  firstname: string;
  lastname: string;
  email: string;
  profilepic: string;
  rank: string;
  stationId: string;
  about: string;
  _count?: {
    cases: number;
    properties: number;
  };
}

function StatItem({ label, value, onClick }: { label: string; value: number; onClick: () => void }) {
  return (
    <div
      className="cursor-pointer flex flex-col items-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200 shadow-sm"
      onClick={onClick}
    >
      <span className="text-3xl font-black text-gray-900">{value}</span>
      <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest mt-2 text-center">{label}</span>
    </div>
  );
}

export function UserProfile() {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [isPicModalOpen, setIsPicModalOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
      if (!localStorage.getItem("token")) {
      navigate("/");
  }}, []);

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
      <div className="min-h-screen bg-white">
        <AppBar />
        <div className="flex">
          <aside className="hidden md:block w-64 border-r border-gray-100 h-[calc(100vh-64px)] sticky top-16 bg-gray-50/50">
            <Sidebar />
          </aside>
          <main className="flex-1 flex items-center justify-center">
            <Loader variant="profile" />
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <AppBar />
      
      <div className="flex">
        <aside className="hidden md:block w-64 border-r border-gray-100 h-[calc(100vh-64px)] sticky top-16 bg-gray-50/50">
          <Sidebar />
        </aside>

        <main className="flex-1 max-w-5xl mx-auto p-6 md:p-10">
          
          {/* Modal Overlay */}
          {isPicModalOpen && (
            <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
              <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-200 w-full max-w-sm">
                <h2 className="text-xl font-black mb-6 text-center text-gray-900 uppercase tracking-tight">Update ID Photo</h2>
                <ImageUpload onImageUploaded={handleUpload} currentImage={user.profilepic} />
                <button
                  className="mt-6 w-full px-4 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition"
                  onClick={() => setIsPicModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <header className="mb-8">
            <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Officer Profile</h1>
            <p className="text-gray-500 mt-1">Official Identification and Performance Records</p>
          </header>

          <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-sm">
            
            {/* Header / Identity Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-12">
              <div className="relative">
                <div className="w-40 h-40 rounded-3xl overflow-hidden border-4 border-white shadow-lg bg-white">
                  <img
                    src={user.profilepic || "https://via.placeholder.com/150"}
                    className="w-full h-full object-cover"
                    alt="Officer"
                  />
                </div>
                <button
                  className="absolute -bottom-2 -right-2 p-3 rounded-2xl bg-blue-600 hover:bg-blue-700 shadow-xl transition-all active:scale-90"
                  onClick={() => setIsPicModalOpen(true)}
                >
                  <EditIcon />
                </button>
              </div>

              <div className="text-center md:text-left flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                  <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">
                    {user.firstname} {user.lastname}
                  </h2>
                  <span className="w-fit mx-auto md:mx-0 px-3 py-1 rounded-lg bg-blue-100 text-blue-700 text-[10px] font-black border border-blue-200 uppercase tracking-widest">
                    {user.rank || "Officer"}
                  </span>
                </div>
                <p className="text-gray-500 font-mono text-sm tracking-tight mb-4">{user.email}</p>
                
                <div className="flex items-center justify-center md:justify-start gap-2 bg-white w-fit px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Station Assignment:</span>
                    <span className="font-bold text-gray-800">{user.stationId || "N/A"}</span>
                </div>
              </div>
            </div>

            {/* Departmental Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <StatItem label="Cases Registered" value={user._count?.cases || 0} onClick={() => navigate('/dashboard')} />
              <StatItem label="Evidence Items" value={user._count?.properties || 0} onClick={() => navigate('/dashboard')} />
              <StatItem label="Pending Disposal" value={0} onClick={() => navigate('/disposal')} />
              <StatItem label="System Access" value={100} onClick={() => {}} />
            </div>

            {/* Official Bio / Remarks */}
            <div className="bg-white border border-gray-100 p-8 rounded-2xl mb-10 shadow-sm">
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Official Bio / Ledger Remarks</h3>
              <p className="text-gray-700 leading-relaxed font-medium italic opacity-80">
                "{user.about || "No official remarks or bio provided for this officer profile."}"
              </p>
            </div>

            {/* Footer Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
              <button
                className="flex-1 min-w-[200px] px-6 py-4 rounded-xl bg-gray-900 text-white font-black hover:bg-black transition active:scale-95 text-xs uppercase tracking-widest shadow-md"
                onClick={() => navigate('/update-profile')}
              >
                Modify Official Records
              </button>
              <button
                className="px-8 py-4 rounded-xl bg-white border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition text-xs uppercase tracking-widest"
                onClick={() => navigate('/analytics')}
              >
                Analytics
              </button>
              <button
                className="px-8 py-4 rounded-xl text-red-500 font-black hover:bg-red-50 transition text-xs uppercase tracking-widest border border-transparent hover:border-red-100"
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
    </div>
  );
}

function EditIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  );
}