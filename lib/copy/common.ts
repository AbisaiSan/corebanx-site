import { PATHS } from '../i18n';

/** Header, footer and CTA strings shared by every page. */

const pt = {
  brand: 'Corebanx',
  nav: {
    produtos: 'Produtos',
    solucoes: 'Soluções',
    quemSomos: 'Quem Somos',
    cases: 'Cases',
    contato: 'Contato',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    skipToContent: 'Ir para o conteúdo',
  },
  cta: {
    especialista: 'Fale com um especialista',
    solucoes: 'Conheça nossas soluções',
    nossoTime: 'Fale com nosso time',
    esteProduto: 'Fale sobre este produto',
    verProdutos: 'Ver produtos',
    todosProdutos: 'Ver todos os produtos →',
    saibaMais: 'Saiba mais →',
    contato: 'Entrar em contato',
    voltarProdutos: '← Produtos e Soluções',
  },
  segments: [
    { label: 'Para Bancos', desc: 'Novos produtos sobre o core que já existe.' },
    { label: 'Para Fintechs', desc: 'Licença, ledger e rails para lançar rápido.' },
    {
      label: 'Para Subadquirentes e Facilitadores',
      desc: 'Captura, split e liquidação sob a sua marca.',
    },
    { label: 'Para Varejo e E-commerce', desc: 'Pagamentos e conta integrados ao checkout.' },
  ],
  footer: {
    tagline: 'Infraestrutura financeira para bancos, fintechs, subadquirentes e varejo.',
    produtos: 'Produtos',
    solucoes: 'Soluções',
    empresa: 'Empresa',
    contato: 'Contato',
    produtoLinks: [
      { label: 'BaaS e Core Bancário', path: PATHS.produto('baas-core-bancario') },
      { label: 'Meios de Pagamento', path: PATHS.produto('trilhos-de-pagamento') },
      { label: 'Adquirência', path: PATHS.produto('integracao-de-cartoes') },
      { label: 'White Label', path: PATHS.produto('white-label') },
      { label: 'Segurança e Compliance', path: PATHS.produto('seguranca-e-compliance') },
    ],
    solucaoLinks: [
      'Para Bancos',
      'Para Fintechs',
      'Para Subadquirentes',
      'Para Varejo e E-commerce',
    ],
    empresaLinks: [
      { label: 'Quem Somos', path: PATHS.quemSomos },
      { label: 'Cases e Parceiros', path: PATHS.cases },
      { label: 'Trabalhe conosco', path: null },
      { label: 'Central de privacidade', path: null },
    ],
    email: 'comercial@corebanx.com.br',
    phone: '+55 11 0000-0000',
    address: ['Av. Placeholder, 1000', 'São Paulo, SP'],
    rights: '© 2026 Corebanx. Todos os direitos reservados.',
    terms: 'Termos de uso',
    privacy: 'Política de privacidade',
  },
};

const en: typeof pt = {
  brand: 'Corebanx',
  nav: {
    produtos: 'Products',
    solucoes: 'Solutions',
    quemSomos: 'About us',
    cases: 'Cases',
    contato: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skipToContent: 'Skip to content',
  },
  cta: {
    especialista: 'Talk to a specialist',
    solucoes: 'Explore our solutions',
    nossoTime: 'Talk to our team',
    esteProduto: 'Talk about this product',
    verProdutos: 'See products',
    todosProdutos: 'See all products →',
    saibaMais: 'Learn more →',
    contato: 'Get in touch',
    voltarProdutos: '← Products and Solutions',
  },
  segments: [
    { label: 'For banks', desc: 'New products on top of the core you already have.' },
    { label: 'For fintechs', desc: 'Licence, ledger and rails to launch fast.' },
    {
      label: 'For sub-acquirers and facilitators',
      desc: 'Capture, split and settlement under your brand.',
    },
    { label: 'For retail and e-commerce', desc: 'Payments and account integrated into checkout.' },
  ],
  footer: {
    tagline: 'Financial infrastructure for banks, fintechs, sub-acquirers and retail.',
    produtos: 'Products',
    solucoes: 'Solutions',
    empresa: 'Company',
    contato: 'Contact',
    produtoLinks: [
      { label: 'BaaS and Core Banking', path: PATHS.produto('baas-core-bancario') },
      { label: 'Payments', path: PATHS.produto('trilhos-de-pagamento') },
      { label: 'Acquiring', path: PATHS.produto('integracao-de-cartoes') },
      { label: 'White label', path: PATHS.produto('white-label') },
      { label: 'Security and Compliance', path: PATHS.produto('seguranca-e-compliance') },
    ],
    solucaoLinks: ['For banks', 'For fintechs', 'For sub-acquirers', 'For retail and e-commerce'],
    empresaLinks: [
      { label: 'About us', path: PATHS.quemSomos },
      { label: 'Cases and partners', path: PATHS.cases },
      { label: 'Careers', path: null },
      { label: 'Privacy center', path: null },
    ],
    email: 'comercial@corebanx.com.br',
    phone: '+55 11 0000-0000',
    address: ['Av. Placeholder, 1000', 'São Paulo, SP'],
    rights: '© 2026 Corebanx. All rights reserved.',
    terms: 'Terms of use',
    privacy: 'Privacy policy',
  },
};

export const common = { pt, en };
export type CommonCopy = typeof pt;
