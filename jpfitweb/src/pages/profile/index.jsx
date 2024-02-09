import style from "./style.module.css";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import logoFit from "../../assets/logoFit.png";
import fotoPerfil from "../../assets/fotoPerfilExemplo.png";

export default function Profile() {
  return (
    <div className={style.profilePage}>
      <Header />
      <section className={style.content}>
        <div className={style.profile}>
          <img src={fotoPerfil} alt="" />

          <h1>Prof. Rennan Alves</h1>
          <div className={style.links}>
            <Link className={style.link} to="/user-data"> Dados Pessoais </Link>
            <Link className={style.link} to="/password-and-security">
              Senha e Segurança
            </Link>
            <Link className={style.link} to="/">
              Sair
            </Link>
          </div>
        </div>

        <div className={style.logo}>
          <img className={style.logoFit} src={logoFit} alt="" />
        </div>
      </section>
    </div>
  );
}
