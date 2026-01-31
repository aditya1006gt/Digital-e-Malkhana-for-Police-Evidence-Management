import { useEffect } from "react";
import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";

export function AboutUs() {
  const navigate = useNavigate();
  
  useEffect(() => {
      if (!localStorage.getItem("token")) {
      navigate("/");
  }}, []);

  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        <AppBar />

        <div className="mx-auto max-w-4xl px-6 sm:px-10 pt-20 pb-32">
          {/* Section 1: The Developer */}
          <h1 className="text-4xl font-black tracking-tight mb-8 uppercase text-gray-900 border-b-4 border-blue-600 w-fit">
            The Developer
          </h1>

          <section className="leading-relaxed space-y-6 text-lg text-gray-600">
            <p>
              I’m <span className="font-bold text-gray-900">Aditya Kumar</span>, an Electronics
              and Communication Engineering student at <span className="font-bold text-gray-900 text-blue-600">NIT Jamshedpur</span>. 
              My work focuses on bridging the gap between complex engineering and practical, real-world utility.
            </p>

            <p>
              With a strong foundation in competitive programming (400+ LeetCode problems, Codeforces 1036 peak), I approach software development with a "security-first" and "efficiency-first" mindset. My academic background (8.26 CGPA) and previous projects—ranging from Pathfinding Visualizers to Payment UIs—have culminated in the creation of this specialized administrative tool.
            </p>
          </section>

          {/* Section 2: The Project */}
          <h2 className="text-3xl font-black mt-20 mb-8 uppercase text-gray-900 border-b-4 border-red-600 w-fit">
            Digital Malkhana Initiative
          </h2>

          <section className="leading-relaxed space-y-6 text-lg text-gray-600">
            <p>
              The <span className="font-bold text-gray-900 italic">"Digital-e-Malkhana"</span> is a full-stack evidence management solution designed to modernize the way police departments handle the <strong>Chain of Custody</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="font-black text-xs uppercase tracking-widest text-blue-600 mb-2">The Mission</h3>
                    <p className="text-sm">To replace paper-based ledgers with an immutable digital trail, ensuring that every piece of evidence—from seizure to disposal—is accounted for with 100% transparency.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="font-black text-xs uppercase tracking-widest text-red-600 mb-2">Key Features</h3>
                    <ul className="text-sm list-disc ml-4 space-y-1">
                        <li>Automated QR Code Generation for physical tagging.</li>
                        <li>Digital Chain of Custody (Movement Tracking).</li>
                        <li>Legal Disposal Logging with Court Order references.</li>
                        <li>Real-time Officer Dashboards & Analytics.</li>
                    </ul>
                </div>
            </div>

            <p>
              The system is powered by a high-performance tech stack: 
              <span className="font-bold text-gray-900"> Node.js & Express</span> for the logic engine, 
              <span className="font-bold text-gray-900"> PostgreSQL</span> for relational data integrity, and 
              <span className="font-bold text-gray-900"> Prisma ORM</span> for type-safe database transactions. The interface is built with 
              <span className="font-bold text-gray-900"> React.js</span> and styled using <strong>Tailwind CSS</strong> for a brutalist, clean, and high-contrast administrative experience.
            </p>

            <p className="border-l-4 border-gray-200 pl-6 italic text-gray-500">
              "This project is more than just a CRUD application; it is an exploration of how technology can bring accountability to the most critical touchpoints of our legal system."
            </p>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}