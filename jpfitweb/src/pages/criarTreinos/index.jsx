import style from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; // Add this import statement
import api from "../../components/api/api.js";
import Header from "../../components/header";
import logoFitCorreto from "../../assets/logoFitCorreto.png";

export default function CriarTreinos() {
  const [links, setLinks] = useState([]); // Initialize links state as an empty array

  const handleAddLink = () => {
    const newLink = prompt("Insira o nome do treino: "); // Prompt the user to enter the name of the link
    if (newLink) {
      setLinks([...links, newLink]); // Add a new link to the links array if the user entered a name
    }
  };
  return (
    <div className={style.home}>
      <Header />
      <section className={style.content}>
        <div className={style.profile}>
          <div className={style.links}>
            {links.map((link, index) => (
              <Link key={index} className={style.link} to="/criar-exercicios">{link}</Link>
            ))}
            <button className={style.add} onClick={handleAddLink}>+</button>
          </div>
        </div>

        <div className={style.logo}>
          <img className={style.logoFit} src={logoFitCorreto} alt="" />
          <Link className={style.add} to="/criar-exercicios">Criar treino</Link>
        </div>

      </section>
    </div>
  );
}
