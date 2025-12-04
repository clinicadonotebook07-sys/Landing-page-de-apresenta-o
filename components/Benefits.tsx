import React from 'react';
import { Smartphone, Zap, Search, LifeBuoy, Layout, BarChart } from 'lucide-react';

const benefits = [
  {
    icon: Layout,
    title: "Design Sob Medida",
    desc: "Nada de templates genéricos. Desenhamos a interface focada na identidade da sua marca."
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    desc: "Experiência fluida em mobile, tablet e desktop. Mobile-first como padrão."
  },
  {
    icon: Search,
    title: "SEO Técnico",
    desc: "Estrutura otimizada para o Google: meta tags, sitemap, schema markup e semântica correta."
  },
  {
    icon: Zap,
    title: "Ultra Performance",
    desc: "Carregamento instantâneo com otimização de imagens (WebP) e código limpo."
  },
  {
    icon: LifeBuoy,
    title: "Suporte Contínuo",
    desc: "Garantia pós-entrega e planos de manutenção para manter seu site seguro."
  },
  {
    icon: BarChart,
    title: "Foco em Conversão",
    desc: "Layouts estratégicos com CTAs claros e hierarquia visual para transformar visitantes em leads."
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Por que escolher a Lumina?</h2>
          <p className="text-lg text-gray-500">Combinamos design estético com engenharia robusta para entregar resultados reais.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-accent mb-6">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;