import React from 'react';
import { 
  Laptop, Compass, FileSpreadsheet, ArrowRight, 
  MessageSquare, Mail, Sparkles, Phone
} from 'lucide-react';
import { PartnerRole, CompanyConfig } from '../types';
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

  return (
    <section id="modulos-profesionales" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Módulos de Atención Directa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Atención y Cotización Directa por Especialista
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Selecciona el profesional según la necesidad de tu empresa o municipio. Tu solicitud llegará <strong>directamente al correo y WhatsApp del socio a cargo</strong>.
          </p>
        </div>

        {/* Module Switcher Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center p-1.5 bg-slate-200/70 rounded-2xl max-w-4xl mx-auto mb-10 gap-1.5 shadow-inner">
          
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
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden transition-all duration-300 max-w-5xl mx-auto">
          
          {/* Top Banner of Selected Professional */}
          <div className={`p-6 sm:p-10 bg-gradient-to-r ${currentPartner.bgGradient} text-white flex flex-col md:flex-row md:items-center justify-between gap-6`}>
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0 shadow-lg">
                {activeRole === 'sistemas' && <Laptop className="w-10 h-10" />}
                {activeRole === 'catastral' && <Compass className="w-10 h-10" />}
                {activeRole === 'contabilidad' && <FileSpreadsheet className="w-10 h-10" />}
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-1.5">
                  {currentPartner.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {currentPartner.profession}
                </h3>
                <p className="text-white/90 text-sm mt-1 max-w-xl font-medium">
                  {currentPartner.shortDesc}
                </p>
                <p className="text-white/70 text-xs mt-1">
                  Líder de Área Técnica: <span className="text-white font-semibold">{currentPartner.partnerName}</span> · SISCAT SAS
                </p>
              </div>
            </div>

            {/* Quick action buttons for this specific partner */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenQuote(currentPartner.id)}
                className="px-6 py-3.5 rounded-xl font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-md transition transform active:scale-95 text-sm flex items-center justify-center gap-2"
              >
                <span>Cotizar con este Especialista</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${getPartnerPhone(currentPartner.id)}?text=${encodeURIComponent(currentPartner.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl font-bold text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md transition text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Module Notification Routing Info */}
          <div className="bg-slate-100/90 px-6 sm:px-10 py-4 border-b border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-4">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-slate-500" />
              <span>Enrutamiento de cotización: <strong className="text-slate-900 font-semibold">{getPartnerEmail(currentPartner.id)}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Línea directa de atención: <strong className="text-slate-900 font-semibold">+{getPartnerPhone(currentPartner.id)}</strong></span>
            </div>
          </div>

          {/* Bottom Combined Project Callout Banner */}
          <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <p className="text-sm font-bold text-white mb-1">
                ¿Requieres un proyecto integral que combine dos o más especialidades?
              </p>
              <p className="text-xs text-slate-400 max-w-2xl">
                Nuestros 3 socios trabajan de forma articulada: Catastro de redes + Estudio tarifario CRA + Parametrización en Software AQUARIUS + Validación y cargue normativo al SUI de la SSPD.
              </p>
            </div>
            <button
              onClick={() => onOpenQuote()}
              className="shrink-0 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-md transition"
            >
              Solicitar Cotización Integral
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
