import { useState, useEffect } from 'react';
import type { Paciente } from '../types/modelo';

const API_URL = 'https://crm-social-sprint4-java.onrender.com/beneficiarios';

export default function Dashboard() {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [processandoId, setProcessandoId] = useState<number | null>(null);

  useEffect(() => {
    const carregarPacientes = async () => {
      try {
        const resposta = await fetch(API_URL);
        if (!resposta.ok) throw new Error('Falha ao buscar dados do servidor.');
        const dados = await resposta.json();
        setPacientes(dados);
      } catch (error) {
        setErro('Erro de conexão com a API Java no Render. Verifique o servidor.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    carregarPacientes();
  }, []);

  const handleExcluir = async (idBeneficiario: number) => {
    if (!confirm('Tem certeza que deseja excluir este beneficiário?')) return;

    setProcessandoId(idBeneficiario);

    try {
      const resposta = await fetch(`${API_URL}/${idBeneficiario}`, {
        method: 'DELETE',
      });

      if (!resposta.ok) throw new Error('Falha ao excluir o beneficiário');

      setPacientes(prev => prev.filter(p => p.idBeneficiario !== idBeneficiario));
      alert('Beneficiário removido com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Erro ao tentar excluir. O servidor pode estar processando ou offline.');
    } finally {
      setProcessandoId(null);
    }
  };

  const handleAprovar = async (paciente: Paciente) => {
    setProcessandoId(paciente.idBeneficiario);

    try {
      const corpoRequisicao = {
        nome: paciente.nome,
        cpf: paciente.cpf || '999.999.999-99',
        dataNascimento: paciente.dataNascimento || '2000-01-01',
        telefone: paciente.telefone || '(11) 99999-9999',
        email: paciente.email || 'sem-email@teste.com',
        cidade: paciente.cidade || 'São Paulo',
        uf: paciente.uf || 'SP',
        status: 'EM_ATENDIMENTO',
      };

      const resposta = await fetch(`${API_URL}/${paciente.idBeneficiario}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(corpoRequisicao),
      });

      if (!resposta.ok) throw new Error('Falha ao atualizar o status');

      setPacientes(prev =>
        prev.map(p =>
          p.idBeneficiario === paciente.idBeneficiario
            ? { ...p, status: 'EM_ATENDIMENTO' }
            : p
        )
      );

      alert('Status atualizado para EM_ATENDIMENTO com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Erro ao tentar atualizar status no servidor Java.');
    } finally {
      setProcessandoId(null);
    }
  };

  const totalBeneficiarios = pacientes.length;

  const totalEmAtendimento = pacientes.filter(
    paciente => paciente.status === 'EM_ATENDIMENTO'
  ).length;

  const formatarData = (data?: string) => {
    if (!data) return 'Não informado';

    const dataNormalizada = data.split('.')[0];
    return new Intl.DateTimeFormat('pt-BR').format(new Date(dataNormalizada));
  };

  const mascararCpf = (cpf?: string) => {
    if (!cpf) return 'Não informado';

    return cpf.replace(/^(\d{3})\.?(\d{3})\.?(\d{3})-?(\d{2})$/, '$1.***.***-$4');
  };

  return (
    <div className="mx-auto max-w-6xl py-20 px-6">
      <h1 className="mb-8 text-4xl font-extrabold text-white">
        Dashboard de <span className="text-purple-500">Triagem</span>
      </h1>

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-5">
          <p className="text-sm text-slate-400">Beneficiários carregados da API Java</p>
          <p className="mt-2 text-3xl font-extrabold text-white">{totalBeneficiarios}</p>
          <p className="text-sm text-slate-400">registros encontrados no Render</p>
        </div>

        <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-5">
          <p className="text-sm text-slate-400">Beneficiários em atendimento</p>
          <p className="mt-2 text-3xl font-extrabold text-white">{totalEmAtendimento}</p>
          <p className="text-sm text-slate-400">status retornado pelo back-end</p>
        </div>
      </div>

      {loading && (
        <p className="text-slate-400 animate-pulse">
          Consultando API Java no Render...
        </p>
      )}

      {erro && (
        <div className="p-4 mb-6 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
          {erro}
        </div>
      )}

      {!loading && !erro && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pacientes.length === 0 ? (
            <p className="text-slate-400">Nenhum beneficiário na fila de triagem.</p>
          ) : (
            pacientes.map(paciente => (
              <div
                key={paciente.idBeneficiario}
                className="glass p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all flex flex-col"
              >
                <div className="mb-auto">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {paciente.nome}
                  </h3>

                  <p className="text-slate-400 text-sm mb-1">
                    ID: {paciente.idBeneficiario}
                  </p>

                  <p className="text-slate-400 text-sm mb-1">
                    Cidade: {paciente.cidade} - {paciente.uf}
                  </p>

                  <p className="text-slate-400 text-sm mb-1">
                    E-mail: {paciente.email}
                  </p>

                  <p className="text-slate-400 text-sm mb-1">
                    Telefone: {paciente.telefone}
                  </p>

                  <p className="text-slate-400 text-sm mb-1">
                    CPF: {mascararCpf(paciente.cpf)}
                  </p>

                  <p className="text-slate-400 text-sm mb-1">
                    Nascimento: {formatarData(paciente.dataNascimento)}
                  </p>

                  <p className="text-slate-400 text-sm mb-4">
                    Cadastro: {formatarData(paciente.dataCadastro)}
                  </p>

                  <span
                    className={`px-3 py-1 text-xs font-bold rounded-full ${
                      paciente.status === 'ATIVO'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-green-500/20 text-green-400'
                    }`}
                  >
                    {paciente.status}
                  </span>
                </div>

                <div className="mt-6 flex gap-2 border-t border-white/10 pt-4">
                  <button
                    onClick={() => handleAprovar(paciente)}
                    disabled={
                      paciente.status === 'EM_ATENDIMENTO' ||
                      processandoId === paciente.idBeneficiario
                    }
                    className="flex-1 bg-green-600/20 text-green-400 hover:bg-green-600/40 disabled:opacity-30 py-2 rounded-lg text-sm font-bold transition-all"
                  >
                    {processandoId === paciente.idBeneficiario ? '...' : 'Aprovar'}
                  </button>

                  <button
                    onClick={() => handleExcluir(paciente.idBeneficiario)}
                    disabled={processandoId === paciente.idBeneficiario}
                    className="flex-1 bg-red-600/20 text-red-400 hover:bg-red-600/40 disabled:opacity-30 py-2 rounded-lg text-sm font-bold transition-all"
                  >
                    {processandoId === paciente.idBeneficiario ? '...' : 'Excluir'}
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
