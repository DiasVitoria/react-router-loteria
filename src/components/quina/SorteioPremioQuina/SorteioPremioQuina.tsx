import { UseLoteria } from "../../../hooks";
import logoquina from "../../../assets/trevo-quina.png";
import "./SorteioPremioQuina.css"

const QuinaPremio = () => {
  const { quina } = UseLoteria();

  function VerificaValor() {
    if (quina.valorEstimadoProximoConcurso != undefined) {
      const valor = quina.valorEstimadoProximoConcurso.toLocaleString(
        "pt-br",
        { style: "currency", currency: "BRL" }
      );
      return valor;
    }
  }

  return (
    <>
      <div className="quinaWrapper">
        <img src={logoquina} alt="" />
        <h1>QUINA</h1>

        <p>
          Estimativa de prêmio do próximo concurso. Sorteio em {quina.dataProximoConcurso}:
        </p>
        <h3>{VerificaValor()}</h3>
      </div>
    </>
  );
};

export default QuinaPremio;
