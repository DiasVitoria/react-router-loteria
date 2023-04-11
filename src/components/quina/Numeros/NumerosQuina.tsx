/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-cond-assign */
import { UseLoteria } from "../../../hooks";
import "./NumerosQuina.css"

const NumerosQuina = () => {
    const { quina } = UseLoteria();

    function Ganhadores() {
        var ganhador = ''

        if (quina.quantidadeGanhadores > 0) {
            return ganhador = ((quina.quantidadeGanhadores = 1) ? quina.quantidadeGanhadores + " GANHADOR" : quina.quantidadeGanhadores + " GANHADORES")
        }else{
            return ganhador = "ACUMULOU!"
        }
    }

    return (
        <div className="numerosContainerQuina">
            <div className="numeroswrapperQuina">
                {quina.dezenas?.map((item) => (
                    <div key={item} className="numeroSorteadoQuina">
                        {item}
                    </div>
                ))}
            </div>
            <h1>{Ganhadores()}</h1>
            <p>Concurso {quina.numeroDoConcurso} - {quina.dataPorExtenso}</p>
        </div>
    );
}

export default NumerosQuina;