import { Partner, CompanyConfig } from '../types';

export const DEFAULT_CONFIG: CompanyConfig = {
  emailSistemas: 'sistemas@siscat.com.co',
  phoneSistemas: '573224278578',
  emailCatastral: 'catastro@siscat.com.co',
  phoneCatastral: '573102009970',
  emailContabilidad: 'contabilidad@siscat.com.co',
  phoneContabilidad: '573224278578',
  generalPhone: '573224278578',
  generalEmail: 'siscat@siscat.com.co',
  address: 'Bogotá D.C., Colombia - Cobertura Nacional',
  hours: 'Lunes a Viernes: 8:00 a.m. a 5:00 p.m.',
  web3FormsKey: '', // Users can drop their free Web3Forms token here or use default simulation
};

export const PARTNERS: Partner[] = [
  {
    id: 'sistemas',
    title: 'Módulo de Tecnología & Sistemas',
    profession: 'Ingeniería de Sistemas & Software',
    partnerName: 'Ingeniero de Sistemas Especialista',
    shortDesc: 'Automatización, software de facturación para servicios públicos domiciliarios (AQUARIUS) y soluciones Cloud.',
    badge: 'Transformación Digital & Facturación',
    avatarIcon: 'Cpu',
    accentColor: 'blue',
    bgGradient: 'from-blue-600 to-indigo-700',
    email: DEFAULT_CONFIG.emailSistemas,
    phone: DEFAULT_CONFIG.phoneSistemas,
    whatsappMessage: 'Hola Ing. de Sistemas SISCAT, requiero información y cotización sobre soluciones de software y facturación para servicios públicos.',
    services: [
      {
        title: 'Sistema de Facturación AQUARIUS',
        description: 'Plataforma líder para facturación de Acueducto, Alcantarillado, Aseo y Energía con cumplimiento de las normativas de la SSPD.',
        features: [
          'Toma de lecturas móviles con terminales portátiles PDA y Android',
          'Análisis riguroso de consumos críticos, desvíos y promedios',
          'Liquidación automática con subsidios y contribuciones por estrato',
          'Impresión masiva de facturas con código de barras GS1-128',
          'Módulo de reclamos (PQR), cortes, reconexiones y acuerdos de pago',
          'Integración con pasarelas de pago electrónico (PSE, Wompi) y bancos'
        ],
        icon: 'Server'
      },
      {
        title: 'Desarrollo de Software a la Medida',
        description: 'Construcción de portales para usuarios, aplicaciones móviles para cuadrillas de campo y tableros BI.',
        features: [
          'Portal web de consulta de factura y descarga de duplicados',
          'Apps móviles para operarios de fontanería y mantenimiento de redes',
          'Dashboards ejecutivos de recaudo, cartera e indicadores de gestión',
          'Seguridad de la información y copias de seguridad automáticas en la nube'
        ],
        icon: 'Code'
      },
      {
        title: 'Infraestructura Cloud, Redes & Soporte TI',
        description: 'Garantizamos la disponibilidad 24/7 y la seguridad perimetral de los sistemas informáticos de su empresa.',
        features: [
          'Configuración de servidores dedicados y bases de datos seguras',
          'Planes de contingencia y recuperación ante desastres (DRP)',
          'Soporte técnico preferencial remoto y presencial',
          'Capacitación continua para el personal operativo y administrativo'
        ],
        icon: 'ShieldCheck'
      }
    ],
    quoteOptions: {
      serviceTypes: [
        'Implementación Software de Facturación AQUARIUS',
        'Licenciamiento y Equipamiento para Lecturas PDA',
        'Desarrollo de Portal Web de Usuarios y Pagos PSE',
        'Mantenimiento, Soporte Técnico e Infraestructura TI',
        'Migración de Datos y Capacitación Empresarial'
      ],
      unitTypes: [
        'Menos de 1.000 suscriptores (Microempresa / Comunitario)',
        '1.000 a 5.000 suscriptores (Mediana empresa)',
        '5.000 a 20.000 suscriptores (Gran prestador)',
        'Más de 20.000 suscriptores (Municipal / Departamental)'
      ],
      estimatedTimes: [
        'Inmediato (1 a 15 días)',
        '1 a 2 meses',
        'Fase de planeación / Proyección'
      ]
    }
  },
  {
    id: 'catastral',
    title: 'Módulo Catastral, Tarifario & GIS',
    profession: 'Ingeniería Catastral & Geodesia',
    partnerName: 'Ingeniero Catastral & Geodesta',
    shortDesc: 'Estudios de Costos y Tarifas CRA, Avalúos certificados y Georreferenciación de redes de acueducto y alcantarillado.',
    badge: 'Territorio, Tarifas CRA & Avalúos',
    avatarIcon: 'MapPin',
    accentColor: 'emerald',
    bgGradient: 'from-emerald-600 to-teal-700',
    email: DEFAULT_CONFIG.emailCatastral,
    phone: DEFAULT_CONFIG.phoneCatastral,
    whatsappMessage: 'Hola Ing. Catastral SISCAT, me gustaría solicitar una cotización para un estudio de tarifas CRA / catastro de redes / avalúo.',
    services: [
      {
        title: 'Estudios de Costos y Tarifas CRA',
        description: 'Formulación y actualización tarifaria de acuerdo a las resoluciones expedidas por la Comisión de Regulación de Agua Potable y Saneamiento Básico.',
        features: [
          'Aplicación de Resoluciones CRA 825 de 2017 y CRA 943 de 2020',
          'Cálculo de Costo Medio de Administración (CMA) y de Operación (CMO)',
          'Cálculo de Costo Medio de Inversión (CMI) y Tasas Ambientales',
          'Determinación de tarifas de Acueducto, Alcantarillado y Aseo',
          'Elaboración del documento técnico soporte para aprobación ante Concejo/Junta',
          'Socialización a usuarios y defensa técnica ante requerimientos CRA'
        ],
        icon: 'BarChart3'
      },
      {
        title: 'Catastro y Georreferenciación de Redes',
        description: 'Levantamiento geodésico y mapeo en sistemas GIS de las redes matrices, válvulas, hidrantes y acometidas de usuarios.',
        features: [
          'Levantamiento de infraestructura con equipos GNSS/GPS de precisión submétrica',
          'Censo catastral técnico de usuarios y suscriptores georreferenciados',
          'Modelación hidráulica preliminar y detección de pérdidas técnicas',
          'Entrega de Geodatabase y visualizador cartográfico digital interactivo'
        ],
        icon: 'Compass'
      },
      {
        title: 'Avalúos Comerciales, Rurales & Maquinaria',
        description: 'Peritajes valorativos oficiales conforme al Registro Abierto de Avaluadores (RAA) y normatividad nacional vigente.',
        features: [
          'Avalúos de terrenos, fincas, lotes rurales y predios urbanos',
          'Valoración técnica de plantas de tratamiento (PTAP / PTAR)',
          'Avalúos de maquinaria pesada, vehículos y equipos electromecánicos',
          'Informes periciales para trámites bancarios, notariales y garantías'
        ],
        icon: 'Layers'
      }
    ],
    quoteOptions: {
      serviceTypes: [
        'Estudio de Tarifas CRA (Acueducto, Alcantarillado y Aseo)',
        'Actualización Catastral de Redes e Infraestructura',
        'Censo y Georreferenciación de Usuarios / Suscriptores',
        'Avalúo Comercial de Predios, Terrenos o Fincas',
        'Avalúo de Maquinaria, Equipo y Plantas de Tratamiento',
        'Levantamiento Topográfico / Geodésico Especializado'
      ],
      unitTypes: [
        'Predio / Inmueble individual',
        'Red municipal / urbana (< 25 km)',
        'Red extensa / interveredal (> 25 km)',
        'Planta de Tratamiento / Estación de Bombeo',
        'Municipio completo / Empresa Prestadora'
      ],
      estimatedTimes: [
        'Urgente (Requerimiento CRA / SSPD)',
        'Normal (1 mes)',
        'Planeación anual'
      ]
    }
  },
  {
    id: 'contabilidad',
    title: 'Módulo Financiero, SUI & Auditoría',
    profession: 'Contaduría Pública & Finanzas',
    partnerName: 'Contador Público Especialista',
    shortDesc: 'Cargue normativo al SUI de la SuperServicios, estados financieros NIIF y fortalecimiento empresarial.',
    badge: 'Regulación SSPD, SUI & Contabilidad',
    avatarIcon: 'FileSpreadsheet',
    accentColor: 'amber',
    bgGradient: 'from-amber-600 to-orange-700',
    email: DEFAULT_CONFIG.emailContabilidad,
    phone: DEFAULT_CONFIG.phoneContabilidad,
    whatsappMessage: 'Hola Contador Público SISCAT, requiero asesoría y cotización para el cargue al SUI / contabilidad de servicios públicos.',
    services: [
      {
        title: 'Validación y Cargue al SUI (SuperServicios)',
        description: 'Cumplimiento oportuno en el cargue de información comercial, técnica y financiera al Sistema Único de Información (SUI) de la SSPD.',
        features: [
          'Cargue de formatos de Acueducto, Alcantarillado y Aseo sin inconsistencias',
          'Reporte de tarifas aplicadas, subsidios y contribuciones territoriales',
          'Cargue del Formato Único de Información Financiera (FUIF)',
          'Saneamiento de formatos rechazados y respuesta a requerimientos de la SSPD',
          'Garantía de cumplimiento para evitar multas y procesos sancionatorios'
        ],
        icon: 'CheckCircle2'
      },
      {
        title: 'Contabilidad NIIF para Empresas de Servicios Públicos',
        description: 'Asesoría contable integral adaptada a la naturaleza de empresas oficiales, mixtas, privadas y organizaciones comunitarias.',
        features: [
          'Implementación de marcos normativos contables NIIF Plenas y NIIF Pymes',
          'Preparación de Estados Financieros con notas y revelaciones completas',
          'Liquidación y presentación de obligaciones tributarias (DIAN y Municipales)',
          'Conciliaciones contables entre facturación comercial y recaudo real'
        ],
        icon: 'Calculator'
      },
      {
        title: 'Fortalecimiento Institucional & Auditoría',
        description: 'Revisión técnica de procesos, manuales de funciones y saneamiento de cartera para la sostenibilidad de la empresa.',
        features: [
          'Diseño de planes de gestión y resultados ante la Superservicios',
          'Auditoría e interventoría financiera y operativa independiente',
          'Estructuración de costos operacionales y presupuestos anuales',
          'Acompañamiento en la rendición de cuentas a juntas directivas y concejos'
        ],
        icon: 'TrendingUp'
      }
    ],
    quoteOptions: {
      serviceTypes: [
        'Cargue Periódico de Formatos al SUI (Mensual / Trimestral / Anual)',
        'Saneamiento de Reportes SUI Atrasados y Respuesta a Requerimientos',
        'Contabilidad Integral NIIF para Empresas de Servicios Públicos',
        'Asesoría Tributaria y Revisoría Fiscal Especializada',
        'Fortalecimiento Institucional y Estructuración Financiera',
        'Auditoría e Interventoría Contable'
      ],
      unitTypes: [
        'Acueducto Comunitario / Asociación de Usuarios',
        'Empresa Municipal Oficial o Mixta',
        'Empresa Privada de Servicios Públicos',
        'Alcaldía Municipal / Ente Territorial'
      ],
      estimatedTimes: [
        'Cargue inmediato (Plazo SUI próximo a vencer)',
        'Acompañamiento mensual recurrente',
        'Auditoría o saneamiento puntual'
      ]
    }
  }
];

