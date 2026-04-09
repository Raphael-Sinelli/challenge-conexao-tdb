export default function Solucao() {
  return (
    <div className="py-20 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">
          Nossa <span className="text-purple-500">Solução</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Desenvolvemos uma plataforma inteligente para conectar a Turma do Bem com quem mais precisa, 
          otimizando a gestão de voluntários e o atendimento aos pacientes.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="glass p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all group">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400 font-bold group-hover:scale-110 transition-transform">
            01
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Gestão de Voluntários</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Dashboard centralizado para dentistas gerenciarem seus horários e fichas de pacientes com facilidade.
          </p>
        </div>

        <div className="glass p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all group">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400 font-bold group-hover:scale-110 transition-transform">
            02
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Triagem Inteligente</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Algoritmos que priorizam os casos mais urgentes e conectam ao profissional mais próximo geograficamente.
          </p>
        </div>

        <div className="glass p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all group">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400 font-bold group-hover:scale-110 transition-transform">
            03
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Portal do Paciente</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Autoatendimento simplificado para que pacientes acompanhem o status do seu tratamento e agendamentos.
          </p>
        </div>
      </div>

      <div className="mt-16 glass p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] -z-10" />
        <h2 className="text-2xl font-bold mb-4 text-white">Impacto Social com Tecnologia</h2>
        <p className="text-slate-400 leading-relaxed">
          Nosso objetivo na Sprint 3 foi garantir que o TechSmile não seja apenas um site bonito, 
          mas uma ferramenta robusta escalável em TypeScript, garantindo que nenhum dado seja perdido 
          e nenhum paciente fique sem resposta.
        </p>
      </div>
    </div>
  );
}