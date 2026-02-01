import { useEffect } from "react";
import { AppBar } from "../components/AppBar";
import { Sidebar } from "../components/SideBar"; // Added Sidebar for layout consistency
import { useNavigate } from "react-router-dom";

export default function Privacy() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white flex flex-col h-screen overflow-hidden text-gray-900">
      <AppBar />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar consistent with Messages UI */}
        <aside className="hidden md:block w-64 border-r border-gray-100 bg-gray-50/50">
          <Sidebar />
        </aside>

        <main className="flex-1 overflow-y-auto bg-gray-50/30 p-8 md:p-12 custom-scrollbar">
          <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-sm rounded-2xl overflow-hidden">
            {/* Header Section */}
            <div className="bg-gray-900 p-8 text-white">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-60">
                  Security Protocol
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] uppercase bg-blue-600 px-3 py-1 rounded">
                  Confidential
                </span>
              </div>
              <h1 className="text-3xl font-black uppercase tracking-tighter">
                Data Privacy & Encryption Policy
              </h1>
            </div>

            <div className="p-8 md:p-12 space-y-10">
              <section>
                <p className="text-sm font-bold leading-relaxed text-gray-600 uppercase tracking-tight italic border-l-4 border-blue-600 pl-4">
                  This document outlines the handling of sensitive intelligence and 
                  internal communications within the Secure Line platform. All transmissions 
                  are subject to internal auditing protocols.
                </p>
              </section>

              {/* Policy Sections */}
              <div className="grid gap-10">
                <section>
                  <h2 className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] mb-3">
                    01. Secure Transmission & Encryption
                  </h2>
                  <p className="text-sm font-medium leading-relaxed text-gray-700">
                    All internal communications are protected via end-to-end encryption. 
                    Keys are stored locally on officer terminals; the platform server acts 
                    solely as a relay and does not store plaintext message content.
                  </p>
                </section>

                <section>
                  <h2 className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] mb-3">
                    02. Identity Verification
                  </h2>
                  <p className="text-sm font-medium leading-relaxed text-gray-700">
                    We collect officer credentials including Name, Badge ID/Username, and 
                    Departmental Profile Images. This data is used strictly for internal 
                    directory identification and secure line routing.
                  </p>
                </section>

                <section>
                  <h2 className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] mb-3">
                    03. Audit Logs & Metadata
                  </h2>
                  <p className="text-sm font-medium leading-relaxed text-gray-700">
                    To maintain operational integrity, the system logs transmission timestamps 
                    and sender/receiver IDs. The content of the transmission remains 
                    encrypted and inaccessible to system administrators.
                  </p>
                </section>

                <section>
                  <h2 className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] mb-3">
                    04. Data Retention
                  </h2>
                  <p className="text-sm font-medium leading-relaxed text-gray-700">
                    Communications are retained as long as the account remains active. Officers 
                    may purge local chat histories, which will remove message visibility from 
                    their specific terminal instance.
                  </p>
                </section>

                <section>
                  <h2 className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] mb-3">
                    05. Security Measures
                  </h2>
                  <p className="text-sm font-medium leading-relaxed text-gray-700">
                    Access to this platform requires a valid authorization token. Unauthorized 
                    attempts to intercept socket transmissions are logged and reported to the 
                    Cyber Security Division.
                  </p>
                </section>
              </div>

              {/* Policy Footer */}
              <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                  Document ID: SEC-PRIV-2026-B
                </div>
                <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                  Last Updated: {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}