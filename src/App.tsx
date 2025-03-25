import React, { ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ForgotPassword from './components/auth/ForgotPassword';
import ThankYou from './components/ThankYou';
import NotFound from './components/NotFound';
import FAQ from './components/FAQ';
import AboutUs from './components/pages/AboutUs';
import Careers from './components/pages/Careers';
import Blog from './components/pages/Blog';
import Press from './components/pages/Press';
import Documentation from './components/pages/Documentation';
import HelpCenter from './components/pages/HelpCenter';
import ApiReference from './components/pages/ApiReference';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfService from './components/legal/TermsOfService';
import CookiePolicy from './components/legal/CookiePolicy';
import AdminDashboard from './components/admin/Dashboard';
import ClientDashboard from './components/client/Dashboard';
import DemoDashboard from './components/demo/DemoDashboard';
import { AuthProvider } from './contexts/AuthContext';

// Simple mock AuthProvider for demo purposes
export const MockAuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: string[];
}

const ProtectedRoute = ({ children, allowedRoles = [] }: ProtectedRouteProps) => {
  // For demo purposes, always allow access
  return children;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <MockAuthProvider>
                <AdminDashboard />
              </MockAuthProvider>
            </ProtectedRoute>
          }
        />

        {/* Client Routes */}
        <Route
          path="/client/*"
          element={
            <ProtectedRoute allowedRoles={['client']}>
              <ClientDashboard />
            </ProtectedRoute>
          }
        />

        {/* Demo Routes */}
        <Route path="/demo/*" element={<DemoDashboard />} />

        {/* Public Routes */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Features />
              <Products />
              <Testimonials />
              <Pricing />
              <FAQ />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/press" element={<Press />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/api" element={<ApiReference />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}