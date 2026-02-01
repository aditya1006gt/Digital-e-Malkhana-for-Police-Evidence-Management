import { useEffect } from "react";
import { AppBar } from "../components/AppBar";
import { Sidebar } from "../components/SideBar";
import { useNavigate } from "react-router-dom";

export default function Terms() {
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
        {/* Consistent Dashboard Sidebar */}
        <aside className="hidden md:block w-64 border-r border-gray-100 bg-gray-50/50">
          <Sidebar />
        </aside>

        <main className="flex-1 overflow-y-auto bg-gray-50/30 p-8 md:p-12 custom-scrollbar">
          <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-sm rounded-2xl overflow-hidden">
            
            {/* Document Header */}
            <div className="bg-gray-900 p-8 text-white">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-60">
                  Operational Manual
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] uppercase bg-blue-600 px-3 py-1 rounded">
                  v2.0 Standard
                </span>
              </div>
              <h1 className="text-3xl font-black uppercase tracking-tighter">
                Terms of Service & Usage
              </h1>
            </div>

            <div className="p-8 md:p-12 space-y-10">
              <section>
                <p className="text-sm font-bold leading-relaxed text-gray-600 uppercase tracking-tight italic border-l-4 border-blue-600 pl-4">
                  These terms govern the professional conduct and technical utilization of 
                  the Secure Line communications interface. Access is granted only to 
                  authorized personnel who agree to abide by the following directives.
                </p>
              </section>

              <div className="grid gap-10">
                {/* 01. Usage Directive */}
                <section>
                  <h2 className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] mb-3">
                    01. Professional Use Directive
                  </h2>
                  <p className="text-sm font-medium leading-relaxed text-gray-700 mb-4">
                    The platform is designed for professional internal intelligence sharing. 
                    Personnel are strictly prohibited from:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Falsifying officer credentials or impersonating superiors.",
                      "Attempting to bypass socket encryption protocols.",
                      "Automated scraping or extraction of departmental directories.",
                      "Transmitting unauthorized personal data outside of protocol.",
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-sm text-gray-600 font-bold uppercase text-[10px]">
                        <span className="text-blue-600">[{idx + 1}]</span> {item}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* 02. Data Ownership */}
                <section>
                  <h2 className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] mb-3">
                    02. Intellectual Property & Evidence
                  </h2>
                  <p className="text-sm font-medium leading-relaxed text-gray-700">
                    While officers retain ownership of their reports, the department holds 
                    a non-exclusive license to archive and audit transmissions for 
                    operational purposes. Data published on shared channels becomes part 
                    of the departmental record.
                  </p>
                </section>

                {/* 03. Service Integrity */}
                <section>
                  <h2 className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] mb-3">
                    03. Operational Availability
                  </h2>
                  <p className="text-sm font-medium leading-relaxed text-gray-700">
                    Service availability is managed by the technical division. No guarantee 
                    is provided for 100% uptime during maintenance cycles. Transmission 
                    delays during high-latency periods are to be expected.
                  </p>
                </section>

                {/* 04. Account Revocation */}
                <section>
                  <h2 className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] mb-3">
                    04. Terminal Access Revocation
                  </h2>
                  <p className="text-sm font-medium leading-relaxed text-gray-700">
                    Access tokens may be revoked immediately for breaches of security, 
                    unauthorized account sharing, or conduct detrimental to departmental 
                    integrity.
                  </p>
                </section>

                {/* 05. Liability Disclaimer */}
                <section>
                  <h2 className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] mb-3">
                    05. System Liability
                  </h2>
                  <p className="text-[11px] font-bold text-gray-500 uppercase leading-tight bg-gray-50 p-4 border border-gray-100">
                    THE SYSTEM IS PROVIDED ON AN "AS IS" BASIS. THE TECHNICAL DIVISION 
                    DISCLAIMS ALL LIABILITY FOR DATA CORRUPTION, TRANSMISSION INTERRUPTIONS, 
                    OR UNAUTHORIZED TERMINAL ACCESS RESULTING FROM USER NEGLIGENCE.
                  </p>
                </section>
              </div>

              {/* Document Footer */}
              <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                  REF: TERMS-OP-CODE-X
                </div>
                <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                  REVISED: {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}