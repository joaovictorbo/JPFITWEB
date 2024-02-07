// Seu componente React (Messages.js)

import { Link } from "react-router-dom";
import Header from "../../components/header";
import style from './style.module.css';
import logo from '../../assets/Logo.png';
import profile from "../../assets/fotoPerfilExemplo.png";

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

            <div className={style.janela}>
                <img className={style.profile} src={profile} alt=''/>
                <div className={style.informacoesUsuario}>
                    <h1>Aluno Sobrenome</h1>
                    <p>einwnfuwnufwbfeweb fkwebubkebfbeffffffffff  ffffffffffffffff ffffffffffffffffffff ffffffff f f fff fffff ffffff fffff fffff fff ffff fffff ffffff ffffffffff fgyggygym mmmmmm mmmmmmmm mmmmmmmm mmmmmmmmm mmmmmmm m mmm mmmmm mmmmmm mmmmmmmmm mm mmmmmmmmmm m m m mmmmm mmmmmm mmmmmmm mmmmmmmm mmmmmm mmmmmmm mmmmm mmmmm mmmmmm mmmm mmmmm mmmmmmm mmmm mmmmm mm mmmm mmmm mmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmmmmmmmmmm mmmmmmmmm</p>
                    <Link className={style.buttonVermais}  to="/verMais" >Ver mais</Link>
                </div>
            </div>

            <Link to='/'>Sair</Link>
        </div>
    );
}
