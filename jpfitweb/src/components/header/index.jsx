import style from "./style.module.css";
import { Link } from "react-router-dom";
import logoJP from "../../assets/logoFitJP.png";
import logoFit from "../../assets/logoFitNome.png";

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.imagens}>
        <Link to={"/home"}>
          <img src={logoJP} className={style.logoJP} alt="" />
          <img src={logoFit} alt="" className={style.logoFit} />
        </Link>
      </div>
      <ul className={style.menu}>
        <li>
          {" "}
          <Link className={style.linksMenu} to="/messages">
            {" "}
            Mensagens{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className={style.linksMenu}>Alunos</Link>{" "}
        </li>
        <li>
          {" "}
          <Link className={style.linksMenu} to="/alerts">
            {" "}
            Avisos{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className={style.linksMenu}>Meus Treinos</Link>
        </li>
        <li>
          {" "}
          <Link className={style.linksMenu} to="/profile">
            {" "}
            Perfil{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}
