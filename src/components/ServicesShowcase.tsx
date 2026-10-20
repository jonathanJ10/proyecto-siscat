import React from 'react';
import { ArrowUpRight, CheckCircle, Sparkles, FileText, BarChart, Server, Layers, TrendingUp } from 'lucide-react';
import { PartnerRole } from '../types';
import { GENERAL_SERVICES } from '../data/partners';

interface ServicesShowcaseProps {
  onSelectServiceRole: (role: PartnerRole) => void;
  onOpenQuote: (role?: PartnerRole) => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({
  onSelectServiceRole,
  onOpenQuote,
}) => {
  return (
    <section id="servicios" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Catálogo Integral de Soluciones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Servicios Destacados de SISCAT
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Soluciones diseñadas para empresas prestadoras de acueducto, alcantarillado, aseo, alcaldías y sector privado en Colombia.
            </p>
          </div>

          <div>
            <button
              onClick={() => onOpenQuote()}
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl shadow-sm transition flex items-center gap-2"
            >
              <span>Solicitar Cotización General</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Facturación AQUARIUS */}
          <div className="group bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:border-blue-500/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                  Ingeniería de Sistemas
                </span>
                <span className="text-xs font-mono text-slate-400">#01</span>
              </div>

              {/* Image Preview */}
              <div className="h-44 rounded-2xl overflow-hidden bg-slate-200 mb-6 relative">
                <img 
                  src="/pda.jpg" 
                  alt="AQUARIUS Lecturas PDA" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-xs font-bold">
                  Terminales Móviles & PDA
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                AQUARIUS · Sistema de Facturación
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Software especializado para liquidación de consumos, toma de lecturas en campo con terminales PDA/Android, cálculo de subsidios y contribuciones por estrato, PQR y recaudos.
              </p>

              <div className="space-y-1.5 mb-6 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Impresión con código GS1-128</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Control de cortes y reconexiones</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Generación de reportes al SUI</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onSelectServiceRole('sistemas');
                onOpenQuote('sistemas');
              }}
              className="w-full py-3 px-4 bg-white hover:bg-blue-600 hover:text-white text-blue-600 border border-blue-200 hover:border-transparent rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-2xs"
            >
              <span>Cotizar Software AQUARIUS</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Cargue al SUI SuperServicios */}
          <div className="group bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:border-amber-500/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">
                  Contaduría Pública & Finanzas
                </span>
                <span className="text-xs font-mono text-slate-400">#02</span>
              </div>

              {/* Image Preview */}
              <div className="h-44 rounded-2xl overflow-hidden bg-slate-100 p-4 mb-6 flex items-center justify-center relative border border-slate-200/60">
                <img 
                  src="/sui-300x68.png" 
                  alt="SUI Superintendencia de Servicios Públicos" 
                  className="max-h-20 w-auto object-contain group-hover:scale-105 transition duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition">
                Cargue al SUI SuperServicios
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Validación y cargue de los formatos técnicos, comerciales y financieros de Acueducto, Alcantarillado y Aseo al Sistema Único de Información (SUI) de la SSPD.
              </p>

              <div className="space-y-1.5 mb-6 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Reporte Formato Único FUIF</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Cargue de tarifas y subsidios aplicados</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Prevención de sanciones y multas SSPD</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onSelectServiceRole('contabilidad');
                onOpenQuote('contabilidad');
              }}
              className="w-full py-3 px-4 bg-white hover:bg-amber-600 hover:text-white text-amber-700 border border-amber-200 hover:border-transparent rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-2xs"
            >
              <span>Cotizar Cargue al SUI</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: Estudio de Tarifas CRA */}
          <div className="group bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:border-emerald-500/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                  Ingeniería Catastral
                </span>
                <span className="text-xs font-mono text-slate-400">#03</span>
              </div>

              {/* Image Preview */}
              <div className="h-44 rounded-2xl overflow-hidden bg-slate-200 mb-6 relative">
                <img 
                  src="/taseo.jpg" 
                  alt="Estudio de Tarifas CRA" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-xs font-bold">
                  Resoluciones CRA 825 & 943
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition">
                Estudio de Tarifas CRA
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Estudio de Costos de Tarifas para los servicios de Agua Potable, Alcantarillado y Aseo de acuerdo a las resoluciones vigentes de la Comisión de Regulación de Agua Potable (CRA).
              </p>

              <div className="space-y-1.5 mb-6 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Costos CMA, CMO, CMI y Tasas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Documento soporte para Concejo Municipal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Sustentación ante juntas y usuarios</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onSelectServiceRole('catastral');
                onOpenQuote('catastral');
              }}
              className="w-full py-3 px-4 bg-white hover:bg-emerald-600 hover:text-white text-emerald-700 border border-emerald-200 hover:border-transparent rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-2xs"
            >
              <span>Cotizar Estudio CRA</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 4: Avalúos Certificados */}
          <div className="group bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:border-emerald-500/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                  Ingeniería Catastral
                </span>
                <span className="text-xs font-mono text-slate-400">#04</span>
              </div>

              {/* Image Preview */}
              <div className="h-44 rounded-2xl overflow-hidden bg-slate-200 mb-6 relative">
                <img 
                  src="/avaluos-300x163.jpg" 
                  alt="Avalúos de predios y maquinaria" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-xs font-bold">
                  Normatividad RAA & Lonja
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition">
                Avalúos de Predios & Maquinaria
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Avalúos de terrenos, fincas, casas, servidumbres de paso de acueducto, plantas de tratamiento y maquinaria/equipo conforme a la normatividad nacional.
              </p>

              <div className="space-y-1.5 mb-6 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Avaluador con registro RAA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Peritajes para créditos bancarios y notarías</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Valoración de infraestructura hídrica</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onSelectServiceRole('catastral');
                onOpenQuote('catastral');
              }}
              className="w-full py-3 px-4 bg-white hover:bg-emerald-600 hover:text-white text-emerald-700 border border-emerald-200 hover:border-transparent rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-2xs"
            >
              <span>Cotizar Avalúo Certificado</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 5: Catastro de Redes y Usuarios */}
          <div className="group bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:border-emerald-500/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                  Ingeniería Catastral & GIS
                </span>
                <span className="text-xs font-mono text-slate-400">#05</span>
              </div>

              <div className="h-44 rounded-2xl overflow-hidden bg-emerald-950 p-6 mb-6 flex flex-col justify-between text-white relative">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-emerald-300 uppercase tracking-widest font-bold">Cartografía & GIS</p>
                  <p className="text-sm font-bold">Topografía de Precisión GNSS</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition">
                Catastro de Redes y Usuarios
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Actualización y georreferenciación de redes de acueducto, alcantarillado, macromedidores y censo catastral de suscriptores para reducir agua no contabilizada (ANC).
              </p>

              <div className="space-y-1.5 mb-6 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Georreferenciación de acometidas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Mapeo digital en software GIS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Localización de fugas y pérdidas</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onSelectServiceRole('catastral');
                onOpenQuote('catastral');
              }}
              className="w-full py-3 px-4 bg-white hover:bg-emerald-600 hover:text-white text-emerald-700 border border-emerald-200 hover:border-transparent rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-2xs"
            >
              <span>Cotizar Catastro de Redes</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 6: Fortalecimiento y Auditoría */}
          <div className="group bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:border-amber-500/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">
                  Contaduría Pública & Gestión
                </span>
                <span className="text-xs font-mono text-slate-400">#06</span>
              </div>

              <div className="h-44 rounded-2xl overflow-hidden bg-amber-950 p-6 mb-6 flex flex-col justify-between text-white relative">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-amber-300 uppercase tracking-widest font-bold">Viabilidad Empresarial</p>
                  <p className="text-sm font-bold">Planes de Gestión SSPD</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition">
                Fortalecimiento Institucional
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Asesoría financiera, contabilidad NIIF, estructuración presupuestal, auditoría contable e interventoría técnica para garantizar la sostenibilidad jurídica y económica del prestador.
              </p>

              <div className="space-y-1.5 mb-6 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Auditoría independiente de cartera</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Defensa jurídica ante requerimientos SSPD</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Estructuración de costos y presupuestos</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onSelectServiceRole('contabilidad');
                onOpenQuote('contabilidad');
              }}
              className="w-full py-3 px-4 bg-white hover:bg-amber-600 hover:text-white text-amber-700 border border-amber-200 hover:border-transparent rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-2xs"
            >
              <span>Cotizar Fortalecimiento</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
