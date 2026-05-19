import { useForm } from 'react-hook-form';

interface ContatoForm {
  nome: string;
  email: string;
  mensagem: string;
}

export default function Contato() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContatoForm>();

  const onSubmit = async (data: ContatoForm) => {
    try {
      const resposta = await fetch('http://localhost:8080/api/contatos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!resposta.ok) {
        throw new Error('Falha ao enviar a mensagem para o servidor Java.');
      }

      console.log("Dados enviados para a API:", data);
      alert("Mensagem enviada com sucesso para a ONG Turma do Bem!");
      reset();

    } catch (erro) {
      console.error(erro);
      alert("Erro de conexão com o servidor. Por favor, tente novamente mais tarde.");
    }
  };

  return (
    <div className="mx-auto max-w-5xl py-20 px-6 grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-4xl font-bold mb-6">Vamos Conversar?</h2>
        <p className="text-slate-400 mb-8 leading-relaxed">
          Dúvidas sobre a implementação ou quer ser um parceiro? Nossa equipe está pronta para responder.
        </p>
        <div className="space-y-4 text-slate-300">
          <p>📍 FIAP - São Paulo, Brasil</p>
          <p>📧 contato@conexaotdb.com.br</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="glass p-8 rounded-3xl space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-400">Seu Nome</label>
          <input 
            {...register("nome", { required: true })} 
            type="text" 
            className="w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none focus:border-purple-500 transition-colors text-white" 
            placeholder="Arthur Lins" 
          />
          {errors.nome && <span className="text-red-400 text-xs">Nome é obrigatório</span>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-400">E-mail</label>
          <input 
            {...register("email", { required: true })} 
            type="email" 
            className="w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none focus:border-purple-500 transition-colors text-white" 
            placeholder="arthur@exemplo.com" 
          />
          {errors.email && <span className="text-red-400 text-xs">E-mail é obrigatório</span>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-400">Mensagem</label>
          <textarea 
            {...register("mensagem", { required: true })} 
            rows={4} 
            className="w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none focus:border-purple-500 transition-colors text-white" 
            placeholder="Como podemos ajudar?"
          ></textarea>
          {errors.mensagem && <span className="text-red-400 text-xs">Mensagem é obrigatória</span>}
        </div>
        <button type="submit" className="w-full rounded-xl bg-purple-600 py-4 font-bold transition-all hover:bg-purple-500 shadow-lg shadow-purple-900/20 text-white">
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}