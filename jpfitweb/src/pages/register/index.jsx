import style from "./style.module.css";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import logoFit from "../../assets/logoFit.png";

export default function Register() {
  return (
    <div className={style.register}>
      <Header />
      <section className={style.content}>
        <div className={style.contentForm}>
          <h1> Fazer Cadastro </h1>

          <section className={style.form}>
            <input className={style.input} type="text" placeholder="Nome" />
            <input type="text" placeholder="Sobrenone" />
            <div className={style.tel}>
              <input type="text" placeholder="+55" />
              <input type="tel" placeholder="DDD + Número" />
            </div>
            <input type="text" placeholder="CPF" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
          </section>

          <Link className={style.editarLink} to="/">
            Cadastrar
          </Link>

          <p className={style.login}>
            Já possui uma conta?{" "}
            <Link className={style.loginLink} to="/">
              Entrar
            </Link>
          </p>
        </div>

        <div className={style.logo}>
          <img className={style.logoFit} src={logoFit} alt="" />
        </div>
      </section>
    </div>
  );
}
