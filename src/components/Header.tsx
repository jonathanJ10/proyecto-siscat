import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Menu, X, MessageSquare, Settings, ChevronDown, Laptop, Compass, FileSpreadsheet } from 'lucide-react';
import { CompanyConfig, PartnerRole } from '../types';

interface HeaderProps {
  config: CompanyConfig;
  onOpenQuote: (role?: PartnerRole) => void;
  onOpenConfig: () => void;
  onOpenWhatsApp: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  config,
  onOpenQuote,
  onOpenConfig,
  onOpenWhatsApp,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modulesDropdownOpen, setModulesDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all">
      {/* Top emergency / contact strip */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Bogotá - Colombia (Atención Nacional)</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>Lun - Vie: 8:00 a.m. - 5:00 p.m.</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a 
              href={`mailto:${config.generalEmail}`} 
              className="flex items-center gap-1.5 hover:text-blue-400 transition"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>{config.generalEmail}</span>
            </a>
            <div className="hidden sm:flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <a href="tel:3224278578" className="hover:text-emerald-400 transition">322 427 8578</a>
              <span className="text-slate-600">|</span>
              <a href="tel:3102009970" className="hover:text-emerald-400 transition">310 200 9970</a>
            </div>
            <button
              onClick={onOpenConfig}
              title="Configuración de correos y WhatsApp de los socios"
              className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition"
            >
              <Settings className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Corporate Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center p-1 bg-white rounded-lg border border-slate-200/80 shadow-xs group-hover:border-blue-300 transition">
              <img 
                src="/logo.png" 
                alt="SISCAT Logo" 
                className="h-11 w-auto object-contain" 
                onError={(e) => {
                  // Fallback if image fails
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition">
                  SISCAT
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded border border-blue-200">
                  SAS
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 leading-tight">
                Consultoría · Tecnología · Catastro · Finanzas
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a 
              href="#inicio" 
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
            >
              Inicio
            </a>

            {/* Modules Dropdown */}
            <div className="relative group" onMouseLeave={() => setModulesDropdownOpen(false)}>
              <button
                onClick={() => setModulesDropdownOpen(!modulesDropdownOpen)}
                onMouseEnter={() => setModulesDropdownOpen(true)}
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-blue-600 py-2 transition"
              >
                <span>Módulos por Especialista</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition" />
              </button>

              {modulesDropdownOpen && (
                <div 
                  className="absolute left-0 mt-1 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 transition animate-in fade-in slide-in-from-top-2"
                  onMouseEnter={() => setModulesDropdownOpen(true)}
                >
                  <a
                    href="#modulo-sistemas"
                    onClick={() => setModulesDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50/70 transition group/item"
                  >
                    <div className="p-2 rounded-lg bg-blue-100/80 text-blue-700 group-hover/item:bg-blue-600 group-hover/item:text-white transition">
                      <Laptop className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 group-hover/item:text-blue-700">
                        Ing. de Sistemas
                      </p>
                      <p className="text-xs text-slate-500">
                        Software Facturación AQUARIUS, PDA & Cloud
                      </p>
                    </div>
                  </a>

                  <a
                    href="#modulo-catastral"
                    onClick={() => setModulesDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50/70 transition group/item"
                  >
                    <div className="p-2 rounded-lg bg-emerald-100/80 text-emerald-700 group-hover/item:bg-emerald-600 group-hover/item:text-white transition">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 group-hover/item:text-emerald-700">
                        Ing. Catastral
                      </p>
                      <p className="text-xs text-slate-500">
                        Tarifas CRA, Avalúos RAA & Catastro Redes
                      </p>
                    </div>
                  </a>

                  <a
                    href="#modulo-contabilidad"
                    onClick={() => setModulesDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-amber-50/70 transition group/item"
                  >
                    <div className="p-2 rounded-lg bg-amber-100/80 text-amber-700 group-hover/item:bg-amber-600 group-hover/item:text-white transition">
                      <FileSpreadsheet className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 group-hover/item:text-amber-700">
                        Contador Público
                      </p>
                      <p className="text-xs text-slate-500">
                        Cargue al SUI SSPD, Estados NIIF & Auditoría
                      </p>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a 
              href="#servicios" 
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
            >
              Servicios Destacados
            </a>

            <a 
              href="#nosotros" 
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
            >
              Quiénes Somos
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenWhatsApp}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Directo</span>
            </button>

            <button
              onClick={() => onOpenQuote()}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/20 rounded-xl transition active:scale-95"
            >
              <span>Solicitar Cotización</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in">
          <div className="space-y-1">
            <a 
              href="#inicio" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
            >
              Inicio
            </a>
            <p className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400 pt-2">
              Módulos Profesionales
            </p>
            <a 
              href="#modulo-sistemas" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-blue-700 rounded-lg hover:bg-blue-50"
            >
              <Laptop className="w-4 h-4" />
              <span>Ing. de Sistemas (Facturación & Software)</span>
            </a>
            <a 
              href="#modulo-catastral" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-emerald-700 rounded-lg hover:bg-emerald-50"
            >
              <Compass className="w-4 h-4" />
              <span>Ing. Catastral (Tarifas CRA & Avalúos)</span>
            </a>
            <a 
              href="#modulo-contabilidad" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-amber-700 rounded-lg hover:bg-amber-50"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Contador Público (Cargue SUI & NIIF)</span>
            </a>
            <a 
              href="#servicios" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
            >
              Servicios Destacados
            </a>
            <a 
              href="#nosotros" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
            >
              Quiénes Somos
            </a>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 text-center text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm"
            >
              Realizar Cotización
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full py-2.5 text-center text-sm font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl"
            >
              Chatear por WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
