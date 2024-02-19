import style from "./style.module.css";
import { Link } from "react-router-dom";
import { useState } from "react"; // Add this import statement
import Header from "../../components/header";
import logoFitCorreto from "../../assets/logoFitCorreto.png";
import Input from "../../components/input/index.jsx";

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
    setTreino(e.target.value); // Update the treino state with the Input value
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value }); // Update the form state with the Input value
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
          </div>
          {links.map((link, index) => (
            <div key={index} className={style.password}>
              <form>
                <Input
                  className={style.password}
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  placeholder="Name"
                />
                <Input
                  type="text"
                  name="reps"
                  value={form.reps}
                  onChange={handleFormChange}
                  placeholder="Reps"
                />
                <Input
                  type="number"
                  name="sets"
                  value={form.sets}
                  onChange={handleFormChange}
                  placeholder="Sets"
                />
                <Input
                  type="text"
                  name="description"
                  value={form.description}
                  onChange={handleFormChange}
                  placeholder="Description"
                />
                <Input
                  type="text"
                  name="musculo_alvo"
                  value={form.musculo_alvo}
                  onChange={handleFormChange}
                  placeholder="Muscle Target"
                />
                <Input
                  type="text"
                  name="url_tutorial"
                  value={form.url_tutorial}
                  onChange={handleFormChange}
                  placeholder="Tutorial URL"
                />
                <Input
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
        <button className={style.add} onClick={handleAddExercicio}>+</button>
      </section>
    </div>
    
  );
}
