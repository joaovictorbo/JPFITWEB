import style from "./style.module.css";
import { Link } from "react-router-dom";
import { useState } from "react"; // Add this import statement
import Header from "../../components/header";
import logoFitCorreto from "../../assets/logoFitCorreto.png";

export default function CriarTreinos() {
  const [links, setLinks] = useState([]); // Add state for links

  const handleAddLink = () => {
    setLinks([...links, ""]); // Add an empty string to the links array
  };

  return (
    <div className={style.home}>
      <Header />
      <section className={style.content}>
        <div className={style.logo}>
          <img className={style.logoFit} src={logoFitCorreto} alt="" />
        </div>
        <div className={style.profile}>
          <div className={style.links}>
            <div className={style.link}>Exercícios</div>
            <button className={style.add} onClick={handleAddLink}>+</button>
          </div>
        </div>

      </section>
    </div>
  );
}