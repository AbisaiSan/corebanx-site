import type { Lang } from './i18n';

interface Meta {
  title: string;
  description: string;
}

const pt = {
  home: {
    title: 'Corebanx — Infraestrutura financeira completa',
    description:
      'BaaS, core bancário, meios de pagamento e adquirência em uma única plataforma para bancos, fintechs, subadquirentes e varejo.',
  },
  produtos: {
    title: 'Produtos e Soluções',
    description:
      'Do core bancário à adquirência: núcleo bancário, trilhos de pagamento, soluções financeiras avançadas, white label e segurança.',
  },
  bancos: {
    title: 'Para Bancos',
    description:
      'Conecte novos produtos ao core que já existe, no ritmo do seu roadmap e sob as regras do regulador.',
  },
  quemSomos: {
    title: 'Quem Somos',
    description: 'Uma infratech construída por quem opera sistemas financeiros.',
  },
  cases: {
    title: 'Cases e Parceiros',
    description: 'Resultados construídos junto com nossos parceiros.',
  },
  contato: {
    title: 'Contato',
    description: 'Fale com um especialista Corebanx. Responderemos em até um dia útil.',
  },
};

const en: typeof pt = {
  home: {
    title: 'Corebanx — Complete financial infrastructure',
    description:
      'BaaS, core banking, payments and acquiring on a single platform for banks, fintechs, sub-acquirers and retail.',
  },
  produtos: {
    title: 'Products and Solutions',
    description:
      'From core banking to acquiring: core banking, payment rails, advanced financial solutions, white label and security.',
  },
  bancos: {
    title: 'For banks',
    description:
      "Connect new products to the core you already have, at the pace of your roadmap and under the regulator's rules.",
  },
  quemSomos: {
    title: 'About us',
    description: 'An infratech built by people who run financial systems.',
  },
  cases: {
    title: 'Cases and partners',
    description: 'Results built together with our partners.',
  },
  contato: {
    title: 'Contact',
    description: 'Talk to a Corebanx specialist. We reply within one business day.',
  },
};

export const seo = { pt, en };

export function metaFor(lang: Lang, key: keyof typeof pt): Meta {
  return seo[lang][key];
}
