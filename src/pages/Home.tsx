import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <span className="mb-4 rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-400 border border-purple-500/20">
        Sprint 3 - FIAP & Turma do Bem
      </span>
      
      <h1 className="mb-6 max-w-4xl text-center text-5xl font-extrabold tracking-tight md:text-7xl">
        Conectando Sorrisos com <br />
        <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Tecnologia e Empatia
        </span>
      </h1>

      <p className="mb-10 max-w-2xl text-center text-lg text-slate-400 leading-relaxed">
        Otimizando o atendimento da Turma do Bem através de um CRM inteligente e portais de autoatendimento.
      </p>

      <div className="flex gap-4">
        <Link 
          to="/solucao" 
          className="rounded-full bg-purple-600 px-8 py-4 font-bold shadow-lg shadow-purple-900/40 transition-all hover:scale-105 hover:bg-purple-500 text-white flex items-center justify-center"
        >
          Explorar Solução
        </Link>
        
        <Link 
          to="/faq" 
          className="glass rounded-full px-8 py-4 font-bold transition-all hover:bg-white/10 text-white flex items-center justify-center border border-white/10"
        >
          Ver FAQ
        </Link>
      </div>
    </div>
  );
}