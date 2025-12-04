import React, { useEffect, useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import Button from './Button';
import { VARIANTS } from '../constants';

const Hero: React.FC = () => {
  const [variant, setVariant] = useState<'A' | 'B'>('A');

  useEffect(() => {
    // Simple A/B Logic: Randomly assign A or B on mount
    const selected = Math.random() > 0.5 ? 'B' : 'A';
    setVariant(selected);
    console.log(`[Analytics] Serving Variant ${selected}`);
  }, []);

  const content = VARIANTS[variant];

  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1 mb-6">
              <span className="flex items-center text-xs font-semibold text-accent uppercase tracking-wide">
                <Star size={12} className="mr-1 fill-current" />
                Novo
              </span>
              <span className="text-xs text-gray-500 font-medium">Slots abertos para Março</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-6 leading-[1.1]">
              {content.headline}
            </h1>
            
            <p className="text-xl text-gray-500 mb-8 leading-relaxed font-light">
              Design exclusivo • SEO técnico • Lançamento em 7–30 dias • Suporte contínuo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {content.ctaPrimary}
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Portfólio <ArrowRight size={16} className="ml-2 inline-block" />
              </Button>
            </div>

            <div className="mt-8 flex items-center space-x-4 text-sm text-gray-400">
               <span>✓ Design Responsivo</span>
               <span>✓ Alta Performance</span>
               <span>✓ SEO Ready</span>
            </div>
          </div>

          {/* Hero Image (Mockup) */}
          <div className="relative animate-slide-up lg:translate-x-10">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 aspect-[4/3] bg-gray-100 group">
              {/* Using Lorem Picsum for high quality placeholders resembling a clean workspace */}
              <img 
                src="https://picsum.photos/seed/workspace/1200/900" 
                alt="Modern workspace with laptop displaying website mockup" 
                className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center space-x-3 max-w-xs">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                98
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold">Google PageSpeed</p>
                <p className="text-sm font-bold text-black">Performance Mobile</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;