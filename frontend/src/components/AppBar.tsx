import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../config";
import SelectDropdown from "./SelectDropdown";

export function AppBar() {
  const [initials, setInitials] = useState("");
  const [station, setStation] = useState("");
  const navigate = useNavigate();

  // Updated menu items for Departmental use
  const menuItems = [
    { label: "Officer Profile", path: "/my-info" },
    { label: "Update Details", path: "/update-profile" },
    { label: "Terms of Service", path: "/terms" },
    { label: "Privacy Policy", path: "/privacy" },
    {
      label: "Logout System",
      action: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        navigate("/");
      },
    },
  ];

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(
          `${URL}/api/v1/user/info`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const user = response.data.user;
        setInitials((user.firstname[0] + user.lastname[0]).toUpperCase());
        setStation(user.stationId);
      } catch (err) {
        console.error("Failed to fetch user data for AppBar");
      }
    }
    fetchUserData();
  }, []);

  return (
    <header className="w-full bg-slate-900 border-b border-slate-800 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-full mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo & Department Brand */}
        <button onClick={() => navigate("/dashboard")} className="flex items-center gap-3 cursor-pointer">
          <div className="bg-white p-1.5 rounded-lg">
             <div className="text-xl">⚖️</div>
          </div>
          <div className="text-left">
            <h1 className="font-black text-white tracking-tighter text-lg leading-none">
              e-MALKHANA
            </h1>
            <p className="text-[10px] text-slate-400 font-bold tracking-widest mt-0.5">
              {station || "DIGITAL SECURE PORTAL"}
            </p>
          </div>
        </button>

        {/* Action Shortcuts */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/scan")}
            className="hidden md:flex items-center gap-2 text-white text-xs font-bold px-4 py-2 rounded-lg border border-slate-700 hover:bg-slate-800 transition cursor-pointer"
          >
            <span>🔍</span> QUICK SCAN
          </button>

          <button
            onClick={() => navigate("/create-case")}
            className="text-white text-xs font-bold px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition shadow-lg shadow-blue-900/20 cursor-pointer"
          >
            + NEW CASE
          </button>

          {/* Officer Avatar Dropdown */}
          <div className="h-8 w-[1px] bg-slate-800 mx-1 hidden md:block"></div>
          
          <div className="flex items-center gap-3 pl-2">
            <div className="relative">
              <SelectDropdown 
                label={
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 hover:border-slate-500 transition flex justify-center items-center overflow-hidden font-bold text-white">
                    {initials}
                  </div>
                } 
                menuItems={menuItems} 
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}