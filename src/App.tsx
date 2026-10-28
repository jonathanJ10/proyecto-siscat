import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PartnerModules } from './components/PartnerModules';
import { ServicesShowcase } from './components/ServicesShowcase';
import { AboutUs } from './components/AboutUs';
import { Footer } from './components/Footer';
import { QuotationModal } from './components/QuotationModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { ConfigModal } from './components/ConfigModal';
import { LoginModal, checkAdminSession, clearAdminSession } from './components/LoginModal';
import { PartnerRole, CompanyConfig } from './types';
import { DEFAULT_CONFIG } from './data/partners';

export default function App() {
  const [activeRole, setActiveRole] = useState<PartnerRole>('sistemas');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteRole, setQuoteRole] = useState<PartnerRole>('sistemas');
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Load config from localStorage if available
  const [config, setConfig] = useState<CompanyConfig>(() => {
    try {
      const saved = localStorage.getItem('siscat_config');
      if (saved) return JSON.parse(saved);
    } catch (_) {}
    return DEFAULT_CONFIG;
  });

  const handleSaveConfig = (newConfig: CompanyConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem('siscat_config', JSON.stringify(newConfig));
    } catch (_) {}
  };

  const handleOpenQuote = (role?: PartnerRole) => {
    if (role) {
      setQuoteRole(role);
      setActiveRole(role);
    } else {
      setQuoteRole(activeRole);
    }
    setIsQuoteOpen(true);
  };

  const handleSelectRoleFromHero = (role: PartnerRole) => {
    setActiveRole(role);
    const element = document.getElementById('modulos-profesionales');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent('Hola SISCAT, deseo comunicarme con un especialista para consultar servicios de consultoría e ingeniería.');
    window.open(`https://wa.me/${config.generalPhone}?text=${text}`, '_blank');
  };

  // When gear icon is clicked: check if admin session is active
  const handleOpenConfig = () => {
    if (checkAdminSession()) {
      // Session still valid, open config directly
      setIsConfigOpen(true);
    } else {
      // No valid session, show login first
      setIsLoginOpen(true);
    }
  };

  // When login succeeds, open config modal
  const handleLoginSuccess = () => {
    setIsLoginOpen(false);
    setIsConfigOpen(true);
  };

  // When config is closed, optionally clear session (keep active for convenience)
  const handleCloseConfig = () => {
    setIsConfigOpen(false);
    // Uncomment the next line if you want session to expire on modal close:
    // clearAdminSession();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-blue-600 selection:text-white font-sans text-slate-800">
      
      {/* Top Header */}
      <Header
        config={config}
        onOpenQuote={handleOpenQuote}
        onOpenConfig={handleOpenConfig}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onSelectRole={handleSelectRoleFromHero}
          onOpenQuote={handleOpenQuote}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* The 3 Partner Modules (Role-based work) */}
        <PartnerModules
          activeRole={activeRole}
          onRoleChange={setActiveRole}
          onOpenQuote={handleOpenQuote}
          config={config}
        />

        {/* Detailed Services Showcase */}
        <ServicesShowcase
          onSelectServiceRole={setActiveRole}
          onOpenQuote={handleOpenQuote}
        />

        {/* Who We Are & Experience */}
        <AboutUs
          onOpenQuote={handleOpenQuote}
          onOpenWhatsApp={handleOpenWhatsApp}
        />
      </main>

      {/* Corporate Footer */}
      <Footer
        config={config}
        onOpenQuote={handleOpenQuote}
        onOpenConfig={handleOpenConfig}
      />

      {/* Dynamic Quotation Modal */}
      <QuotationModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialRole={quoteRole}
        config={config}
      />

      {/* Floating Multi-Partner WhatsApp Widget */}
      <WhatsAppWidget config={config} />

      {/* Admin Login Modal (shown before Config if session expired) */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Settings Modal (Customize Emails & Numbers) - Protected by Login */}
      <ConfigModal
        isOpen={isConfigOpen}
        onClose={handleCloseConfig}
        config={config}
        onSaveConfig={handleSaveConfig}
      />

    </div>
  );
}