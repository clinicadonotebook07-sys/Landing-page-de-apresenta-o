import React from 'react';

const steps = [
  {
    step: "01",
    title: "Briefing & Estratégia",
    desc: "Entendemos seu negócio, seu público e definimos a estrutura ideal para converter."
  },
  {
    step: "02",
    title: "Design & Desenvolvimento",
    desc: "Criamos o protótipo visual e, após aprovação, codificamos com as melhores tecnologias."
  },
  {
    step: "03",
    title: "Lançamento & Otimização",
    desc: "Testes finais, configuração de domínio, analytics e deploy em servidores globais."
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Como funciona</h2>
          <p className="text-lg text-gray-500 max-w-2xl">Um processo transparente e ágil, sem "letras miúdas".</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-100 -z-10 transform translate-y-2"></div>

          {steps.map((s, idx) => (
            <div key={idx} className="relative bg-white pt-4">
               <div className="text-5xl font-bold text-gray-100 mb-4">{s.step}</div>
               <h3 className="text-xl font-bold mb-3 text-black">{s.title}</h3>
               <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;