interface IntegranteProps {
  nome: string;
  rm: string;
  foto: string;
  github: string;
  linkedin: string;
}

export const CardIntegrante = ({ nome, rm, foto, github, linkedin }: IntegranteProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/50 group">
      <div className="relative mb-6 flex justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
        <img src={foto} alt={nome} className="relative h-40 w-40 rounded-full border-2 border-white/10 object-cover shadow-2xl" />
      </div>
      <h3 className="text-xl font-bold text-center text-white">{nome}</h3>
      <p className="text-purple-400 text-center font-mono text-sm mb-6">RM {rm}</p>
      <div className="flex gap-3">
        <a href={github} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-xl bg-white/10 py-2.5 text-center text-xs font-bold text-white hover:bg-white/20 transition-colors">GitHub</a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-xl bg-purple-600 py-2.5 text-center text-xs font-bold text-white hover:bg-purple-500 transition-all shadow-lg shadow-purple-900/20">LinkedIn</a>
      </div>
    </div>
  );
};