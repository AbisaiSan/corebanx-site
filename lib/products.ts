import type { IconName } from '@/components/Icons';
import type { Lang } from './i18n';

export type GroupId = 'nucleo' | 'pagamentos' | 'avancadas' | 'whitelabel' | 'seguranca';

export type IllustrationKey =
  | 'baas'
  | 'dashboard'
  | 'rails'
  | 'cards'
  | 'investments'
  | 'agreements'
  | 'billing'
  | 'whitelabel'
  | 'security'
  | 'antifraud'
  | 'regulatory'
  | 'sandbox';

interface GroupText {
  /** Group name, used as the section heading and the product page eyebrow. */
  name: string;
  /** One line under the group heading on the products index. */
  tagline: string;
  /** One line on the home page group card. */
  homeDesc: string;
}

interface ProductText {
  name: string;
  /** One line on the product cards and in the mega menu. */
  desc: string;
  /** Paragraph under the product title. */
  lead: string;
  checks: string[];
}

export interface Group {
  id: GroupId;
  icon: IconName;
  pt: GroupText;
  en: GroupText;
  es: GroupText;
}

export interface Product {
  slug: string;
  group: GroupId;
  icon: IconName;
  illustration: IllustrationKey;
  /** True when the illustration sits before the copy — the blocks alternate. */
  mediaFirst: boolean;
  pt: ProductText;
  en: ProductText;
  es: ProductText;
}

export const GROUPS: Group[] = [
  {
    id: 'nucleo',
    icon: 'square',
    pt: {
      name: 'Núcleo Bancário',
      tagline: 'Conta digital, ledger e gestão da operação em um só lugar.',
      homeDesc: 'Conta digital, core bancário, ledger e dashboard de gestão.',
    },
    en: {
      name: 'Core Banking',
      tagline: 'Digital account, ledger and operational management in one place.',
      homeDesc: 'Digital account, core banking, ledger and management dashboard.',
    },
    es: {
      name: 'Núcleo Bancario',
      tagline: 'Cuenta digital, ledger y gestión de la operación en un solo lugar.',
      homeDesc: 'Cuenta digital, core bancario, ledger y dashboard de gestión.',
    },
  },
  {
    id: 'pagamentos',
    icon: 'bars',
    pt: {
      name: 'Meios de Pagamento e Adquirência',
      tagline: 'Todos os trilhos e o programa de cartões na mesma camada.',
      homeDesc: 'Pix, TED, boleto, QR Code, COMPE e programa de cartões.',
    },
    en: {
      name: 'Payments and Acquiring',
      tagline: 'Every rail and the card programme in the same layer.',
      homeDesc: 'Pix, wires, boleto, QR Code, COMPE and card programme.',
    },
    es: {
      name: 'Medios de Pago y Adquirencia',
      tagline: 'Todos los rieles y el programa de tarjetas en la misma capa.',
      homeDesc: 'Pix, transferencias, boleto, QR Code, COMPE y programa de tarjetas.',
    },
  },
  {
    id: 'avancadas',
    icon: 'lines',
    pt: {
      name: 'Soluções Financeiras Avançadas',
      tagline: 'Produtos que ampliam a receita da conta digital.',
      homeDesc: 'Investimentos, convênios e cobrança na mesma conta.',
    },
    en: {
      name: 'Advanced Financial Solutions',
      tagline: "Products that expand the digital account's revenue.",
      homeDesc: 'Investments, agreements and billing in the same account.',
    },
    es: {
      name: 'Soluciones Financieras Avanzadas',
      tagline: 'Productos que amplían los ingresos de la cuenta digital.',
      homeDesc: 'Inversiones, convenios y cobranza en la misma cuenta.',
    },
  },
  {
    id: 'whitelabel',
    icon: 'diamond',
    pt: {
      name: 'White Label',
      tagline: 'A experiência é sua; a infraestrutura é nossa.',
      homeDesc: 'Sua marca na frente, nossa tecnologia por trás.',
    },
    en: {
      name: 'White label',
      tagline: 'The experience is yours; the infrastructure is ours.',
      homeDesc: 'Your brand up front, our technology behind it.',
    },
    es: {
      name: 'White Label',
      tagline: 'La experiencia es tuya; la infraestructura es nuestra.',
      homeDesc: 'Tu marca al frente, nuestra tecnología por detrás.',
    },
  },
  {
    id: 'seguranca',
    icon: 'circle',
    pt: {
      name: 'Segurança, Compliance e Testes',
      tagline: 'Do ambiente de testes ao reporte regulatório.',
      homeDesc: 'Antifraude, PLD, regulatório, criptografia e sandbox.',
    },
    en: {
      name: 'Security, Compliance and Testing',
      tagline: 'From the test environment to regulatory reporting.',
      homeDesc: 'Anti-fraud, AML, regulatory, encryption and sandbox.',
    },
    es: {
      name: 'Seguridad, Compliance y Pruebas',
      tagline: 'Del ambiente de pruebas al reporte regulatorio.',
      homeDesc: 'Antifraude, PLD, regulatorio, cifrado y sandbox.',
    },
  },
];

