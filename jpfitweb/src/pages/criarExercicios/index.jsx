import style from "./style.module.css";
import { useState } from "react"; // Add this import statement
import Header from "../../components/header";
import logoFitCorreto from "../../assets/logoFitCorreto.png";
import Input2 from "../../components/input2/index.jsx";

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

  const handleRemoveExercicio = () => {
    setLinks(links.slice(0, -1)); // Remove the last element from the links array
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
                <Input2
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  placeholder="Nome"
                />
                <Input2
                  type="text"
                  name="description"
                  value={form.description}
                  onChange={handleFormChange}
                  placeholder="Descrição"
                />
                <Input2
                  type="number"
                  name="sets"
                  value={form.sets}
                  onChange={handleFormChange}
                  placeholder="Sets"
                />
                <Input2
                  type="text"
                  name="reps"
                  value={form.reps}
                  onChange={handleFormChange}
                  placeholder="Repetições"
                />
                <Input2
                  type="text"
                  name="musculo_alvo"
                  value={form.musculo_alvo}
                  onChange={handleFormChange}
                  placeholder="Músculo alvo"
                />
                <Input2
                  type="text"
                  name="url_tutorial"
                  value={form.url_tutorial}
                  onChange={handleFormChange}
                  placeholder="Tutorial URL"
                />
                <Input2
                  type="text"
                  name="dicas"
                  value={form.dicas}
                  onChange={handleFormChange}
                  placeholder="Dicas"
                />
              </form>
            </div>
          ))}
        </div>
        
        <div className={style.botoes}>
          {links.length > 0 && <button className={style.remove} onClick={handleRemoveExercicio}>-</button>}
          <button className={style.add} onClick={handleAddExercicio}>+</button>
        </div>
        
      </section>
    </div>
    
  );
}
