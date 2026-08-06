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
