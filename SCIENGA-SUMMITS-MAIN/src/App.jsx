import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import TermsAndConditions from './pages/TermsAndConditions'
import RefundCancellation from './pages/RefundCancellation'
import Privacy from './pages/Privacy'
import Prices from './pages/Prices'
import FAQs from './pages/FAQs'
import Register from './pages/Register'
import Sponsorship from './pages/Sponsorship'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

export default function App() {
  const location = useLocation();

  // Conditionally render Navbar/Footer for pages that include them internally
  // (Both Terms and Refund pages follow this pattern now)
  const isTermsPage = location.pathname === '/terms';
  const isRefundPage = location.pathname === '/refund-cancellation';
  const isPrivacyPage = location.pathname === '/privacy';
  const isPricesPage = location.pathname === '/prices';
  const isFaqsPage = location.pathname === '/faqs';
  const isContactPage = location.pathname === '/contact';
  const isRegisterPage = location.pathname === '/register';
  const hideGlobalLayout = isTermsPage || isRefundPage || isPrivacyPage || isPricesPage || isFaqsPage || isContactPage || isRegisterPage;

  return (
    <div className="app-root">
      {!hideGlobalLayout && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/refund-cancellation" element={<RefundCancellation />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
        </Routes>
      </main>
      {!hideGlobalLayout && <Footer />}
    </div>
  )
}
