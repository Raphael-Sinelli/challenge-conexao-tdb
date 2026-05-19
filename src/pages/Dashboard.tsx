import { useState, useEffect } from 'react';
import type { Paciente } from '../types/modelo';

export default function Dashboard() {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const carregarPacientes = async () => {
      try {
        const resposta = await fetch('http://localhost:8080/api/pacientes');
        if (!resposta.ok) throw new Error('Falha ao buscar dados do servidor Java');
        const dados = await resposta.json();
        setPacientes(dados);
      } catch (error) {
        setErro('Erro de conexão com o Back-End. Tente novamente mais tarde.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    carregarPacientes();
  }, []);

  const handleExcluir = async (id: number) => {
    try {
      const resposta = await fetch(`http://localhost:8080/api/pacientes/${id}`, {
        method: 'DELETE',
      });
      
      if (!resposta.ok) throw new Error('Falha ao excluir o paciente');
      
      setPacientes(pacientes.filter(paciente => paciente.id !== id));
      alert("Paciente excluído com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao tentar excluir. O servidor pode estar offline.");
    }
  };

  const handleAprovar = async (id: number) => {
    try {
      const resposta = await fetch(`http://localhost:8080/api/pacientes/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'Aprovado' })
      });

      if (!resposta.ok) throw new Error('Falha ao aprovar o paciente');

      setPacientes(pacientes.map(paciente => 
        paciente.id === id ? { ...paciente, status: 'Aprovado' } : paciente
      ));
      alert("Status atualizado para Aprovado!");
    } catch (error) {
      console.error(error);
      alert("Erro ao tentar aprovar. O servidor pode estar offline.");
    }
  };

  return (
    <div className="mx-auto max-w-6xl py-20 px-6">
      <h1 className="mb-8 text-4xl font-extrabold text-white">
        Dashboard de <span className="text-purple-500">Triagem</span>
      </h1>

      {loading && <p className="text-slate-400">Carregando dados do servidor...</p>}
      
      {erro && (
        <div className="p-4 mb-6 rounded-xl bg-red-500/20 border border-red-500/50 text-red-400">
          {erro}
        </div>
      )}

      {!loading && !erro && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pacientes.length === 0 ? (
            <p className="text-slate-400">Nenhum paciente na fila de triagem.</p>
          ) : (
            pacientes.map((paciente) => (
              <div key={paciente.id} className="glass p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all flex flex-col">
                <div className="mb-auto">
                  <h3 className="text-xl font-bold text-white mb-2">{paciente.nome}</h3>
                  <p className="text-slate-400 mb-4">Idade: {paciente.idade} anos</p>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${paciente.status === 'Pendente' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'}`}>
                    {paciente.status}
                  </span>
                </div>
                
                <div className="mt-6 flex gap-2 border-t border-white/10 pt-4">
                  <button 
                    onClick={() => handleAprovar(paciente.id)}
                    disabled={paciente.status === 'Aprovado'}
                    className="flex-1 bg-green-600/20 text-green-400 hover:bg-green-600/40 disabled:opacity-50 py-2 rounded-lg text-sm font-bold transition-colors"
                  >
                    Aprovar
                  </button>
                  <button 
                    onClick={() => handleExcluir(paciente.id)}
                    className="flex-1 bg-red-600/20 text-red-400 hover:bg-red-600/40 py-2 rounded-lg text-sm font-bold transition-colors"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}