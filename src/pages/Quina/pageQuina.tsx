import NumerosQuina from "../../components/quina/Numeros/NumerosQuina";
import QuinaPremio from "../../components/quina/SorteioPremioQuina/SorteioPremioQuina";
import "./pageQuina.css"

const PageQuina = () => {

    return (
        <>
            <div className="quinaContainer">
                <QuinaPremio />
                <NumerosQuina />
            </div>
        </>
    );
};

export default PageQuina
