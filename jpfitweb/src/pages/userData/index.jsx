import style from "./style.module.css";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import logoFit from "../../assets/logoFit.png";
import Input from "../../components/input/index.jsx";

export default function UserData() {
  return (
    <div className={style.userData}>
      <Header />
      <section className={style.content}>
        <div className={style.contentForm}>
          <h1> Dados Pessoais </h1>

          <section className={style.form}>
            <Input className={style.input} type="text" placeholder="Nome" />
            <Input type="text" placeholder="Sobrenone" />
            <div className={style.tel}>
              <Input type="text" placeholder="+55" />
              <Input type="tel" placeholder="DDD + Número" />
            </div>
            <Input type="text" placeholder="CPF" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Senha" />
          </section>

          <Link className={style.editarLink} to="/profile">
            Editar
          </Link>

          <p className={style.login}>Já possui uma conta?   <Link className={style.loginLink} to="/login">Entrar</Link></p>

        </div>

        <div className={style.logo}>
          <img className={style.logoFit} src={logoFit} alt="" />
        </div>
      </section>
    </div>
  );
}
