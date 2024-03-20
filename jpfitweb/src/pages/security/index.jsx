import style from "./style.module.css";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import logoFit from "../../assets/logoFit.png";
import Input from "../../components/input/index.jsx";
export default function Security() {
  return (
    <div className={style.profilePage}>
      <Header />
      <section className={style.container}>
        <div className={style.content}>
          <img src={logoFit} className={style.logo} alt="" />

          <div className={style.password}>
            <Input type="password" placeholder="Senha Atual" />
            <Input type="password" placeholder="Nova Senha" />
            <Input type="password" placeholder="Confirme sua senha" />
          </div>

          <Link className={style.link} to="/profile">
            Salvar
          </Link>
        </div>
      </section>
    </div>
  );
}
