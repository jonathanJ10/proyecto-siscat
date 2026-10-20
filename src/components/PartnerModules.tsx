import React, { useState } from 'react';
import { 
  Laptop, Compass, FileSpreadsheet, Check, ArrowRight, 
  MessageSquare, Mail, Award, Clock, FileText, ChevronRight,
  Server, ShieldCheck, Code, BarChart3, Layers, CheckCircle2,
  Calculator, TrendingUp
} from 'lucide-react';
import { Partner, PartnerRole, CompanyConfig } from '../types';
import { PARTNERS } from '../data/partners';

interface PartnerModulesProps {
  activeRole: PartnerRole;
  onRoleChange: (role: PartnerRole) => void;
  onOpenQuote: (role?: PartnerRole) => void;
  config: CompanyConfig;
}

export const PartnerModules: React.FC<PartnerModulesProps> = ({
  activeRole,
  onRoleChange,
  onOpenQuote,
  config,
}) => {
  const currentPartner = PARTNERS.find(p => p.id === activeRole) || PARTNERS[0];

  const getPartnerEmail = (id: PartnerRole) => {
    switch(id) {
      case 'sistemas': return config.emailSistemas;
      case 'catastral': return config.emailCatastral;
      case 'contabilidad': return config.emailContabilidad;
    }
  };

  const getPartnerPhone = (id: PartnerRole) => {
    switch(id) {
      case 'sistemas': return config.phoneSistemas;
      case 'catastral': return config.phoneCatastral;
      case 'contabilidad': return config.phoneContabilidad;
    }
  };

  // Helper icon selector
  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Code': return <Code className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5" />;
      case 'Calculator': return <Calculator className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <section id="modulos-profesionales" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-semibold mb-3">
            <span>Especialidades de los 3 Socios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Módulos de Trabajo y Cotización por Especialista
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Cada socio lidera un área técnica específica. Al ingresar y solicitar tu cotización en el módulo correspondiente, la solicitud llegará <strong>directamente al correo y WhatsApp del profesional a cargo</strong>.
          </p>
        </div>

        {/* Module Switcher Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center p-1.5 bg-slate-200/70 rounded-2xl max-w-4xl mx-auto mb-12 gap-1.5 shadow-inner">
          
          <button
            id="modulo-sistemas"
            onClick={() => onRoleChange('sistemas')}
            className={`w-full sm:w-1/3 flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-sm font-bold transition-all duration-200 ${
              activeRole === 'sistemas'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Laptop className="w-4 h-4" />
            <span>1. Ing. de Sistemas</span>
          </button>

          <button
            id="modulo-catastral"
            onClick={() => onRoleChange('catastral')}
            className={`w-full sm:w-1/3 flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-sm font-bold transition-all duration-200 ${
              activeRole === 'catastral'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/25 scale-[1.02]'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>2. Ing. Catastral</span>
          </button>

          <button
            id="modulo-contabilidad"
            onClick={() => onRoleChange('contabilidad')}
            className={`w-full sm:w-1/3 flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-sm font-bold transition-all duration-200 ${
              activeRole === 'contabilidad'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-500/25 scale-[1.02]'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>3. Contador Público</span>
          </button>

        </div>

        {/* Active Module Showcase Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden transition-all duration-300">
          
          {/* Top Banner of Selected Professional */}
          <div className={`p-6 sm:p-8 bg-gradient-to-r ${currentPartner.bgGradient} text-white flex flex-col md:flex-row md:items-center justify-between gap-6`}>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0 shadow-lg">
                {activeRole === 'sistemas' && <Laptop className="w-8 h-8" />}
                {activeRole === 'catastral' && <Compass className="w-8 h-8" />}
                {activeRole === 'contabilidad' && <FileSpreadsheet className="w-8 h-8" />}
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-1">
                  {currentPartner.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {currentPartner.profession}
                </h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Líder de Área: {currentPartner.partnerName} · SISCAT
                </p>
              </div>
            </div>

            {/* Quick action buttons for this specific partner */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenQuote(currentPartner.id)}
                className="px-6 py-3 rounded-xl font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-md transition transform active:scale-95 text-sm flex items-center gap-2"
              >
                <span>Cotizar en este Módulo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${getPartnerPhone(currentPartner.id)}?text=${encodeURIComponent(currentPartner.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl font-bold text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md transition text-sm flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Module Notification Routing Info */}
          <div className="bg-slate-100/90 px-6 sm:px-8 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-3">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-slate-500" />
              <span>Correo de cotización directa: <strong className="text-slate-800">{getPartnerEmail(currentPartner.id)}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Línea WhatsApp directa: <strong className="text-slate-800">+{getPartnerPhone(currentPartner.id)}</strong></span>
            </div>
          </div>

          {/* Detailed Services Grid inside the Module */}
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="mb-6">
              <h4 className="text-lg font-bold text-slate-900 mb-1">
                Servicios Especializados del Módulo
              </h4>
              <p className="text-slate-500 text-sm">
                Diseñados conforme a la legislación colombiana (CRA, SSPD, DIAN y Catastro Nacional).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentPartner.services.map((srv, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl p-6 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-4 shadow-2xs">
                      {renderServiceIcon(srv.icon)}
                    </div>
                    <h5 className="text-base font-bold text-slate-900 mb-2">
                      {srv.title}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {srv.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {srv.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onOpenQuote(currentPartner.id)}
                    className="w-full mt-2 py-2.5 px-3 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 transition flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>Cotizar este servicio</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>
              ))}
            </div>

            {/* Bottom Callout banner inside module */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-white mb-1">
                  ¿Tienes requerimientos combinados entre varios especialistas?
                </p>
                <p className="text-xs text-slate-400">
                  Por ejemplo: Actualización de catastro de redes + Estudio de tarifas CRA + Parametrización en el Software AQUARIUS + Cargue al SUI.
                </p>
              </div>
              <button
                onClick={() => onOpenQuote()}
                className="shrink-0 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-md transition"
              >
                Solicitar Cotización Integral
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
