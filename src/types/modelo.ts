export interface UsuarioPadrao {
  id: number;
  nome: string;
  email: string;
}

export type StatusTriagem = 'Pendente' | 'Aprovado' | 'Em Tratamento';

export type DentistaVoluntario = UsuarioPadrao & {
  cro: string;
  especialidade: string;
  ativo: boolean;
};

export interface Paciente {
  id: number;
  nome: string;
  idade: number;
  status: StatusTriagem;
}