export const GENERAL_SERVICES = [
  {
    id: 'aquarius',
    title: 'AQUARIUS Facturación',
    partnerRole: 'sistemas',
    image: '/pda.jpg',
    tag: 'Tecnología',
    desc: 'Sistema robusto para toma de lecturas (PDA móvil o papel), liquidación de consumos, impresión de recibos, PQR, control de cortes y recaudos.',
  },
  {
    id: 'sui',
    title: 'Cargue al SUI SuperServicios',
    partnerRole: 'contabilidad',
    image: '/sui-300x68.png',
    tag: 'Regulatorio',
    desc: 'Validación y cargue de los formatos de Acueducto, Alcantarillado y Aseo al Sistema Único de Información de la SSPD según la normatividad vigente.',
  },
  {
    id: 'tarifas-cra',
    title: 'Estudio de Tarifas CRA',
    partnerRole: 'catastral',
    image: '/taseo.jpg',
    tag: 'Tarifario',
    desc: 'Estudio de costos y tarifas para Agua Potable, Alcantarillado y Aseo de acuerdo a las resoluciones expedidas por la Comisión de Regulación (CRA).',
  },
  {
    id: 'avaluos',
    title: 'Avalúos Certificados',
    partnerRole: 'catastral',
    image: '/avaluos-300x163.jpg',
    tag: 'Catastro',
    desc: 'Avalúos comerciales de terrenos, fincas, casas, predios, servidumbres, plantas de tratamiento y maquinaria/equipos según normas RAA.',
  },
  {
    id: 'fortalecimiento',
    title: 'Fortalecimiento Empresarial',
    partnerRole: 'contabilidad',
    image: '',
    tag: 'Gestión',
    desc: 'Diagnóstico institucional, modernización administrativa, auditoría e interventoría financiera para garantizar la viabilidad a largo plazo.',
  }
];
