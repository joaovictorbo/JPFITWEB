import style from "./style.module.css";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import logoFit from "../../assets/logoFit.png";
import Input from "../../components/input/index.jsx";

export default function RegisterAluno() {
  return (
    <div className={style.register}>
      <Header />
      <section className={style.content}>
        <div className={style.contentForm}>
          <h1> Cadastrar Aluno </h1>

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

          <Link className={style.editarLink} to="/alunos">
            Cadastrar
          </Link>
        </div>

        <div className={style.logo}>
          <img className={style.logoFit} src={logoFit} alt="" />
        </div>
      </section>
    </div>
  );
}
