import React from 'react';
import { ArrowRight, Laptop, Compass, FileSpreadsheet, CheckCircle2, Shield, Zap, Users } from 'lucide-react';
import { PartnerRole } from '../types';

interface HeroProps {
  onSelectRole: (role: PartnerRole) => void;
  onOpenQuote: (role?: PartnerRole) => void;
  onOpenWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectRole,
  onOpenQuote,
  onOpenWhatsApp,
}) => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-24 lg:pt-20 lg:pb-32">
      
      {/* Background glowing ambient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid subtle pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main hero center copy */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <span>Firma de Consultoría e Ingeniería Integral en Colombia</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Tres Especialidades.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400">
              Un Solo Equipo Integral.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8">
            SISCAT reúne la experiencia de un <strong>Ingeniero de Sistemas</strong> (Software AQUARIUS), un <strong>Ingeniero Catastral</strong> (Tarifas CRA y Avalúos) y un <strong>Contador Público</strong> (Cargue SUI y Estados Financieros). Selecciona el módulo de tu interés y cotiza en línea.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenQuote()}
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0 text-base"
            >
              <span>Cotizar con un Especialista</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenWhatsApp}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-emerald-300 bg-emerald-950/50 hover:bg-emerald-900/50 border border-emerald-500/30 transition text-base"
            >
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Chatear por WhatsApp</span>
            </button>
          </div>
        </div>

        {/* 3 Interactive Partner Role Cards (High Visual Impact) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          
          {/* Module 1: Ingeniero de Sistemas */}
          <div 
            onClick={() => onSelectRole('sistemas')}
            className="group relative bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-blue-500/80 rounded-2xl p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 -mr-2 -mt-2 bg-blue-500 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-sm">
              Socio TI
            </div>
            <div>
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                <Laptop className="w-7 h-7" />
              </div>

              <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
                Módulo 1
              </p>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition">
                Ingeniería de Sistemas
              </h2>
              <p className="text-sm text-slate-300 mb-4 line-clamp-3">
                Sistema de Facturación de Servicios Públicos <strong>AQUARIUS</strong>, toma de lecturas en dispositivos móviles PDA, bases de datos y soporte Cloud.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:text-blue-300">
              <span>Ingresar y Cotizar TI</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Module 2: Ingeniero Catastral */}
          <div 
            onClick={() => onSelectRole('catastral')}
            className="group relative bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/80 rounded-2xl p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 -mr-2 -mt-2 bg-emerald-500 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-sm">
              Socio Tarifas & CRA
            </div>
            <div>
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition duration-300">
                <Compass className="w-7 h-7" />
              </div>

              <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                Módulo 2
              </p>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition">
                Ingeniería Catastral
              </h2>
              <p className="text-sm text-slate-300 mb-4 line-clamp-3">
                Estudios de Costos y Tarifas CRA (Agua, Aseo y Alcantarillado), Avalúos certificados RAA de predios y maquinaria, y catastro de redes.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
              <span>Ingresar y Cotizar Catastro</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Module 3: Contador Público */}
          <div 
            onClick={() => onSelectRole('contabilidad')}
            className="group relative bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/80 rounded-2xl p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 -mr-2 -mt-2 bg-amber-500 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-sm">
              Socio Financiero
            </div>
            <div>
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition duration-300">
                <FileSpreadsheet className="w-7 h-7" />
              </div>

              <p className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                Módulo 3
              </p>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition">
                Contaduría Pública & SUI
              </h2>
              <p className="text-sm text-slate-300 mb-4 line-clamp-3">
                Validación y cargue normativo de formatos al Sistema Único de Información (SUI) de la SSPD, contabilidad NIIF y auditorías financieras.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
              <span>Ingresar y Cotizar SUI</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
            </div>
          </div>

        </div>

        {/* Corporate Trust Badges */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white mb-1">+10 Años</span>
            <span className="text-xs text-slate-400 font-medium">Experiencia Comprobada</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-blue-400 mb-1">100%</span>
            <span className="text-xs text-slate-400 font-medium">Cumplimiento CRA & SSPD</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-emerald-400 mb-1">3 Socios</span>
            <span className="text-xs text-slate-400 font-medium">Profesionales Titulados</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-amber-400 mb-1">Colombia</span>
            <span className="text-xs text-slate-400 font-medium">Cobertura a Nivel Nacional</span>
          </div>
        </div>

      </div>
    </section>
  );
};
