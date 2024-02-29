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
                        <div>
                            <img className={style.profile} src={profile} alt=''/>
                            <h1>Aluno Sobrenome</h1>
                        </div>
                        <textarea className={style.textarea} placeholder="Digite sua resposta..."></textarea>
                        <button className={style.button}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}