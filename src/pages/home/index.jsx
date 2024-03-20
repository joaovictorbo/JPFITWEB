import { Link } from "react-router-dom";
import Header from "../../components/header";
import style from "./style.module.css";
import logoJP from "../../assets/logoFit.png";

export default function Home() {  
  return (
    <div className={style.home}>
      <Header />
      <section className={style.container}>
        <div className={style.LogoCenter}>
          <img src={logoJP} className={style.logoJP} alt="" />
        </div>
      </section>
    </div>
  );
}
