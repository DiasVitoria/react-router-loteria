
import NumerosMegasena from "../../components/Megasena/Numeros/Numeros";
import MegasenaPremio from "../../components/Megasena/SorteioPremio/SorteioPremio";
import "./pageMegasena.css"

const PageMegasena = () => {

    return (
        <>
            <div className="megasenaContainer">
                <MegasenaPremio />
                <NumerosMegasena />
            </div>
        </>
    );
};

export default PageMegasena
