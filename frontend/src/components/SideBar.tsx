import { useNavigate, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileEdit, 
  FolderOpen, 
  MessageSquare, 
  Search, 
  Trash2, 
  BarChart3, 
  UserCircle, 
  LogOut,
  ShieldCheck
} from "lucide-react";

export const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const tabs = [
    { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { label: "Register Case", path: "/create-case", icon: FileEdit },
    { label: "Manage Entries", path: "/manageentries", icon: FolderOpen },
    { label: "Internal Comms", path: "/messages", icon: MessageSquare },
    { label: "Scan Evidence", path: "/scan", icon: Search },
    { label: "Disposal List", path: "/disposal", icon: Trash2 },
    { label: "Analytics", path: "/analytics", icon: BarChart3 },
    { label: "My Profile", path: "/my-info", icon: UserCircle },
  ];

  return (
    <div className="flex flex-col h-full p-4 bg-white border-r border-gray-100 shadow-sm">
      {/* Branding Section */}
      <div className="px-3 mb-8 mt-2">
        <div className="flex items-center gap-3 mb-1">
          <ShieldCheck className="w-7 h-7 text-blue-600" />
          <h1 className="text-sm font-black uppercase tracking-tighter text-gray-900">
            Malkhana System
          </h1>
        </div>
        <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
          Command Center
        </h2>
      </div>

      {/* Navigation Tabs */}
      <nav className="flex flex-col gap-2 flex-1">
        {tabs.map((t) => {
          const isActive = pathname === t.path;
          const Icon = t.icon;
          return (
            <div
              key={t.path}
              onClick={() => navigate(t.path)}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-100"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {/* Increased Icon size to w-6 h-6 */}
              <Icon className={`w-6 h-6 transition-colors ${
                isActive ? "text-white" : "text-gray-400 group-hover:text-blue-600"
              }`} />
              <span className="text-sm font-medium">
                {t.label}
              </span>
            </div>
          );
        })}
      </nav>

      {/* Footer / System Status */}
      <div className="mt-auto pt-6 border-t border-gray-100 px-2">
        <div 
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
          className="flex items-center gap-4 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 rounded-xl cursor-pointer transition-colors"
        >
          <LogOut className="w-6 h-6" />
          Logout
        </div>
        
        {/* Connection Status Badge */}
        <div className="mt-4 px-4 flex items-center gap-2">
           <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
           <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">System Online</span>
        </div>
      </div>
    </div>
  );
};