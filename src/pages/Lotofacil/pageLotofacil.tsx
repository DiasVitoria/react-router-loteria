import NumerosLotofacil from "../../components/lotofacil/Numeros/NumerosLotofacil";
import LotofacilPremio from "../../components/lotofacil/SorteioPremio/SorteioPremioLotofacil";
import './pageLotofacil.css'

const PageLotofacil = () => {
    return (
        <>
            <div className="lotofacilContainer">
                <LotofacilPremio />
                <NumerosLotofacil />
            </div>

        </>
    )
}

export default PageLotofacil;