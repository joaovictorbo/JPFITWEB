import Header from "../../components/header";
import style from './style.module.css';
import profile from "../../assets/fotoPerfilExemplo.png";

export default function verMaisMensagens() {
    return(
        <div className={style.body}>
                <Header />
                <div className={style.background}>
                    <div className={style.janelaVerMais}>
                        <img className={style.profile} src={profile} alt=''/>
                        <div className={style.informacoesUsuario}>
                            <h1>Aluno Sobrenome</h1>
                            <p>einwnfuwnufwbfeweb fkwebubkebfbeffffffffff  ffffffffffffffff ffffffffffffffffffff ffffffff f f fff fffff ffffff fffff fffff fff ffff fffff ffffff ffffffffff fgyggygym mmmmmm mmmmmmmm mmmmmmmm mmmmmmmmm mmmmmmm m mmm mmmmm mmmmmm mmmmmmmmm mm mmmmmmmmmm m m m mmmmm mmmmmm mmmmmmm mmmmmmmm mmmmmm mmmmmmm mmmmm mmmmm mmmmmm mmmm mmmmm mmmmmmm mmmm mmmmm mm mmmm mmmm mmmmm mmmmmmmmmm mmmmmmmmmm mmmmmmmmmmmmmmmmm mmmmmmmmm </p>
                        </div>
                    </div>
                </div>
                
        </div>
    );
}