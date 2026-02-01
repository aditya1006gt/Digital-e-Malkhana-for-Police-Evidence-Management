import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();
  
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-4 px-6 mt-auto">
      <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Branding & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
            © {new Date().getFullYear()} e-MALKHANA // SECURE INTERNAL INTERFACE
          </p>
        </div>

        {/* System Links */}
        <div className="flex items-center gap-6">
          <button 
            className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors cursor-pointer" 
            onClick={() => navigate("/privacy")}
          >
            Privacy Protocol
          </button>
          
          <button 
            className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors cursor-pointer" 
            onClick={() => navigate("/terms")}
          >
            Usage Terms
          </button>

          <div className="h-3 w-[1px] bg-gray-200 hidden md:block"></div>

          <a
            href="mailto:shabd.thepowerofwords@gmail.com"
            className="text-[10px] font-black uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-colors"
          >
            Technical Support
          </a>
        </div>
      </div>
    </footer>
  );
}