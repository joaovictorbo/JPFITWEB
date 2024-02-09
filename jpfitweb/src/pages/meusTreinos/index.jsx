import { Link } from "react-router-dom";
import Header from "../../components/header";
import style from "./style.module.css";
import logo from "../../assets/Logo.png";
import fotoPerfil from "../../assets/fotoPerfilExemplo.png";

export default function MeusTreinos() {
 

  return (
    <div className={style.meusTreinos}>
      <Header />
      <section className={style.container}>
        ÁREA PARA TREINOS DO SISTEMA E DO PROFESSOR
      </section>
    </div>
  );
}