/** Order the five groups appear in on the home page grid, which differs from
 *  the order used on the products index. */
export const HOME_GROUP_ORDER: GroupId[] = [
  'nucleo',
  'pagamentos',
  'whitelabel',
  'avancadas',
  'seguranca',
];

export const PRODUCTS: Product[] = [
  {
    slug: 'baas-core-bancario',
    group: 'nucleo',
    icon: 'square',
    illustration: 'baas',
    mediaFirst: false,
    pt: {
      name: 'BaaS e Core Bancário',
      desc: 'Conta digital, ledger próprio e APIs REST.',
      lead: 'Conta digital com funções bancárias completas, ledger próprio e APIs REST para orquestrar tudo do seu lado.',
      checks: [
        'Conta digital com funções de banco',
        'Multiplataforma: app iOS e Android, internet banking, plataforma white label e APIs REST',
        'Conciliação bancária automatizada',
        'Transações globais com mensageria ISO 20022',
      ],
    },
    en: {
      name: 'BaaS and Core Banking',
      desc: 'Digital account, proprietary ledger and REST APIs.',
      lead: 'A digital account with full banking functions, a proprietary ledger and REST APIs to orchestrate everything on your side.',
      checks: [
        'Digital account with banking functions',
        'Multiplatform: iOS and Android apps, internet banking, white label platform and REST APIs',
        'Automated bank reconciliation',
        'Global transactions with ISO 20022 messaging',
      ],
    },
    es: {
      name: 'BaaS y Core Bancario',
      desc: 'Cuenta digital, ledger propio y APIs REST.',
      lead: 'Cuenta digital con funciones bancarias completas, ledger propio y APIs REST para orquestar todo desde tu lado.',
      checks: [
        'Cuenta digital con funciones de banco',
        'Multiplataforma: apps iOS y Android, internet banking, plataforma white label y APIs REST',
        'Conciliación bancaria automatizada',
        'Transacciones globales con mensajería ISO 20022',
      ],
    },
  },
  {
    slug: 'dashboard-de-gestao',
    group: 'nucleo',
    icon: 'lines',
    illustration: 'dashboard',
    mediaFirst: true,
    pt: {
      name: 'Dashboard de Gestão',
      desc: 'Saldos, transações e conciliação em tempo real.',
      lead: 'Painel único com visão em tempo real de saldos, transações, conciliação e indicadores operacionais.',
      checks: [
        'Saldos e transações em tempo real',
        'Status de conciliação por rail',
        'Indicadores operacionais e alertas',
        'Perfis de acesso por time',
      ],
    },
    en: {
      name: 'Management Dashboard',
      desc: 'Balances, transactions and reconciliation in real time.',
      lead: 'A single panel with a real-time view of balances, transactions, reconciliation and operational indicators.',
      checks: [
        'Balances and transactions in real time',
        'Reconciliation status per rail',
        'Operational indicators and alerts',
        'Access profiles per team',
      ],
    },
    es: {
      name: 'Dashboard de Gestión',
      desc: 'Saldos, transacciones y conciliación en tiempo real.',
      lead: 'Panel único con visión en tiempo real de saldos, transacciones, conciliación e indicadores operativos.',
      checks: [
        'Saldos y transacciones en tiempo real',
        'Estado de conciliación por riel',
        'Indicadores operativos y alertas',
        'Perfiles de acceso por equipo',
      ],
    },
  },
  {
    slug: 'trilhos-de-pagamento',
    group: 'pagamentos',
    icon: 'bars',
    illustration: 'rails',
    mediaFirst: true,
    pt: {
      name: 'Trilhos de Pagamento',
      desc: 'Pix, TED, boleto, QR Code e COMPE em uma camada.',
      lead: 'Receba, liquide e distribua valores por qualquer meio, com maquininhas e gateway integrados ao mesmo extrato.',
      checks: [
        'PIX, TED, boleto, cartão, QR Code e COMPE, com conectividade à Câmara de Compensação para liquidação interbancária',
        'Split de pagamento e cobrança recorrente',
        'Maquininhas e gateway sob a sua bandeira',
        'Conciliação unificada de todos os meios',
      ],
    },
    en: {
      name: 'Payment Rails',
      desc: 'Pix, wires, boleto, QR Code and COMPE in one layer.',
      lead: 'Receive, settle and distribute funds through any method, with terminals and gateway on the same statement.',
      checks: [
        'PIX, wires, boleto, card, QR Code and COMPE, with clearing-house connectivity for interbank settlement',
        'Payment split and recurring billing',
        'Terminals and gateway under your brand',
        'Unified reconciliation across all methods',
      ],
    },
    es: {
      name: 'Rieles de Pago',
      desc: 'Pix, transferencias, boleto, QR Code y COMPE en una capa.',
      lead: 'Recibe, liquida y distribuye montos por cualquier medio, con terminales y gateway integrados al mismo estado de cuenta.',
      checks: [
        'PIX, transferencias, boleto, tarjeta, QR Code y COMPE, con conectividad a la Cámara de Compensación para la liquidación interbancaria',
        'Split de pago y cobranza recurrente',
        'Terminales y gateway bajo tu marca',
        'Conciliación unificada de todos los medios',
      ],
    },
  },
  {
    slug: 'integracao-de-cartoes',
    group: 'pagamentos',
    icon: 'card',
    illustration: 'cards',
    mediaFirst: false,
    pt: {
      name: 'Integração de Cartões',
      desc: 'Emissão e processamento de crédito e débito.',
      lead: 'Cartões de crédito e débito, físicos e virtuais, com gestão completa do programa de cartões.',
      checks: [
        'Crédito e débito, físico e virtual',
        'Processamento e autorização em tempo real',
        'Gestão de limites, faturas e bloqueios',
        'Programa de cartões sob a sua marca',
      ],
    },
    en: {
      name: 'Card Integration',
      desc: 'Issuing and processing of credit and debit.',
      lead: 'Credit and debit cards, physical and virtual, with full management of the card programme.',
      checks: [
        'Credit and debit, physical and virtual',
        'Real-time processing and authorisation',
        'Management of limits, statements and blocks',
        'Card programme under your brand',
      ],
    },
    es: {
      name: 'Integración de Tarjetas',
      desc: 'Emisión y procesamiento de crédito y débito.',
      lead: 'Tarjetas de crédito y débito, físicas y virtuales, con gestión completa del programa de tarjetas.',
      checks: [
        'Crédito y débito, físico y virtual',
        'Procesamiento y autorización en tiempo real',
        'Gestión de límites, estados de cuenta y bloqueos',
        'Programa de tarjetas bajo tu marca',
      ],
    },
  },
  {
    slug: 'investimentos',
    group: 'avancadas',
    icon: 'growth',
    illustration: 'investments',
    mediaFirst: true,
    pt: {
      name: 'Investimentos',
      desc: 'Produtos de investimento dentro da conta digital.',
      lead: 'Acesso a produtos de investimento integrados diretamente à conta digital do cliente final.',
      checks: [
        'Aplicação e resgate sem sair do app',
        'Saldo de investimento no mesmo extrato',
        'Nova linha de receita para a instituição',
      ],
    },
    en: {
      name: 'Investments',
      desc: 'Investment products inside the digital account.',
      lead: "Access to investment products integrated directly into the end client's digital account.",
      checks: [
        'Invest and redeem without leaving the app',
        'Investment balance on the same statement',
        'A new revenue line for the institution',
      ],
    },
    es: {
      name: 'Inversiones',
      desc: 'Productos de inversión dentro de la cuenta digital.',
      lead: 'Acceso a productos de inversión integrados directamente a la cuenta digital del cliente final.',
      checks: [
        'Invierte y rescata sin salir de la app',
        'Saldo de inversión en el mismo estado de cuenta',
        'Una nueva línea de ingresos para la institución',
      ],
    },
  },
  {
    slug: 'convenios',
    group: 'avancadas',
    icon: 'circles',
    illustration: 'agreements',
    mediaFirst: false,
    pt: {
      name: 'Convênios',
      desc: 'Arranjos entre instituições com regra própria.',
      lead: 'Gestão de convênios e arranjos entre instituições, com regras e conciliação próprias.',
      checks: [
        'Regras de rateio e tarifas por convênio',
        'Conciliação dedicada por participante',
        'Trilha de auditoria de cada acordo',
      ],
    },
    en: {
      name: 'Agreements',
      desc: 'Arrangements between institutions with their own rules.',
      lead: 'Management of agreements and arrangements between institutions, with dedicated rules and reconciliation.',
      checks: [
        'Split rules and fees per agreement',
        'Dedicated reconciliation per participant',
        'Audit trail for every agreement',
      ],
    },
    es: {
      name: 'Convenios',
      desc: 'Acuerdos entre instituciones con reglas propias.',
      lead: 'Gestión de convenios y acuerdos entre instituciones, con reglas y conciliación propias.',
      checks: [
        'Reglas de reparto y tarifas por convenio',
        'Conciliación dedicada por participante',
        'Traza de auditoría de cada acuerdo',
      ],
    },
  },
  {
    slug: 'cobranca',
    group: 'avancadas',
    icon: 'barcode',
    illustration: 'billing',
    mediaFirst: true,
    pt: {
      name: 'Cobrança',
      desc: 'Boletos, carnês e recorrência em um painel.',
      lead: 'Boletos, carnês e cobrança recorrente com baixa automática e visão consolidada.',
      checks: [
        'Boletos, carnês e recorrência',
        'Baixa automática e reconciliação',
        'Régua de cobrança configurável',
      ],
    },
    en: {
      name: 'Billing',
      desc: 'Boletos, payment books and recurring billing on one panel.',
      lead: 'Boletos, payment books and recurring billing with automatic settlement and a consolidated view.',
      checks: [
        'Boletos, payment books and recurring billing',
        'Automatic settlement and reconciliation',
        'Configurable dunning schedule',
      ],
    },
    es: {
      name: 'Cobranza',
      desc: 'Boletos, planes de pago y recurrencia en un panel.',
      lead: 'Boletos, planes de pago y cobranza recurrente con baja automática y visión consolidada.',
      checks: [
        'Boletos, planes de pago y recurrencia',
        'Baja automática y reconciliación',
        'Secuencia de cobranza configurable',
      ],
    },
  },
  {
    slug: 'white-label',
    group: 'whitelabel',
    icon: 'diamond',
    illustration: 'whitelabel',
    mediaFirst: false,
    pt: {
      name: 'White Label',
      desc: 'Sua marca na frente, nossa tecnologia por trás.',
      lead: 'App, internet banking e painéis administrativos personalizados na sua identidade visual, publicados nas lojas com o seu nome.',
      checks: [
        'Personalização completa de app e internet banking',
        'Publicação nas lojas com a sua marca',
        'Backoffice para times de operação e atendimento',
        'Evolução contínua sem esforço do seu time',
      ],
    },
    en: {
      name: 'White label',
      desc: 'Your brand up front, our technology behind it.',
      lead: 'App, internet banking and admin panels customised to your visual identity, published in the stores under your name.',
      checks: [
        'Full customisation of app and internet banking',
        'Store publishing under your brand',
        'Back office for operations and support teams',
        'Continuous evolution with no effort from your team',
      ],
    },
    es: {
      name: 'White Label',
      desc: 'Tu marca al frente, nuestra tecnología por detrás.',
      lead: 'App, internet banking y paneles administrativos personalizados con tu identidad visual, publicados en las tiendas con tu nombre.',
      checks: [
        'Personalización completa de app e internet banking',
        'Publicación en las tiendas con tu marca',
        'Backoffice para equipos de operación y atención',
        'Evolución continua sin esfuerzo de tu equipo',
      ],
    },
  },
  {
    slug: 'seguranca-e-compliance',
    group: 'seguranca',
    icon: 'circle',
    illustration: 'security',
    mediaFirst: true,
    pt: {
      name: 'Segurança e Compliance',
      desc: 'Biometria, criptografia e geolocalização.',
      lead: 'Cada operação passa por verificação de identidade e contexto antes de ser liquidada.',
      checks: [
        'Infraestrutura protegida e monitorada 24/7',
        'Biometria e geolocalização por transação',
        'Criptografia de dados e gestão de chaves',
        'Trilha de auditoria de cada operação',
      ],
    },
    en: {
      name: 'Security and Compliance',
      desc: 'Biometrics, encryption and geolocation.',
      lead: 'Every operation goes through identity and context checks before settlement.',
      checks: [
        'Protected infrastructure monitored 24/7',
        'Biometrics and geolocation per transaction',
        'Data encryption and key management',
        'Audit trail for every operation',
      ],
    },
    es: {
      name: 'Seguridad y Compliance',
      desc: 'Biometría, cifrado y geolocalización.',
      lead: 'Cada operación pasa por una verificación de identidad y contexto antes de ser liquidada.',
      checks: [
        'Infraestructura protegida y monitoreada 24/7',
        'Biometría y geolocalización por transacción',
        'Cifrado de datos y gestión de llaves',
        'Traza de auditoría de cada operación',
      ],
    },
  },
  {
    slug: 'antifraude-e-pld',
    group: 'seguranca',
    icon: 'diamond',
    illustration: 'antifraud',
    mediaFirst: false,
    pt: {
      name: 'Antifraude e PLD',
      desc: 'Scoring em tempo real, KYC contínuo e bloqueio.',
      lead: 'Monitoramento antifraude em tempo real e motor de Prevenção à Lavagem de Dinheiro na mesma camada.',
      checks: [
        'Scoring de risco por transação, em tempo real',
        'Bloqueio automático de operações suspeitas',
        'KYC contínuo e monitoramento de transações atípicas',
        'Geração de reportes regulatórios',
      ],
    },
    en: {
      name: 'Anti-fraud and AML',
      desc: 'Real-time scoring, continuous KYC and blocking.',
      lead: 'Real-time anti-fraud monitoring and an anti-money-laundering engine in the same layer.',
      checks: [
        'Real-time risk scoring per transaction',
        'Automatic blocking of suspicious operations',
        'Continuous KYC and monitoring of atypical transactions',
        'Regulatory report generation',
      ],
    },
    es: {
      name: 'Antifraude y PLD',
      desc: 'Scoring en tiempo real, KYC continuo y bloqueo.',
      lead: 'Monitoreo antifraude en tiempo real y motor de Prevención de Lavado de Dinero en la misma capa.',
      checks: [
        'Scoring de riesgo por transacción, en tiempo real',
        'Bloqueo automático de operaciones sospechosas',
        'KYC continuo y monitoreo de transacciones atípicas',
        'Generación de reportes regulatorios',
      ],
    },
  },
  {
    slug: 'regulatorio',
    group: 'seguranca',
    icon: 'doc',
    illustration: 'regulatory',
    mediaFirst: false,
    pt: {
      name: 'Regulatório',
      desc: 'CADOCs, COSIF, FGC, e-Financeira e mais.',
      lead: 'Geração e envio de CADOCs ao BACEN, integração com FGC, e-Financeira, COSIF, Bloqueio Judicial, SIMBA e BC Correios, cobrindo as obrigações exigidas pelo Banco Central e demais órgãos.',
      checks: [
        'Geração e envio de CADOCs ao BACEN',
        'Integração com FGC, e-Financeira e COSIF',
        'Bloqueio Judicial, SIMBA e BC Correios atendidos',
        'Calendário de envios e trilha de cada remessa',
      ],
    },
    en: {
      name: 'Regulatory',
      desc: 'CADOCs, COSIF, FGC, e-Financeira and more.',
      lead: 'Generation and filing of CADOCs to the Brazilian Central Bank, plus integration with FGC, e-Financeira, COSIF, judicial blocking, SIMBA and BC Correios, covering the obligations required by the Central Bank and other authorities.',
      checks: [
        'Generation and filing of CADOCs to the Central Bank',
        'Integration with FGC, e-Financeira and COSIF',
        'Judicial blocking, SIMBA and BC Correios covered',
        'Filing calendar and an audit trail for every submission',
      ],
    },
    es: {
      name: 'Regulatorio',
      desc: 'CADOCs, COSIF, FGC, e-Financeira y más.',
      lead: 'Generación y envío de CADOCs al BACEN, integración con FGC, e-Financeira, COSIF, Bloqueo Judicial, SIMBA y BC Correios, cubriendo las obligaciones exigidas por el Banco Central y demás organismos.',
      checks: [
        'Generación y envío de CADOCs al BACEN',
        'Integración con FGC, e-Financeira y COSIF',
        'Bloqueo Judicial, SIMBA y BC Correios atendidos',
        'Calendario de envíos y traza de cada remesa',
      ],
    },
  },
  {
    slug: 'sandbox',
    group: 'seguranca',
    icon: 'dashed',
    illustration: 'sandbox',
    mediaFirst: true,
    pt: {
      name: 'Sandbox para Testes',
      desc: 'Ambiente gratuito, sem cartão de crédito.',
      lead: 'Ambiente de testes gratuito, sem cartão de crédito, para integrar e validar a solução com o seu time técnico.',
      checks: [
        'Chaves de teste e dados fictícios',
        'Mesma API do ambiente de produção',
        'Sem cartão de crédito e sem compromisso',
      ],
    },
    en: {
      name: 'Testing Sandbox',
      desc: 'Free environment, no credit card.',
      lead: 'A free test environment, no credit card required, to integrate and validate the solution with your technical team.',
      checks: [
        'Test keys and fictitious data',
        'The same API as the production environment',
        'No credit card and no commitment',
      ],
    },
    es: {
      name: 'Sandbox para Pruebas',
      desc: 'Ambiente gratuito, sin tarjeta de crédito.',
      lead: 'Ambiente de pruebas gratuito, sin tarjeta de crédito, para integrar y validar la solución con tu equipo técnico.',
      checks: [
        'Llaves de prueba y datos ficticios',
        'La misma API del ambiente de producción',
        'Sin tarjeta de crédito y sin compromiso',
      ],
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productsOfGroup(id: GroupId): Product[] {
  return PRODUCTS.filter((p) => p.group === id);
}

export function getGroup(id: GroupId): Group {
  const group = GROUPS.find((g) => g.id === id);
  if (!group) throw new Error(`Unknown product group: ${id}`);
  return group;
}

export function productText(product: Product, lang: Lang): ProductText {
  return product[lang];
}

export function groupText(group: Group, lang: Lang): GroupText {
  return group[lang];
}
