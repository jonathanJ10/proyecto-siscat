export type PartnerRole = 'sistemas' | 'catastral' | 'contabilidad';

export interface Partner {
  id: PartnerRole;
  title: string;
  profession: string;
  partnerName: string;
  shortDesc: string;
  badge: string;
  avatarIcon: string;
  accentColor: string; // Tailwind color name like 'blue', 'emerald', 'amber'
  bgGradient: string;
  email: string;
  phone: string;
  whatsappMessage: string;
  services: {
    title: string;
    description: string;
    features: string[];
    icon: string;
  }[];
  quoteOptions: {
    serviceTypes: string[];
    unitTypes: string[];
    estimatedTimes: string[];
  };
}

export interface QuoteFormData {
  partnerId: PartnerRole;
  clientName: string;
  companyName: string;
  email: string;
  phone: string;
  city: string;
  department: string;
  serviceType: string;
  specificRequirements: string;
  subscriberCount?: string;
  propertyType?: string;
  propertyArea?: string;
  providerType?: string;
  urgency: 'alta' | 'media' | 'planeacion';
  notes?: string;
}

export interface CompanyConfig {
  emailSistemas: string;
  phoneSistemas: string;
  emailCatastral: string;
  phoneCatastral: string;
  emailContabilidad: string;
  phoneContabilidad: string;
  generalPhone: string;
  generalEmail: string;
  address: string;
  hours: string;
  web3FormsKey?: string; // Optional free email service key
}
