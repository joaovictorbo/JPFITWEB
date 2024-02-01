import styles from "./style.module.css";
import { Link } from "react-router-dom";
import logoJP from "../../assets/logoFitJP.png";
import logoFit from "../../assets/logoFitNome.png";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.imagens}>
        <img src={logoJP} className={styles.logoJP} alt="" />
        <img src={logoFit} alt="" className={styles.logoFit} />
      </div>
      <ul className={styles.menu}>
        <li>
          {" "}
          <Link className={styles.linksMenu} to="/messages">
            {" "}
            Mensagens{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className={styles.linksMenu}>Alunos</Link>{" "}
        </li>
        <li>
          {" "}
          <Link className={styles.linksMenu} to="/alerts">
            {" "}
            Avisos{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className={styles.linksMenu}>Meus Treinos</Link>
        </li>
        <li>
          {" "}
          <Link className={styles.linksMenu} to="/profile">
            {" "}
            Perfil{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}
