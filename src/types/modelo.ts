export type StatusTriagem = 'ATIVO' | 'INATIVO' | 'EM_ATENDIMENTO';

export interface Paciente {
  idBeneficiario: number;
  nome: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;
  email: string;
  cidade: string;
  uf: string;
  status: string;
  dataCadastro?: string;
}

export interface UsuarioPadrao {
  id: number;
  nome: string;
  email: string;
}

export type DentistaVoluntario = UsuarioPadrao & {
  cro: string;
  especialidade: string;
  ativo: boolean;
};
