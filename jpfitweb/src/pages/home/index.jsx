import { Link } from "react-router-dom";
import Header from "../../components/header";
import style from "./style.module.css";
import logoJP from "../../assets/logoFitJP.png";
import logoFit from "../../assets/logoFitNome.png";

export default function Home() {
  return (
    <div className={style.home}>
      <Header />
      <section className={style.content}>
        <div className={style.LogoCenter}>
          <img src={logoJP} className={style.logoJP} alt="" />
          <img src={logoFit} className={style.logoFit} alt="" />
        </div>

        <Link className={style.criarTreinoLink}>Criar Treino</Link>
      </section>
    </div>
  );
}
