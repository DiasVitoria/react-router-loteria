export interface loteriaProps {
    megasena: Props;
    lotofacil: Props;
    quina: Props;
    carregando: boolean;
  }

  export interface Props {
    acumulado: boolean;
    concursoEspecial: boolean;
    dataApuracao: string;
    dataPorExtenso: string;
    dataProximoConcurso: string;
    dezenas: string[];
    numeroDoConcurso: number;
    quantidadeGanhadores: number;
    tipoJogo: string;
    valorEstimadoProximoConcurso: number;
    valorPremio: number;
  }