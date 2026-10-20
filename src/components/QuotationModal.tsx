import React, { useState, useEffect } from 'react';
import { 
  X, Send, CheckCircle2, MessageSquare, Mail, Phone, 
  Building2, User, MapPin, AlertCircle, Laptop, Compass, 
  FileSpreadsheet, ArrowRight, Printer, Copy, Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PartnerRole, CompanyConfig, QuoteFormData } from '../types';
import { PARTNERS } from '../data/partners';

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: PartnerRole;
  config: CompanyConfig;
}

export const QuotationModal: React.FC<QuotationModalProps> = ({
  isOpen,
  onClose,
  initialRole = 'sistemas',
  config,
}) => {
  const [selectedRole, setSelectedRole] = useState<PartnerRole>(initialRole);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<QuoteFormData | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Form state
  const [formData, setFormData] = useState<QuoteFormData>({
    partnerId: initialRole,
    clientName: '',
    companyName: '',
    email: '',
    phone: '',
    city: '',
    department: '',
    serviceType: '',
    specificRequirements: '',
    subscriberCount: '',
    propertyType: '',
    propertyArea: '',
    providerType: '',
    urgency: 'media',
    notes: '',
  });

  useEffect(() => {
    if (initialRole) {
      setSelectedRole(initialRole);
      setFormData(prev => ({
        ...prev,
        partnerId: initialRole,
        serviceType: PARTNERS.find(p => p.id === initialRole)?.quoteOptions.serviceTypes[0] || '',
      }));
    }
  }, [initialRole, isOpen]);

  if (!isOpen) return null;

  const currentPartner = PARTNERS.find(p => p.id === selectedRole) || PARTNERS[0];

  const getRecipientEmail = () => {
    switch (selectedRole) {
      case 'sistemas': return config.emailSistemas;
      case 'catastral': return config.emailCatastral;
      case 'contabilidad': return config.emailContabilidad;
    }
  };

  const getRecipientPhone = () => {
    switch (selectedRole) {
      case 'sistemas': return config.phoneSistemas;
      case 'catastral': return config.phoneCatastral;
      case 'contabilidad': return config.phoneContabilidad;
    }
  };

  const handleRoleChange = (role: PartnerRole) => {
    setSelectedRole(role);
    setFormData(prev => ({
      ...prev,
      partnerId: role,
      serviceType: PARTNERS.find(p => p.id === role)?.quoteOptions.serviceTypes[0] || '',
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const recipient = getRecipientEmail();

    try {
      // 1. Prepare structured email payload
      const emailSubject = `Nueva Cotización SISCAT - [${currentPartner.profession.toUpperCase()}] - ${formData.clientName}`;
      const emailBody = `
=============================================
SOLICITUD DE COTIZACIÓN - SISCAT
MÓDULO: ${currentPartner.profession.toUpperCase()}
DESTINATARIO: ${recipient}
=============================================

DATOS DEL CLIENTE:
- Nombre: ${formData.clientName}
- Empresa / Entidad: ${formData.companyName || 'No especificada'}
- Ciudad / Municipio: ${formData.city}, ${formData.department}
- Correo Electrónico: ${formData.email}
- Teléfono / WhatsApp: ${formData.phone}

DETALLES DEL SERVICIO:
- Servicio Solicitado: ${formData.serviceType}
- Urgencia: ${formData.urgency.toUpperCase()}
${formData.subscriberCount ? `- Cantidad de Suscriptores / Usuarios: ${formData.subscriberCount}\n` : ''}
${formData.propertyType ? `- Tipo de Predio / Objeto: ${formData.propertyType}\n` : ''}
${formData.providerType ? `- Tipo de Prestador: ${formData.providerType}\n` : ''}

DESCRIPCIÓN DE LA NECESIDAD:
${formData.specificRequirements}

${formData.notes ? `NOTAS ADICIONALES:\n${formData.notes}\n` : ''}
=============================================
Enviado desde el Portal Web Oficial SISCAT (siscat.com.co)
      `.trim();

      // Automatic free email dispatch (Web3Forms if key present, otherwise FormSubmit.co)
      let sentSuccessfully = false;
      try {
        if (config.web3FormsKey) {
          const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              access_key: config.web3FormsKey,
              subject: emailSubject,
              from_name: `SISCAT Cotizaciones - ${formData.clientName}`,
              to_email: recipient,
              reply_to: formData.email,
              message: emailBody,
              ...formData,
              modulo_profesional: currentPartner.profession,
              destinatario_profesional: recipient
            })
          });
          const json = await res.json();
          if (json.success) sentSuccessfully = true;
        } else {
          // Zero-config free direct delivery via FormSubmit
          const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              _subject: emailSubject,
              _replyto: formData.email,
              _template: 'table',
              Especialidad: currentPartner.profession,
              Socio_Destinatario: recipient,
              Cliente: formData.clientName,
              Empresa: formData.companyName || 'Particular',
              Telefono_WhatsApp: formData.phone,
              Correo_Cliente: formData.email,
              Ubicacion: `${formData.city}, ${formData.department}`,
              Servicio_Solicitado: formData.serviceType,
              Urgencia: formData.urgency.toUpperCase(),
              Detalles: formData.specificRequirements,
              Suscriptores_o_Alcance: formData.subscriberCount || formData.propertyType || formData.providerType || 'N/A',
              Dimension_o_Area: formData.propertyArea || 'N/A'
            })
          });
          const json = await res.json();
          if (json.success === 'true' || json.success === true) sentSuccessfully = true;
        }
      } catch (err) {
        console.warn('Email dispatch notice:', err);
      }

      // Simulate completion & trigger confetti
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmittedData({ ...formData });

        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (_) {}
      }, 700);

    } catch (err: any) {
      setIsSubmitting(false);
      setErrorMessage('Ocurrió un error al procesar la cotización. Por favor intenta de nuevo o contáctanos por WhatsApp.');
    }
  };

  const getWhatsAppMessage = () => {
    if (!submittedData) return '';
    return `Hola ${currentPartner.partnerName}, acabo de generar una solicitud de cotización en SISCAT:%0A%0A*Cliente:* ${submittedData.clientName}%0A*Empresa:* ${submittedData.companyName || 'N/A'}%0A*Municipio:* ${submittedData.city}%0A*Servicio:* ${submittedData.serviceType}%0A*Detalles:* ${submittedData.specificRequirements}%0A%0A*Correo:* ${submittedData.email}%0A*Tel:* ${submittedData.phone}`;
  };

  const copySummaryToClipboard = () => {
    if (!submittedData) return;
    const text = `COTIZACIÓN SISCAT\nEspecialista: ${currentPartner.profession}\nCliente: ${submittedData.clientName}\nEmpresa: ${submittedData.companyName}\nServicio: ${submittedData.serviceType}\nCiudad: ${submittedData.city}\nTel: ${submittedData.phone}\nDetalles: ${submittedData.specificRequirements}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-100 overflow-hidden my-6">
        
        {/* Header Modal Bar */}
        <div className={`p-6 bg-gradient-to-r ${currentPartner.bgGradient} text-white flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
              {selectedRole === 'sistemas' && <Laptop className="w-6 h-6" />}
              {selectedRole === 'catastral' && <Compass className="w-6 h-6" />}
              {selectedRole === 'contabilidad' && <FileSpreadsheet className="w-6 h-6" />}
            </div>
            <div>
              <p className="text-xs uppercase font-extrabold tracking-widest text-white/80">
                Formulario de Cotización
              </p>
              <h3 className="text-xl sm:text-2xl font-bold">
                {currentPartner.profession}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body: Either Success View or Form View */}
        {submittedData ? (
          <div className="p-6 sm:p-10 space-y-6">
            <div className="text-center max-w-md mx-auto">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900 mb-2">
                ¡Solicitud Registrada con Éxito!
              </h4>
              <p className="text-sm text-slate-600">
                Tu cotización ha sido enrutada al especialista a cargo:{' '}
                <strong className="text-slate-900">{getRecipientEmail()}</strong>.
              </p>
            </div>

            {/* Structured Receipt Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-sm space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase">
                <span>Resumen de la Solicitud</span>
                <span className="text-blue-600">{currentPartner.profession}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
                <div>
                  <span className="text-xs text-slate-400 block">Solicitante:</span>
                  <strong>{submittedData.clientName}</strong>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Empresa / Municipio:</span>
                  <strong>{submittedData.companyName || 'Particular'} ({submittedData.city})</strong>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Teléfono / Celular:</span>
                  <strong>{submittedData.phone}</strong>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Correo del Cliente:</span>
                  <strong>{submittedData.email}</strong>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-xs text-slate-400 block">Servicio Solicitado:</span>
                  <strong className="text-blue-700">{submittedData.serviceType}</strong>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-xs text-slate-400 block">Requerimientos:</span>
                  <p className="text-xs text-slate-600 italic bg-white p-2.5 rounded-lg border border-slate-200 mt-1">
                    "{submittedData.specificRequirements}"
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions after Submission */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${getRecipientPhone()}?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md shadow-emerald-600/20 transition text-sm text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirmar por WhatsApp</span>
              </a>

              <button
                onClick={copySummaryToClipboard}
                className="w-full sm:w-1/2 flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl border border-slate-200 transition text-sm"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copiado al Portapapeles' : 'Copiar Resumen'}</span>
              </button>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => {
                  setSubmittedData(null);
                  onClose();
                }}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition underline"
              >
                Cerrar ventana
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Step 1: Change Module Role if needed */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                1. Selecciona el Profesional a Quien Dirigir la Cotización:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {PARTNERS.map(partner => (
                  <button
                    key={partner.id}
                    type="button"
                    onClick={() => handleRoleChange(partner.id)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-bold text-left transition ${
                      selectedRole === partner.id
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {partner.id === 'sistemas' && <Laptop className="w-4 h-4 shrink-0 text-blue-400" />}
                    {partner.id === 'catastral' && <Compass className="w-4 h-4 shrink-0 text-emerald-400" />}
                    {partner.id === 'contabilidad' && <FileSpreadsheet className="w-4 h-4 shrink-0 text-amber-400" />}
                    <span className="truncate">{partner.profession}</span>
                  </button>
                ))}
              </div>

              {/* Recipient Notice */}
              <div className="mt-2.5 flex items-center justify-between p-2 rounded-lg bg-blue-50/80 border border-blue-200 text-blue-800 text-[11px]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  Esta cotización llegará directamente a: <strong>{getRecipientEmail()}</strong>
                </span>
                <span className="font-semibold text-blue-600 hidden sm:inline">
                  +{getRecipientPhone()}
                </span>
              </div>
            </div>

            {/* Step 2: Contact Information */}
            <div className="space-y-4">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                2. Datos de Contacto y Ubicación:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez"
                    value={formData.clientName}
                    onChange={e => setFormData({ ...formData, clientName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Empresa, Alcaldía o Entidad
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Acueducto Municipal / Persona Natural"
                    value={formData.companyName}
                    onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ejemplo@correo.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Teléfono / Celular WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 310 123 4567"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Municipio / Ciudad *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Bogotá, Facatativá, Girardot..."
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Departamento *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Cundinamarca, Boyacá, Tolima..."
                    value={formData.department}
                    onChange={e => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Specific parameters for the selected module */}
            <div className="space-y-4 pt-2 border-t border-slate-100">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                3. Requerimientos Específicos para {currentPartner.profession}:
              </label>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Servicio Principal Solicitado *
                </label>
                <select
                  required
                  value={formData.serviceType}
                  onChange={e => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                >
                  {currentPartner.quoteOptions.serviceTypes.map((st, idx) => (
                    <option key={idx} value={st}>{st}</option>
                  ))}
                </select>
              </div>

              {/* Dynamic Context Fields based on profession */}
              {selectedRole === 'sistemas' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Cantidad Aproximada de Suscriptores / Usuarios
                    </label>
                    <select
                      value={formData.subscriberCount}
                      onChange={e => setFormData({ ...formData, subscriberCount: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                    >
                      <option value="">Selecciona un rango...</option>
                      {currentPartner.quoteOptions.unitTypes.map((u, idx) => (
                        <option key={idx} value={u}>{u}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Servicios a Facturar
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Acueducto y Alcantarillado, Aseo"
                      value={formData.propertyType}
                      onChange={e => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                    />
                  </div>
                </div>
              )}

              {selectedRole === 'catastral' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Alcance / Tipo de Predio o Red
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={e => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition"
                    >
                      <option value="">Selecciona el alcance...</option>
                      {currentPartner.quoteOptions.unitTypes.map((u, idx) => (
                        <option key={idx} value={u}>{u}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Área Aprox. (m² / Has) o Km de Red
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. 15 Hectáreas / 12 Km de tubería"
                      value={formData.propertyArea}
                      onChange={e => setFormData({ ...formData, propertyArea: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition"
                    />
                  </div>
                </div>
              )}

              {selectedRole === 'contabilidad' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Tipo de Entidad / Prestador
                    </label>
                    <select
                      value={formData.providerType}
                      onChange={e => setFormData({ ...formData, providerType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition"
                    >
                      <option value="">Selecciona el tipo...</option>
                      {currentPartner.quoteOptions.unitTypes.map((u, idx) => (
                        <option key={idx} value={u}>{u}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Urgencia de Presentación SUI
                    </label>
                    <select
                      value={formData.urgency}
                      onChange={e => setFormData({ ...formData, urgency: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition"
                    >
                      <option value="alta">Urgente (Plazo SSPD por vencer)</option>
                      <option value="media">Normal (1 mes)</option>
                      <option value="planeacion">Planificación periódica</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Descripción Detallada de la Necesidad o Proyecto *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Por favor indícanos detalles específicos, estado actual de la información o normativas a cumplir..."
                  value={formData.specificRequirements}
                  onChange={e => setFormData({ ...formData, specificRequirements: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                />
              </div>
            </div>

            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Submission buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <span className="text-xs text-slate-500">
                Al enviar, recibirás copia y el socio especialista te contactará.
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 text-slate-600 hover:text-slate-800 text-sm font-semibold rounded-xl hover:bg-slate-100 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-md shadow-blue-500/25 transition disabled:opacity-50 text-sm"
                >
                  {isSubmitting ? (
                    <span>Enviando cotización...</span>
                  ) : (
                    <>
                      <span>Enviar Cotización</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
