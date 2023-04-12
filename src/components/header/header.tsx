import { useNavigate } from 'react-router-dom';
import './header.css'
import { useState } from 'react';

const Header = () => {
    const history = useNavigate();
    const [classMega,setClassMega] = useState(false);
    const [classLoto,setClassLoto] = useState(false);
    const [classQuina,setClassQuina] = useState(false);

    function handlePath(caminho:string){
        if (caminho === 'lotofacil' ) {
            history('/lotofacil')
            setClassLoto(true)
            setClassMega(false)
            setClassQuina(false)
        }else if (caminho === 'megasena' ) {
            history('/megasena')
            setClassLoto(false)
            setClassQuina(false)
            setClassMega(true)
        }
        else {
            history('/quina')
            setClassLoto(false)
            setClassMega(false)
            setClassQuina(true)
        }
    }

    return (
        <nav className='headerNav'>
            <ul>
                <li className={!classLoto ? "loto" : "Active"} onClick={() => handlePath('lotofacil')}>Lotofácil</li>
                <li className={!classMega ? "mega" : "Active"} onClick={() => handlePath('megasena')}>Megasena</li>
                <li className={!classQuina ? "quina" : "Active"} onClick={() => handlePath('quina')}>Quina</li>
            </ul>
        </nav>
    );
}

export default Header