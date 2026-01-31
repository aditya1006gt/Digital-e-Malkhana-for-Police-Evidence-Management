import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-200">
      {/* Top App Bar */}
      <AppBar />

      {/* Main content */}
      <main className="flex-grow flex justify-center items-start pt-24 px-6 pb-12">
        <div className="w-full max-w-5xl bg-gray-900/60 border border-gray-800 rounded-xl p-10 backdrop-blur-sm space-y-8">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>

          <p className="text-lg leading-relaxed">
            Your privacy is important to us. This Privacy Policy explains how Shabd collects, 
            uses, and protects your information when you access or use the Platform.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">1. Information Collection</h2>
          <p className="text-lg leading-relaxed">
            We collect information you provide when creating an account, publishing content, 
            or interacting with the Platform. This may include your name, email, profile information, 
            and content you post.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">2. Use of Information</h2>
          <p className="text-lg leading-relaxed">
            Your information is used to provide, maintain, and improve the Platform, communicate 
            with you, and enhance your user experience.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">3. Data Sharing</h2>
          <p className="text-lg leading-relaxed">
            We do not sell your personal data. Information may be shared with service providers 
            who help us operate the Platform, and if required by law or to protect rights.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">4. Cookies & Tracking</h2>
          <p className="text-lg leading-relaxed">
            The Platform may use cookies and similar technologies to improve functionality, 
            analyze usage, and enhance your experience.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">5. Data Security</h2>
          <p className="text-lg leading-relaxed">
            We implement reasonable security measures to protect your data. However, no method 
            is 100% secure, and we cannot guarantee absolute protection.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">6. User Rights</h2>
          <p className="text-lg leading-relaxed">
            You may access, update, or delete your account information. You can also manage 
            your privacy preferences through account settings.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">7. Changes to Privacy Policy</h2>
          <p className="text-lg leading-relaxed">
            We may update this Privacy Policy periodically. Continued use of the Platform 
            indicates acceptance of the revised policy.
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
