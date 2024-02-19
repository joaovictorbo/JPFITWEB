import style from "./style.module.css";
import { Link } from "react-router-dom";
import { useState } from "react"; // Add this import statement
import Header from "../../components/header";
import logoFitCorreto from "../../assets/logoFitCorreto.png";

export default function CriarTreinos() {
  const [links, setLinks] = useState([]); // Add state for links
  const [treino, setTreino] = useState(""); // Add state for treino
  const [form, setForm] = useState({
    name: "",
    reps: "",
    sets: 3,
    description: "",
    musculo_alvo: "",
    url_tutorial: "",
    dicas: ""
  }); // Add state for form

  const handleAddExercicio = () => {
    setLinks([...links, ""]); // Add an empty string to the links array
  };

  const handleTreinoChange = (e) => {
    setTreino(e.target.value); // Update the treino state with the input value
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value }); // Update the form state with the input value
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
            <input
              type="text"
              value={treino}
              onChange={handleTreinoChange}
              placeholder="Treino"
            />
            <button className={style.add} onClick={handleAddExercicio}>+</button>
          </div>
          {links.map((link, index) => (
            <div key={index} className={style.link}>
              <form>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  placeholder="Name"
                />
                <input
                  type="text"
                  name="reps"
                  value={form.reps}
                  onChange={handleFormChange}
                  placeholder="Reps"
                />
                <input
                  type="number"
                  name="sets"
                  value={form.sets}
                  onChange={handleFormChange}
                  placeholder="Sets"
                />
                <input
                  type="text"
                  name="description"
                  value={form.description}
                  onChange={handleFormChange}
                  placeholder="Description"
                />
                <input
                  type="text"
                  name="musculo_alvo"
                  value={form.musculo_alvo}
                  onChange={handleFormChange}
                  placeholder="Muscle Target"
                />
                <input
                  type="text"
                  name="url_tutorial"
                  value={form.url_tutorial}
                  onChange={handleFormChange}
                  placeholder="Tutorial URL"
                />
                <input
                  type="text"
                  name="dicas"
                  value={form.dicas}
                  onChange={handleFormChange}
                  placeholder="Tips"
                />
              </form>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
