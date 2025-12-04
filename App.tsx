import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ScheduleForm from './components/ScheduleForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <Process />
        <Portfolio />
        <Testimonials />
        
        {/* Schedule Section */}
        <section id="schedule" className="py-24 bg-surface relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
             <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
             <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Pronto para escalar seu negócio?
                </h2>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                  Não perca tempo com sites lentos ou amadores. Agende uma conversa rápida com nosso especialista técnico e receba um plano de ação personalizado.
                </p>
                <ul className="space-y-4 text-sm text-gray-600 mb-8">
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Análise de concorrência</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Definição de arquitetura</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Orçamento transparente</li>
                </ul>
              </div>
              
              <div className="lg:col-span-3">
                <ScheduleForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;