import React, { useState } from 'react';
import { X, Save, Settings, Mail, Phone, Key, CheckCircle, Info } from 'lucide-react';
import { CompanyConfig } from '../types';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: CompanyConfig;
  onSaveConfig: (newConfig: CompanyConfig) => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
}) => {
  const [formData, setFormData] = useState<CompanyConfig>({ ...config });
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-100 overflow-hidden my-6">
        
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/30 text-blue-400">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">
                Configuración de Correos y Teléfonos de los 3 Socios
              </h3>
              <p className="text-xs text-slate-400">
                Personaliza los correos de destino y números de WhatsApp para cada módulo
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          
          <div className="p-3.5 bg-blue-50 rounded-2xl border border-blue-100 text-xs text-blue-800 flex items-start gap-2.5">
            <Info className="w-4 h-4 shrink-0 text-blue-600 mt-0.5" />
            <p>
              Cuando un cliente ingrese al módulo y envíe una cotización, la información se enviará automáticamente a la dirección de correo configurada para esa especialidad.
            </p>
          </div>

          {/* Partner 1: Sistemas */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold text-blue-700 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              1. Socio: Ingeniero de Sistemas (AQUARIUS & TI)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  Correo Electrónico de Destino
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={formData.emailSistemas}
                    onChange={e => setFormData({ ...formData, emailSistemas: e.target.value })}
                    className="w-full pl-8 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  WhatsApp (con prefijo país, ej. 573224278578)
                </label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.phoneSistemas}
                    onChange={e => setFormData({ ...formData, phoneSistemas: e.target.value })}
                    className="w-full pl-8 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Partner 2: Catastro */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              2. Socio: Ingeniero Catastral (Tarifas CRA & Avalúos)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  Correo Electrónico de Destino
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={formData.emailCatastral}
                    onChange={e => setFormData({ ...formData, emailCatastral: e.target.value })}
                    className="w-full pl-8 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  WhatsApp (ej. 573102009970)
                </label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.phoneCatastral}
                    onChange={e => setFormData({ ...formData, phoneCatastral: e.target.value })}
                    className="w-full pl-8 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Partner 3: Contabilidad */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold text-amber-700 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              3. Socio: Contador Público (Cargue SUI & Estados NIIF)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  Correo Electrónico de Destino
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={formData.emailContabilidad}
                    onChange={e => setFormData({ ...formData, emailContabilidad: e.target.value })}
                    className="w-full pl-8 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  WhatsApp (ej. 573224278578)
                </label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.phoneContabilidad}
                    onChange={e => setFormData({ ...formData, phoneContabilidad: e.target.value })}
                    className="w-full pl-8 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Web3Forms Token (Free email gateway) */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-bold text-slate-700">
                Clave de Envío de Correo Web3Forms (100% Gratuito):
              </label>
              <a 
                href="https://web3forms.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-[11px] text-blue-600 hover:underline font-semibold"
              >
                Obtener Access Key Gratis
              </a>
            </div>
            <div className="relative">
              <Key className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Pega aquí tu clave gratuita de Web3Forms para activar el envío directo de correo"
                value={formData.web3FormsKey || ''}
                onChange={e => setFormData({ ...formData, web3FormsKey: e.target.value })}
                className="w-full pl-8 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-mono focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Opcional: Si lo dejas vacío, el sistema generará el recibo digital con botón para reenviar por WhatsApp y copia al correo de forma asistida.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-between pt-2">
            {savedSuccess ? (
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                ¡Cambios guardados con éxito!
              </span>
            ) : (
              <span className="text-xs text-slate-400">
                Los cambios se guardan localmente en tu navegador.
              </span>
            )}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 rounded-xl hover:bg-slate-100 transition"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-sm transition"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Guardar Configuración</span>
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
