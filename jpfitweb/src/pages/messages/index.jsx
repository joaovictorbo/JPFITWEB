// Seu componente React (Messages.js)

import { Link } from "react-router-dom";
import Header from "../../components/header";
import style from './style.module.css';
import logo from '../../imagens/Logo.png';

export default function Messages() {
    return (
        <div className={style.body}>
            <Header />
            <img className={style.logo} src={logo} alt="Logo" />
            <div className={style.botoesCima}>
                <button className={style.buttonArredondado}>Enviado</button>
                <button className={style.buttonArredondado}>Todos</button>
                <button className={style.buttonArredondado}>Resposta</button>
            </div>
            <Link to='/'>Sair</Link>
        </div>
    );
}
