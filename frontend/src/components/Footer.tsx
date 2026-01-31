import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigate=useNavigate();
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-800 text-gray-400 py-6 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-sm">
          © {new Date().getFullYear()} Shabd — Write, Share, Inspire.
        </p>

        <div className="flex gap-5 text-sm">
          <button className="hover:text-white transition cursor-pointer" onClick={() => navigate("/privacy")} >Privacy</button>
          <button className="hover:text-white transition cursor-pointer" onClick={() => navigate("/terms")} >Terms</button>
          <a
            href="mailto:shabd.thepowerofwords@gmail.com"
            className="font-medium hover:text-white transition inline-block"
          >
            Contact Support
          </a>

        </div>
      </div>
    </footer>
  );
}
