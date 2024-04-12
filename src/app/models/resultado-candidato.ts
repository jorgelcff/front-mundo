export interface ResultadoCandidato {
  id_candidato: string;
  nome: string;
  cpf: string;
  nascimento: string;
  faculdade: string | null;
  status: string;
  motivo: string | null;
  tipo_nota: string;
  nota_ssa: string | null;
  nota_enem: string | null;
  declaracao_ensino_medio: string | null;
  comprovante_nota: string | null;
  comprovante_residencia: string | null;
  comprovante_residencia_especial: string | null;
  declaracao_ensino_fundamental: string | null;
  curso: string | null;
}
