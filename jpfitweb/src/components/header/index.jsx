import styles from "./style.module.css";
import { Link } from "react-router-dom";
import logoJP from "../../assets/logoFitJP.png";
import logoFit from "../../assets/logoFitNome.png";
import Menu from "../../assets/responsive/MenuFilled.svg";

export default function Header() {
  function openSidebar() {
    document.getElementById("sidebar").style.display = "block";
  }

  function closeSidebar() {
    document.getElementById("sidebar").style.display = "none";
  }

  function sidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.display === "none") {
      openSidebar();
    } else {
      closeSidebar();
    }
  }

  window.onresize = closeSidebar;

  return (
    <div className={styles.header}>
      <div className={styles.imagens}>
        <Link to={"/home"}>
          <img src={logoJP} className={styles.logoJP} alt="" />
          <img src={logoFit} alt="" className={styles.logoFit} />
        </Link>
      </div>

      <ul className={styles.menu}>
        <li>
          <img
            src={Menu}
            id="imgMenu"
            className={styles.imgMenu}
            onClick={sidebar}
            alt=""
          />
        </li>
        <li>
          {" "}
          <Link className={styles.linksMenu} to="/messages">
            {" "}
            Mensagens{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className={styles.linksMenu} to="/alunos">
            Alunos
          </Link>{" "}
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
          <Link className={styles.linksMenu} to="/meus-treinos">
            Meus Treinos
          </Link>
        </li>
        <li>
          {" "}
          <Link className={styles.linksMenu} to="/profile">
            {" "}
            Perfil{" "}
          </Link>
        </li>
      </ul>

      <div id="sidebar" className={styles.sidebar}>
        <div className={styles.menusidebar}>
          <Link className={styles.linkssidebar} to={"/messages"}>
            Mensagens
          </Link>
          <Link className={styles.linkssidebar} to="/alunos">
            {" "}
            Alunos
          </Link>

          <Link className={styles.linkssidebar} to={"/alerts"}>
            Avisos
          </Link>
          <Link className={styles.linkssidebar} to="/meus-treinos">
            Meus Treinos
          </Link>
          <Link className={styles.linkssidebar} to="/profile">
            Perfil
          </Link>
        </div>
      </div>
    </div>
  );
}
