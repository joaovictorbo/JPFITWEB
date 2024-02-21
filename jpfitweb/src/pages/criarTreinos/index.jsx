import style from "./style.module.css";
import { Link } from "react-router-dom";
import { useState } from "react"; // Add this import statement
import Header from "../../components/header";
import logoFitCorreto from "../../assets/logoFitCorreto.png";

export default function CriarTreinos() {
  const [links, setLinks] = useState(["Treino 1"]); // Add state for links

  const handleAddLink = () => {
    const newLink = `Treino ${links.length + 1}`;
    setLinks([...links, newLink]); // Add a new link to the links array
  };

  return (
    <div className={style.home}>
      <Header />
      <section className={style.content}>
        <div className={style.profile}>
          <div className={style.links}>
            <Link className={style.link} to="/criar-exercicios">Treino 1</Link>
            {links.slice(1).map((link, index) => (
              <Link key={index} className={style.link} to="/criar-exercicios">{link}</Link>
            ))}
            <button className={style.add} onClick={handleAddLink}>+</button>
          </div>
        </div>

        <div className={style.logo}>
          <img className={style.logoFit} src={logoFitCorreto} alt="" />
        </div>

      </section>
    </div>
  );
}
