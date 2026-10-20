import React from 'react';
import { ShieldCheck, Target, Award, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { PartnerRole } from '../types';

interface AboutUsProps {
  onOpenQuote: (role?: PartnerRole) => void;
  onOpenWhatsApp: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenQuote, onOpenWhatsApp }) => {
  return (
    <section id="nosotros" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold mb-4">
              <span>Quiénes Somos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Más de 10 Años Transformando Empresas de Servicios Públicos y Municipios en Colombia
            </h2>

            <p className="text-slate-300 text-base leading-relaxed mb-6">
              <strong>SISCAT</strong> es una firma de consultoría, asesoría y desarrollo tecnológico especializada en la gestión integral de empresas de servicios públicos (Agua Potable, Alcantarillado y Aseo), alcaldías municipales y organizaciones privadas.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Nuestra mayor ventaja competitiva radica en la unión sinérgica de tres disciplinas clave representadas por nuestros <strong>tres socios fundadores</strong>: la <em>Ingeniería de Sistemas</em> para la innovación tecnológica y facturación, la <em>Ingeniería Catastral</em> para la gestión técnica, tarifaria y territorial, y la <em>Contaduría Pública</em> para el rigor financiero y normativo ante la SuperServicios.
            </p>

            {/* Checklist of commitments */}
            <div className="space-y-3.5 mb-8">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Cumplimiento Estricto Normativo</p>
                  <p className="text-xs text-slate-400">Alineados con resoluciones CRA 825, CRA 943, Ley 142 de 1994 y directrices SSPD.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-blue-500/20 text-blue-400 shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Software Propietario AQUARIUS</p>
                  <p className="text-xs text-slate-400">Solución tecnológica probada para toma de lecturas PDA, facturación y recaudos.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Acompañamiento Personalizado por Socios Senior</p>
                  <p className="text-xs text-slate-400">Atención directa sin intermediarios, con canales de comunicación abiertos por correo y WhatsApp.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuote()}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 transition text-sm flex items-center gap-2"
              >
                <span>Iniciar Cotización con SISCAT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenWhatsApp}
                className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-emerald-400 font-bold rounded-xl transition text-sm"
              >
                Chatear con un Socio
              </button>
            </div>
          </div>

          {/* Right Bento Experience Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-white mb-1">+10 Años</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">Trayectoria</p>
              <p className="text-xs text-slate-400">
                Experiencia continua implementando procesos de facturación, avalúos y cargue al SUI en toda Colombia.
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-white mb-1">0 Multas</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">Seguridad Jurídica</p>
              <p className="text-xs text-slate-400">
                Garantizamos reportes al SUI y estudios tarifarios blindados técnicamente para evitar sanciones.
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-white mb-1">3 Socios</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">Enfoque Multidisciplinario</p>
              <p className="text-xs text-slate-400">
                Ing. Sistemas, Ing. Catastral y Contador Público liderando cada proyecto de inicio a fin.
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-white mb-1">100%</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">Compromiso Ético</p>
              <p className="text-xs text-slate-400">
                Confidencialidad, precisión técnica y entrega oportuna de resultados en todo el territorio nacional.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
