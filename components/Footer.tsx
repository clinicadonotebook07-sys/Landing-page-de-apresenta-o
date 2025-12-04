import React from 'react';
import { Monitor, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white p-1.5 rounded-lg text-black">
                <Monitor size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight">Lumina</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Criação de sites de alta performance para empresas que buscam liderança de mercado. Design premium, código limpo e SEO técnico.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vagas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center"><Mail size={16} className="mr-2"/> contato@lumina.studio</li>
              <li className="flex items-center"><Instagram size={16} className="mr-2"/> @luminastudio</li>
              <li className="flex items-center"><Linkedin size={16} className="mr-2"/> Lumina Web Design</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Lumina Web Studio. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0">
            <p>Feito com React & Tailwind</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;