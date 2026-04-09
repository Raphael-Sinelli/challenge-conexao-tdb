import { useState } from 'react';

const faqs = [
  { q: "O que é a Conexão TdB?", a: "Uma plataforma de CRM inteligente focada em otimizar a triagem de pacientes para a ONG Turma do Bem." },
  { q: "Como a tecnologia ajuda a ONG?", a: "Automatizamos processos manuais, permitindo que dentistas voluntários e pacientes se conectem de forma mais rápida e segura." },
  { q: "Quais tecnologias foram usadas?", a: "React 19, TypeScript, Tailwind CSS e Vite para máxima performance e tipagem segura." }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl py-20 px-6">
      <h2 className="mb-12 text-center text-4xl font-bold italic tracking-tight">Perguntas <span className="text-purple-500">Frequentes</span></h2>
      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div key={i} className="glass rounded-2xl overflow-hidden">
            <button 
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between p-6 text-left font-semibold hover:bg-white/5 transition-colors"
            >
              {item.q}
              <span className={`text-2xl transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
            </button>
            {open === i && (
              <div className="px-6 pb-6 text-slate-400 leading-relaxed animate-in fade-in slide-in-from-top-2">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}