import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-200">
      {/* Top App Bar */}
      <AppBar />

      {/* Main content */}
      <main className="flex-grow flex justify-center items-start pt-24 px-6 pb-12">
        <div className="w-full max-w-5xl bg-gray-900/60 border border-gray-800 rounded-xl p-10 backdrop-blur-sm space-y-8">
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>

          <p className="text-lg leading-relaxed">
            These Terms of Service govern access to and use of Shabd (“the Platform”).
            By creating an account, accessing, or using the Platform, you agree to these
            terms. If you do not agree, you must discontinue use.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">1. Use of Platform</h2>
          <p className="text-lg leading-relaxed">
            Shabd enables users to write, publish, interact, and share written content.
            You are solely responsible for your activities and compliance with applicable laws.
          </p>
          <ul className="list-disc ml-6 space-y-2 text-lg leading-relaxed">
            <li>You must provide accurate account information.</li>
            <li>You may not impersonate individuals or organizations.</li>
            <li>You may not attempt to disrupt or harm platform integrity.</li>
            <li>You may not scrape, harvest, or automate access without permission.</li>
            <li>You may not publish illegal, abusive, or harmful content.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8">2. Content Ownership</h2>
          <p className="text-lg leading-relaxed">
            Users retain ownership of content posted on Shabd. By publishing, you grant
            the Platform a non-exclusive, royalty-free license to display, distribute,
            and share content within the Platform environment for as long as it remains published.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">3. Content Guidelines & Moderation</h2>
          <p className="text-lg leading-relaxed">
            To maintain a safe environment, we may remove content that violates guidelines,
            including hate speech, harassment, exploitation, plagiarism, illegal activity,
            graphic content, or spam. Moderation decisions may not always be reversible.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">4. User Interactions</h2>
          <p className="text-lg leading-relaxed">
            Public interactions such as comments, likes, bookmarks, or follows are optional
            and visible to other users. Users agree to engage respectfully and not misuse
            platform tools for harassment or manipulation.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">5. Service Availability</h2>
          <p className="text-lg leading-relaxed">
            While we aim to provide reliable service, we do not guarantee uninterrupted
            platform access, data retention, or real-time performance.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">6. Termination & Account Removal</h2>
          <p className="text-lg leading-relaxed">
            Accounts that violate terms, harm the platform, or disrupt other users may be
            suspended or removed. Users may delete their accounts voluntarily.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">7. Liability</h2>
          <p className="text-lg leading-relaxed">
            Shabd is provided “as is”. We disclaim liability for losses, damages, data
            corruption, or inability to use the platform. This includes indirect or
            consequential damages.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">8. Third-Party Services</h2>
          <p className="text-lg leading-relaxed">
            Some features may integrate third-party services. We do not control external
            providers and are not responsible for their behavior, practices, or policies.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">9. Changes to Terms</h2>
          <p className="text-lg leading-relaxed">
            We may update terms periodically to reflect platform evolution.
            Continued use of Shabd indicates acceptance of the revised terms.
          </p>

          <p className="text-sm text-gray-500 pt-10">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
