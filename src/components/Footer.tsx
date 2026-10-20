import React from 'react';
import { Mail, Phone, MapPin, Clock, Shield, ArrowUp, Settings, Laptop, Compass, FileSpreadsheet } from 'lucide-react';
import { CompanyConfig, PartnerRole } from '../types';

interface FooterProps {
  config: CompanyConfig;
  onOpenQuote: (role?: PartnerRole) => void;
  onOpenConfig: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenQuote, onOpenConfig }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Top CTA Bar inside footer */}
      <div className="bg-gradient-to-r from-blue-900/60 via-slate-900 to-emerald-900/40 border-b border-slate-800/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              ¿Listo para modernizar la gestión de tu empresa o municipio?
            </h3>
            <p className="text-slate-300 max-w-xl text-sm">
              Agenda una sesión técnica con nuestros especialistas en Sistemas, Catastro o Contabilidad.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenQuote()}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 transition text-sm"
            >
              Solicitar Cotización Inmediata
            </button>
            <button
              onClick={scrollToTop}
              className="p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-white rounded-lg inline-flex">
                <img src="/logo.png" alt="SISCAT Logo" className="h-8 w-auto object-contain" />
              </div>
              <div>
                <span className="text-lg font-black text-white tracking-tight">SISCAT</span>
                <span className="text-[10px] text-blue-400 block font-semibold">Consultoría e Ingeniería Especializada</span>
              </div>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Empresa con experiencia de más de 10 años en facturación de servicios públicos domiciliarios (Software AQUARIUS), validación y cargue al SUI, avalúos certificados y estudios de tarifas CRA de acuerdo a la normatividad colombiana.
            </p>

            <div className="pt-2 text-[11px] text-slate-500 space-y-1">
              <p>NIT: Empresa Colombiana Legalmente Constituida</p>
              <p>Sede Principal: {config.address}</p>
            </div>
          </div>

          {/* Col 2: Módulos de los 3 Socios */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-xs">
              Módulos Profesionales
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href="#modulo-sistemas" 
                  onClick={() => onOpenQuote('sistemas')}
                  className="hover:text-blue-400 transition flex items-center gap-1.5"
                >
                  <Laptop className="w-3.5 h-3.5 text-blue-400" />
                  <span>Ingeniería de Sistemas</span>
                </a>
              </li>
              <li>
                <a 
                  href="#modulo-catastral" 
                  onClick={() => onOpenQuote('catastral')}
                  className="hover:text-emerald-400 transition flex items-center gap-1.5"
                >
                  <Compass className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ingeniería Catastral</span>
                </a>
              </li>
              <li>
                <a 
                  href="#modulo-contabilidad" 
                  onClick={() => onOpenQuote('contabilidad')}
                  className="hover:text-amber-400 transition flex items-center gap-1.5"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-amber-400" />
                  <span>Contaduría Pública & SUI</span>
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition">
                  Planes de Facturación AQUARIUS
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition">
                  Estudios de Costos CRA 825/943
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Servicios Destacados */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-xs">
              Servicios Destacados
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#servicios" className="hover:text-white transition">
                  Facturación AQUARIUS & PDA
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition">
                  Cargue de Información al SUI
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition">
                  Avalúos de Terrenos & Maquinaria
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition">
                  Catastro de Redes Acueducto
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition">
                  Fortalecimiento Institucional
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto Oficial */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-xs">
              Canales de Atención
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Bogotá D.C., Colombia</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${config.generalEmail}`} className="hover:text-white transition truncate">
                  {config.generalEmail}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:3224278578" className="hover:text-white block">322 427 8578</a>
                  <a href="tel:3102009970" className="hover:text-white block">310 200 9970</a>
                </div>
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Lun a Vie: 8:00 - 17:00</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Compliance Strip */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} SISCAT SAS. Todos los derechos reservados. Diseñado para el sector de servicios públicos domiciliarios.
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenConfig}
              className="hover:text-slate-300 flex items-center gap-1 transition"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Configuración de Correos</span>
            </button>
            <span>·</span>
            <span>Cumplimiento CRA · SSPD · RAA</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
