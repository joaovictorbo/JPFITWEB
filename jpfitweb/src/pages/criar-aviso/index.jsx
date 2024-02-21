import Header from "../../components/header";
import style from './style.module.css';
import profile from "../../assets/fotoPerfilExemplo.png";
import logo from '../../assets/logoFitJP.png';

export default function responder() {
    return(
        <div className={style.body}>
            <Header />          
            <div className={style.background}>
                <div className={style.body}>
                    <img className={style.logo} src={logo} alt="Logo" />
                </div>
                <div className={style.janelaVerMais}>    
                    <div className={style.informacoesUsuario}>
                        <h1>Professor Roberto</h1>
                        <textarea className={style.textarea} placeholder="Digite seu aviso..."></textarea>
                        <button className={style.button}>Enviar Aviso</button>
                    </div>
                </div>
            </div>
        </div>
    );
}