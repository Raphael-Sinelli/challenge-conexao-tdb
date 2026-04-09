export default function Sobre() {
  return (
    <div className="w-full max-w-4xl mx-auto py-20 px-6">
      
      <div className="text-center mb-16">
        <span className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 border border-blue-500/20">
          Entenda a Solução
        </span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
          Sobre o Projeto <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Conexão TdB
          </span>
        </h1>
      </div>
      
      <div className="glass p-8 md:p-12 rounded-3xl space-y-12 relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full pointer-events-none"></div>

        <section className="relative z-10">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm">01</span>
            O Desafio
          </h2>
          <p className="text-slate-400 leading-relaxed text-lg">
            A Turma do Bem (TdB) nos apresentou o desafio de criar uma ferramenta para organizar e centralizar o grande volume de contatos recebidos de seus diversos públicos. A comunicação fragmentada em e-mails e WhatsApp dificultava o controle e a agilidade nas respostas.
          </p>
        </section>
        
        <section className="relative z-10">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 text-sm">02</span>
            Nossa Solução
          </h2>
          <p className="text-slate-400 leading-relaxed text-lg">
            O "Conexão TdB" é um CRM Social projetado para ser o ponto central de toda a comunicação da TdB. A plataforma visa unificar os canais de atendimento, automatizar o direcionamento de solicitações e oferecer portais de autoatendimento para voluntários e beneficiários, otimizando a gestão e a qualidade do relacionamento.
          </p>
        </section>

        <section className="relative z-10 bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">
            Tecnologias (Sprint 3)
          </h2>
          <p className="text-slate-400 mb-4">
            Nesta fase do projeto, evoluímos para uma arquitetura moderna baseada em componentes, utilizando:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-slate-300">
              <div><strong className="text-white">React + Vite:</strong> Para construção de uma Single Page Application (SPA) modular.</div>
            </li>
            <li className="flex items-start gap-3 text-slate-300">
              <div><strong className="text-white">TypeScript:</strong> Garantindo tipagem estática e segurança no código.</div>
            </li>
            <li className="flex items-start gap-3 text-slate-300">
              <div><strong className="text-white">TailwindCSS:</strong> Para estilização e responsividade (mobile, tablet, desktop).</div>
            </li>
          </ul>
        </section>

        <section className="relative z-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
            Roadmap do Projeto
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-center p-4 rounded-xl bg-white/5 border border-white/10 opacity-50">
              <div className="font-bold text-slate-500">Sprint 1</div>
              <div className="text-slate-400">Estruturação, design visual e planejamento técnico.</div>
            </div>
            <div className="flex gap-4 items-center p-4 rounded-xl bg-white/5 border border-white/10 opacity-50">
              <div className="font-bold text-slate-500">Sprint 2</div>
              <div className="text-slate-400">Desenvolvimento do núcleo e interface responsiva.</div>
            </div>
            <div className="flex gap-4 items-center p-4 rounded-xl bg-purple-500/20 border border-purple-500/30">
              <div className="font-bold text-purple-400">Sprint 3</div>
              <div className="text-white font-medium">Migração para SPA com React, Vite e TypeScript (Atual).</div>
            </div>
            <div className="flex gap-4 items-center p-4 rounded-xl bg-white/5 border border-white/10 border-dashed">
              <div className="font-bold text-slate-500">Sprint 4</div>
              <div className="text-slate-400">Integração com Backend e Consumo de API.</div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}