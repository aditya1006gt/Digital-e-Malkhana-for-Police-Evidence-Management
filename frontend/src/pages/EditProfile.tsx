import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { AppBar } from "../components/AppBar";
import { Sidebar } from "../components/SideBar";
import { URL } from "../config";
import { Save, ArrowLeft } from "lucide-react";

export function EditProfile() {
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [aboutUs, setAboutUs] = useState<string>("");
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(`${URL}/api/v1/user/info`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const user = response.data.user;
        setFirstName(user.firstname ?? "");
        setLastName(user.lastname ?? "");
        setAge(user.age != null ? String(user.age) : "");
        setAboutUs(user.about ?? "");
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    }
    fetchUser();
  }, []);

  async function updateProfile() {
    try {
      await axios.put(
        `${URL}/api/v1/user/update`,
        { firstname, lastname, age: Number(age), about: aboutUs },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setShowAlert(true);
      setTimeout(() => navigate("/my-info"), 1000);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col h-screen overflow-hidden text-gray-900">
      {showAlert && (
        <Alert
          className="fixed top-20 left-1/2 -translate-x-1/2 w-max z-[100] font-black uppercase text-[10px] tracking-widest shadow-2xl border border-emerald-200"
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
          variant="filled"
        >
          Records Updated Successfully
        </Alert>
      )}

      <AppBar />

      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden md:block w-64 border-r border-gray-100 bg-gray-50/50">
          <Sidebar />
        </aside>

        <main className="flex-1 overflow-y-auto bg-gray-50/30 p-6 md:p-12 custom-scrollbar">
          <div className="max-w-3xl mx-auto">
            
            {/* Navigation Header */}
            <button 
              onClick={() => navigate("/my-info")}
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-blue-600 transition-colors mb-6"
            >
              <ArrowLeft className="w-3 h-3" /> Back to Profile
            </button>

            <div className="bg-white border border-gray-200 shadow-sm rounded-[2rem] overflow-hidden">
              <div className="bg-gray-900 p-8 text-white">
                <h1 className="text-2xl font-black uppercase tracking-tighter">
                  Modify Officer Records
                </h1>
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mt-1">
                  System Authorization Required
                </p>
              </div>

              <div className="p-8 md:p-10 space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Legal First Name</label>
                    <input 
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl text-sm font-bold focus:ring-2 ring-blue-600 outline-none transition-all"
                      placeholder="ADITYA"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Legal Last Name</label>
                    <input 
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl text-sm font-bold focus:ring-2 ring-blue-600 outline-none transition-all"
                      placeholder="KUMAR"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Officer Age</label>
                  <input 
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl text-sm font-bold focus:ring-2 ring-blue-600 outline-none transition-all"
                    placeholder="21"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Official Bio / Ledger Remarks</label>
                  <textarea 
                    rows={4}
                    value={aboutUs}
                    onChange={(e) => setAboutUs(e.target.value)}
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl text-sm font-bold focus:ring-2 ring-blue-600 outline-none transition-all resize-none"
                    placeholder="ENTER OFFICER BIOGRAPHY..."
                  />
                </div>

                <div className="pt-6 border-t border-gray-100 flex justify-end">
                  <button
                    onClick={updateProfile}
                    className="flex items-center gap-3 px-10 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase text-[12px] tracking-widest hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
                  >
                    <Save className="w-5 h-5" />
                    Commit Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}