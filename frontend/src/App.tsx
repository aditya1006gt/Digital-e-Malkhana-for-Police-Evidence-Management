import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Dashboard } from './pages/Dashboard'
import { CreateCase } from './components/CreateCase'     // New: Multi-step evidence form
import { CaseDetails } from './pages/CaseDetails' // New: Detailed FIR & QR view
import { QRScanner } from './pages/QRScanner'     // New: Camera-based scanner
import { PropertyInfo } from './pages/PropertyInfo' // New: Specific item status
import { Disposal } from './pages/Disposal'       // New: Disposal management
import { Analytics } from './pages/Analytics'     // New: Stats & Graphs
import { EditProfile } from './pages/EditProfile'
import { UserProfile } from './pages/UserProfile'
import Terms from './Extras/Terms'
import Privacy from './Extras/Privacy'

function App() {
  // Simple check for protected routes
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Auth Routes */}
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Malkhana Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Create Case (The multi-step form) */}
          <Route path="/create-case" element={<CreateCase />} />
          
          {/* Specific Case View (By ID or Crime Number) */}
          <Route path="/case/:id" element={<CaseDetails />} />
          
          {/* QR & Property Tracking */}
          <Route path="/scan" element={<QRScanner />} />
          <Route path="/property/:qrString" element={<PropertyInfo />} />
          
          {/* Management & Logistics */}
          <Route path="/disposal" element={<Disposal />} />
          <Route path="/analytics" element={<Analytics />} />

          {/* User & Profile Management */}
          <Route path="/update-profile" element={<EditProfile />} />
          <Route path="/my-info" element={<UserProfile /> } />

          {/* Legal Extras */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* 404 Redirect */}
          <Route path="*" element={
            <div className="h-screen flex items-center justify-center bg-white flex-col">
               <h1 className="text-4xl font-bold text-gray-900">404</h1>
               <p className="text-gray-500">Resource not found in Malkhana records.</p>
               <button 
                onClick={() => window.location.href = "/dashboard"}
                className="mt-4 text-blue-600 underline"
               >
                 Back to Dashboard
               </button>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App