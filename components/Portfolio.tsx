import React from 'react';
import { PORTFOLIO } from '../constants';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Projetos Recentes</h2>
            <p className="text-lg text-gray-500">Resultados reais para empresas que confiam no nosso trabalho.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO.map((item) => (
            <div key={item.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="text-white border border-white px-4 py-2 rounded-full flex items-center text-sm font-medium hover:bg-white hover:text-black transition-colors">
                    Ver Case <ExternalLink size={14} className="ml-2" />
                  </button>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">{item.category}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-4 flex-1">{item.description}</p>
                {item.metrics && (
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-green-600">Results: {item.metrics}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;