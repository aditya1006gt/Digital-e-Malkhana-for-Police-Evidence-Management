import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";

export function AboutUs() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <AppBar />

        <div className="mx-auto max-w-4xl px-6 sm:px-10 pt-20 pb-32">
          <h1 className="text-4xl font-semibold tracking-tight mb-6">
            About Us
          </h1>

          <section className="leading-relaxed space-y-4 text-lg">
            <p>
              I’m <span className="font-semibold">Aditya Kumar</span>, a B.Tech student in Electronics
              and Communication Engineering at <span className="font-semibold">NIT Jamshedpur</span>,
              with a strong interest in software development and problem-solving.
            </p>

            <p>
              I’ve maintained a strong academic record with a CGPA of
              <span className="font-semibold"> 8.26</span>, along with
              <span className="font-semibold"> 92.75%</span> in
              <span className="font-semibold"> Class 12 (ISC)</span> and
              <span className="font-semibold"> 90.2%</span> in
              <span className="font-semibold"> Class 10 (ICSE)</span>. I am passionate about
              competitive programming, having solved 400+ problems on LeetCode and reached a peak
              Codeforces rating of <span className="font-semibold">1036</span>, and secured
              <span className="font-semibold"> 2nd place</span> in CodeNexus at NIT Jamshedpur.
            </p>

            <p>
              My technical skills span C, C++, Java, HTML, CSS, and JavaScript. I’ve worked on
              projects like a <span className="font-semibold">Shortest Path Visualizer</span> ,
              <span className="font-semibold"> Sudoku Solver</span>, <span className="font-semibold">Shabd-Blogging Website</span>,  <span className="font-semibold">developed a Paytm-inspired payment UI with authentication, dummy wallet APIs, simulated balance management, and mock checkout flows (no real payment gateway integration)</span>  and gained frontend experience
              maintaining the SECE website at NIT Jamshedpur.
            </p>

            <p>
              Currently, I’m focused on expanding into full-stack web development — building
              scalable, real-world applications that balance strong engineering fundamentals with
              elegant user experience.
            </p>
          </section>

          <h2 className="text-2xl font-semibold mt-12 mb-4">
            About This Platform
          </h2>

          <section className="leading-relaxed space-y-4 text-lg">
            <p>
              This platform aims to provide a distraction-free space for users to create, share and
              explore meaningful content. It emphasizes
              <span className="font-semibold"> simplicity</span>,
              <span className="font-semibold"> performance</span>, and a
              <span className="font-semibold"> smooth writing experience</span>.
            </p>

            <p>
              The backend uses <span className="font-semibold">Node.js</span>,
              <span className="font-semibold"> Express.js</span>,
              <span className="font-semibold"> PostgreSQL</span>, and
              <span className="font-semibold"> Prisma ORM</span>. The frontend is built with
              <span className="font-semibold"> React.js</span>, enhanced with
              <span className="font-semibold"> Material UI (MUI)</span> and
              <span className="font-semibold"> Flowbite layouts</span> for responsive consistency.
            </p>

            <p>
              This is an <span className="font-semibold">ongoing effort</span> — growing through
              experimentation, feedback, and real-world usage. It reflects a passion for building
              <span className="font-semibold"> practical, high-quality software</span>.
            </p>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
