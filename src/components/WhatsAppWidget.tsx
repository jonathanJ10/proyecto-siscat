import React, { useState } from 'react';
import { MessageSquare, X, Laptop, Compass, FileSpreadsheet, PhoneCall, ChevronRight } from 'lucide-react';
import { CompanyConfig } from '../types';

interface WhatsAppWidgetProps {
  config: CompanyConfig;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ config }) => {
  const [isOpen, setIsOpen] = useState(false);

  const channels = [
    {
      role: 'Ingeniero de Sistemas',
      subtitle: 'Software AQUARIUS, PDA & TI',
      phone: config.phoneSistemas,
      message: 'Hola Ing. de Sistemas SISCAT, deseo consultar y cotizar soluciones de software/tecnología.',
      color: 'blue',
      icon: <Laptop className="w-4 h-4 text-blue-600" />,
      badge: 'Software & TI',
    },
    {
      role: 'Ingeniero Catastral',
      subtitle: 'Tarifas CRA, Avalúos & Redes',
      phone: config.phoneCatastral,
      message: 'Hola Ing. Catastral SISCAT, me comunico para consultar sobre estudio de tarifas CRA / avalúos / catastro.',
      color: 'emerald',
      icon: <Compass className="w-4 h-4 text-emerald-600" />,
      badge: 'CRA & Avalúos',
    },
    {
      role: 'Contador Público',
      subtitle: 'Cargue SUI, NIIF & Finanzas',
      phone: config.phoneContabilidad,
      message: 'Hola Contador SISCAT, deseo asesoría técnica para el cargue de información al SUI / contabilidad.',
      color: 'amber',
      icon: <FileSpreadsheet className="w-4 h-4 text-amber-600" />,
      badge: 'SUI & Contable',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Popover Chat Selector */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden animate-in fade-in slide-in-from-bottom-4 transition duration-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">
                  Atención WhatsApp SISCAT
                </h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  Especialistas disponibles ahora
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Subtitle instructions */}
          <div className="p-3 bg-slate-50 border-b border-slate-100 text-xs text-slate-600">
            Selecciona el especialista con quien deseas chatear directamente:
          </div>

          {/* Channels list */}
          <div className="p-3 space-y-2">
            {channels.map((chan, idx) => (
              <a
                key={idx}
                href={`https://wa.me/${chan.phone}?text=${encodeURIComponent(chan.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 hover:border-emerald-300 hover:bg-emerald-50/50 transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 group-hover:bg-emerald-100 transition">
                    {chan.icon}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 transition">
                        {chan.role}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 block">
                      {chan.subtitle}
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition" />
              </a>
            ))}
          </div>

          {/* Footer note */}
          <div className="p-3 bg-slate-50/80 border-t border-slate-100 text-center">
            <span className="text-[11px] text-slate-400">
              Respuesta habitual: Menos de 15 minutos en horario hábil.
            </span>
          </div>

        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir WhatsApp"
        className="group relative flex items-center gap-2.5 px-4 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 text-[9px] font-bold text-emerald-950 items-center justify-center">
            3
          </span>
        </span>
        
        <MessageSquare className="w-6 h-6 fill-white" />
        <span className="text-xs font-bold tracking-wide pr-1">
          {isOpen ? 'Cerrar Chat' : '¿Necesitas Ayuda? WhatsApp'}
        </span>
      </button>

    </div>
  );
};
