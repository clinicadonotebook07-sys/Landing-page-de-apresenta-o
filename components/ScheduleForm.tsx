import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NICHE_SCHEMAS } from '../constants';
import Button from './Button';
import { submitScheduleForm } from '../services/api';
import { CheckCircle, AlertCircle, Calendar } from 'lucide-react';

const ScheduleForm: React.FC = () => {
  const [selectedNiche, setSelectedNiche] = useState(NICHE_SCHEMAS[0].id);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const { register, handleSubmit, reset } = useForm();

  const currentSchema = NICHE_SCHEMAS.find(n => n.id === selectedNiche) || NICHE_SCHEMAS[0];

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const payload = {
        ...data,
        niche: selectedNiche,
        submittedAt: new Date().toISOString()
      };
      
      const response = await submitScheduleForm(payload);
      
      if (response.success) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (e) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-green-50 rounded-3xl p-12 text-center animate-fade-in">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-2">Agendamento Confirmado!</h3>
        <p className="text-gray-600 mb-8">Recebemos suas informações. Um convite do Google Calendar foi enviado para o seu e-mail.</p>
        <Button onClick={() => setSubmitStatus('idle')} variant="outline">Novo Agendamento</Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="bg-black p-8 text-white">
        <h3 className="text-2xl font-bold mb-2 flex items-center">
          <Calendar className="mr-2" size={24} /> 
          Agende sua Consultoria
        </h3>
        <p className="text-gray-400 text-sm">Sessão estratégica de 15 minutos. Gratuita.</p>
      </div>

      <div className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Base Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
              <input 
                {...register("name", { required: true })}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-accent focus:ring-0 transition-all text-sm"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-mail Corporativo</label>
              <input 
                {...register("email", { required: true })}
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-accent focus:ring-0 transition-all text-sm"
                placeholder="nome@empresa.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
             <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
              <input 
                {...register("whatsapp")}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-accent focus:ring-0 transition-all text-sm"
                placeholder="(00) 00000-0000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Data/Hora Preferida</label>
              <input 
                {...register("preferredDate", { required: true })}
                type="datetime-local"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-accent focus:ring-0 transition-all text-sm text-gray-500"
              />
            </div>
          </div>

          {/* Dynamic Niche Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Qual o seu segmento?</label>
            <select 
              value={selectedNiche}
              onChange={(e) => setSelectedNiche(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-accent focus:ring-0 transition-all text-sm"
            >
              {NICHE_SCHEMAS.map(n => (
                <option key={n.id} value={n.id}>{n.title}</option>
              ))}
            </select>
            <p className="mt-1 text-xs text-gray-500">{currentSchema.description}</p>
          </div>

          {/* Dynamic Fields Rendering */}
          <div className="p-6 bg-surface rounded-xl border border-gray-100 space-y-4 animate-fade-in">
             <h4 className="text-sm font-bold text-gray-900 mb-2">Detalhes do Projeto ({currentSchema.title})</h4>
             
             {currentSchema.fields.map((field) => (
               <div key={field.name}>
                 <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                   {field.name} {field.required && '*'}
                 </label>
                 
                 {field.type === 'select' && field.options ? (
                   <select
                    {...register(`custom_${field.name}`, { required: field.required })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-gray-200 text-sm focus:border-accent focus:ring-0"
                   >
                     <option value="">Selecione...</option>
                     {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                   </select>
                 ) : field.type === 'array' && field.options ? (
                    <div className="flex flex-wrap gap-2">
                      {field.options.map((opt, i) => (
                        <label key={i} className="inline-flex items-center space-x-2 bg-white px-3 py-2 rounded-lg border border-gray-200 cursor-pointer hover:border-accent">
                          <input 
                            type="checkbox" 
                            value={opt} 
                            {...register(`custom_${field.name}`)}
                            className="text-accent focus:ring-accent rounded border-gray-300" 
                          />
                          <span className="text-xs">{opt}</span>
                        </label>
                      ))}
                    </div>
                 ) : (
                   <input
                    type={field.type === 'string' ? 'text' : field.type}
                    {...register(`custom_${field.name}`, { required: field.required })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-gray-200 text-sm focus:border-accent focus:ring-0"
                   />
                 )}
               </div>
             ))}
          </div>

          {submitStatus === 'error' && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
              <AlertCircle size={16} />
              <span>Erro ao agendar. Tente novamente ou chame no WhatsApp.</span>
            </div>
          )}

          <Button 
            type="submit" 
            fullWidth 
            disabled={isSubmitting}
            className="!py-4 text-lg"
          >
            {isSubmitting ? 'Processando...' : 'Confirmar Agendamento'}
          </Button>
          
          <p className="text-center text-xs text-gray-400">
            Ao agendar, você concorda com nossa política de privacidade. Seus dados estão seguros.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ScheduleForm;