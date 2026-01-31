import { useNavigate, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const tabs = [
    { label: "Dashboard", path: "/dashboard", icon: "📊" },
    { label: "Register Case", path: "/create-case", icon: "📝" },
    { label: "Scan Evidence", path: "/scan", icon: "🔍" },
    { label: "Disposal List", path: "/disposal", icon: "🗑️" },
    { label: "Analytics", path: "/analytics", icon: "📈" },
    { label: "My Profile", path: "/my-info", icon: "👤" },
  ];

  return (
    <div className="flex flex-col p-4 gap-2">
      {/* Branding inside Sidebar */}
      <div className="px-3 mb-6">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
          Main Menu
        </h2>
      </div>

      {tabs.map((t) => {
        const isActive = pathname === t.path;
        return (
          <div
            key={t.path}
            onClick={() => navigate(t.path)}
            className={`flex items-center gap-3 text-sm font-medium px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
              isActive
                ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
            }`}
          >
            <span className="text-lg">{t.icon}</span>
            {t.label}
          </div>
        );
      })}

      {/* Logout or System Status */}
      <div className="mt-10 pt-6 border-t border-slate-800 px-3">
        <div 
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
          className="flex items-center gap-3 text-sm font-medium text-red-400 hover:text-red-300 cursor-pointer"
        >
          <span>🚪</span>
          Logout
        </div>
      </div>
    </div>
  );
};