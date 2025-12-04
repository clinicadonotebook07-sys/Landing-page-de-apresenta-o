import { NicheSchema, ABVariant, PortfolioItem, Testimonial } from './types';

// A/B Testing Variants
export const VARIANTS: Record<'A' | 'B', ABVariant> = {
  A: {
    headline: "Tenha um site profissional que realmente converte.",
    ctaPrimary: "Agendar Consultoria"
  },
  B: {
    headline: "Seu site, projetado para atrair clientes.",
    ctaPrimary: "Começar Projeto"
  }
};

// Niche Schemas for the Dynamic Form
export const NICHE_SCHEMAS: NicheSchema[] = [
  {
    id: "general",
    title: "Geral / Outros",
    description: "Para projetos personalizados de qualquer natureza.",
    fields: [
      { name: "Nome do Projeto", type: "string", required: true },
      { name: "Orçamento Estimado", type: "select", required: true, options: ["R$ 2k - 5k", "R$ 5k - 10k", "R$ 10k+"] }
    ]
  },
  {
    id: "lawyer",
    title: "Advogados / Jurídico",
    description: "Foco em confiança, compliance e autoridade.",
    fields: [
      { name: "Número OAB (Principal)", type: "string", required: true },
      { name: "Áreas de Atuação", type: "array", required: true, options: ["Civil", "Trabalhista", "Criminal", "Tributário", "Família"] }
    ]
  },
  {
    id: "health",
    title: "Clínicas / Saúde",
    description: "Foco em agendamento de pacientes e convênios.",
    fields: [
      { name: "Especialidades", type: "string", required: true },
      { name: "Aceita Convênios?", type: "select", required: true, options: ["Sim", "Não", "Apenas Reembolso"] }
    ]
  },
  {
    id: "ecommerce",
    title: "E-commerce / Loja",
    description: "Foco em vendas, catálogo e checkout.",
    fields: [
      { name: "Nicho de Produtos", type: "string", required: true },
      { name: "Número de SKUs (Estimado)", type: "select", required: true, options: ["< 50", "50 - 500", "500+"] }
    ]
  },
  {
    id: "saas",
    title: "SaaS / B2B",
    description: "Foco em demos, pricing e integrações.",
    fields: [
      { name: "Modelo de Negócio", type: "string", required: true },
      { name: "Possui API Documentada?", type: "select", required: true, options: ["Sim", "Em desenvolvimento", "Não"] }
    ]
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 1,
    title: "FinTech Prime",
    category: "SaaS / B2B",
    image: "https://picsum.photos/id/1/800/600",
    description: "Plataforma de gestão financeira com dashboard em tempo real.",
    metrics: "+140% de conversão em leads"
  },
  {
    id: 2,
    title: "Dr. Ricardo Silva",
    category: "Saúde",
    image: "https://picsum.photos/id/180/800/600",
    description: "Site institucional para clínica de cardiologia com agendamento integrado.",
    metrics: "Agenda lotada em 3 meses"
  },
  {
    id: 3,
    title: "Lusso Interiors",
    category: "E-commerce",
    image: "https://picsum.photos/id/364/800/600",
    description: "Loja online minimalista para móveis de alto padrão.",
    metrics: "ROAS de 8.5x no lançamento"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ana Souza",
    role: "CMO",
    company: "StartUp Vision",
    image: "https://picsum.photos/id/64/150/150",
    content: "A equipe transformou nossa identidade digital. O design é impecável e a performance do site é absurda."
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Sócio Fundador",
    company: "Mendes & Associados",
    image: "https://picsum.photos/id/91/150/150",
    content: "Profissionalismo do início ao fim. Entenderam perfeitamente as necessidades do nosso escritório jurídico."
  },
  {
    id: 3,
    name: "Fernanda Lima",
    role: "Diretora",
    company: "Clinica Vital",
    image: "https://picsum.photos/id/338/150/150",
    content: "O sistema de agendamento integrado facilitou muito nossa rotina. O retorno do investimento foi rapidíssimo."
  }
];