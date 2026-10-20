import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Sparkles } from 'lucide-react';
import { PartnerRole } from '../types';

interface EstimatorProps {
  onOpenQuoteWithParams: (role: PartnerRole, service: string) => void;
}

export const Estimator: React.FC<EstimatorProps> = ({ onOpenQuoteWithParams }) => {
  const [selectedRole, setSelectedRole] = useState<PartnerRole>('sistemas');
  const [tier, setTier] = useState<string>('comunitario');
  const [includeTraining, setIncludeTraining] = useState<boolean>(true);

  const getTierEstimate = () => {
    if (selectedRole === 'sistemas') {
      switch (tier) {
        case 'comunitario': return { time: '5 a 10 días', plan: 'Plan AQUARIUS Express (< 1.000 usuarios)', highlight: 'Ideal para Acueductos Veredales y Comunitarios' };
        case 'municipal': return { time: '15 a 25 días', plan: 'Plan AQUARIUS Municipal (1.000 - 5.000 usuarios)', highlight: 'Incluye parametrización PDA de lecturas y recaudo' };
        case 'empresarial': return { time: '30 a 45 días', plan: 'Plan AQUARIUS Corporativo (> 5.000 usuarios)', highlight: 'Multi-empresa, portal web de pagos y módulos avanzados' };
        default: return { time: 'A convenir', plan: 'Plan a la medida', highlight: 'Consultoría personalizada' };
      }
    } else if (selectedRole === 'catastral') {
      switch (tier) {
        case 'comunitario': return { time: '15 a 20 días', plan: 'Estudio Simplificado CRA (Nivel I)', highlight: 'Cumplimiento normativo para pequeños prestadores' };
        case 'municipal': return { time: '25 a 40 días', plan: 'Estudio de Tarifas CRA Integral & Redes', highlight: 'Costos CMA, CMO, CMI y catastro de redes matrices' };
        case 'empresarial': return { time: '40 a 60 días', plan: 'Catastro Integral Multipropósito & Avalúos', highlight: 'Modelación GIS, censo predial y valoración RAA' };
        default: return { time: 'A convenir', plan: 'Estudio a la medida', highlight: 'Inspección técnica' };
      }
    } else {
      switch (tier) {
        case 'comunitario': return { time: '3 a 7 días', plan: 'Cargue SUI de Formatos Básicos', highlight: 'Validación y cargue trimestral sin errores' };
        case 'municipal': return { time: '10 a 15 días', plan: 'Saneamiento y Cargue Anual FUIF', highlight: 'Regularización de requerimientos atrasados ante SSPD' };
        case 'empresarial': return { time: 'Acompañamiento Continuo', plan: 'Asesoría Integral Contable NIIF & SUI', highlight: 'Outsourcing contable, tributario y defensa jurídica' };
        default: return { time: 'A convenir', plan: 'Plan Financiero a la medida', highlight: 'Auditoría específica' };
      }
    }
  };

  const currentEst = getTierEstimate();

  return (
    <section className="py-20 bg-slate-100/70 border-y border-slate-200 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Orientador Rápido</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Simulador Preliminar de Requerimientos
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Selecciona la escala de tu empresa o municipio para conocer el alcance recomendado.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Calculator className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Step 1: Profession */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                1. Área de Interés:
              </label>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setSelectedRole('sistemas')}
                  className={`w-full text-left p-3 rounded-xl border text-xs font-bold transition ${
                    selectedRole === 'sistemas'
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Ing. Sistemas (AQUARIUS Facturación)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedRole('catastral')}
                  className={`w-full text-left p-3 rounded-xl border text-xs font-bold transition ${
                    selectedRole === 'catastral'
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Ing. Catastral (Tarifas CRA & Avalúos)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedRole('contabilidad')}
                  className={`w-full text-left p-3 rounded-xl border text-xs font-bold transition ${
                    selectedRole === 'contabilidad'
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Contador Público (Cargue SUI SSPD)
                </button>
              </div>
            </div>

            {/* Step 2: Scale */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                2. Tamaño o Escala:
              </label>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setTier('comunitario')}
                  className={`w-full text-left p-3 rounded-xl border text-xs font-bold transition ${
                    tier === 'comunitario'
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Comunitario / Veredal (&lt; 1.000 suscriptores)
                </button>
                <button
                  type="button"
                  onClick={() => setTier('municipal')}
                  className={`w-full text-left p-3 rounded-xl border text-xs font-bold transition ${
                    tier === 'municipal'
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Municipal Mediano (1.000 a 5.000 suscriptores)
                </button>
                <button
                  type="button"
                  onClick={() => setTier('empresarial')}
                  className={`w-full text-left p-3 rounded-xl border text-xs font-bold transition ${
                    tier === 'empresarial'
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Gran Empresa / Departamental (&gt; 5.000 suscriptores)
                </button>
              </div>
            </div>

            {/* Step 3: Result Summary card */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-blue-400 block mb-1">
                  Propuesta Recomendada
                </span>
                <h4 className="text-base font-bold text-white mb-2 leading-snug">
                  {currentEst.plan}
                </h4>
                <p className="text-xs text-slate-300 mb-4">
                  {currentEst.highlight}
                </p>
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs flex items-center justify-between">
                  <span className="text-slate-400">Tiempo Estimado:</span>
                  <strong className="text-emerald-400">{currentEst.time}</strong>
                </div>
              </div>

              <button
                onClick={() => onOpenQuoteWithParams(selectedRole, currentEst.plan)}
                className="w-full mt-4 py-2.5 px-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-md transition flex items-center justify-center gap-1.5"
              >
                <span>Solicitar Cotización Formal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
