import style from "./style.module.css";
import { useState } from "react"; // Add this import statement
import Header from "../../components/header";
import logoFitCorreto from "../../assets/logoFitCorreto.png";
import Input2 from "../../components/input2/index.jsx";

export default function CriarTreinos() {
  const [links, setLinks] = useState([]); // Add state for links
  const [treino, setTreino] = useState(""); // Add state for treino
  const [form, setForm] = useState({}); // Add state for form

  const handleAddExercicio = () => {
    setLinks([...links, form]);
    setForm({
      name: links.name,
      reps: links.reps,
      sets: links.sets,
      description: links.description,
      musculo_alvo: links.musculo_alvo,
      url_tutorial: links.url_tutorial,
      dicas: links.dicas,
    }); 
  };

  const handleTreinoChange = (e) => {
    setTreino(e.target.value); // Update the treino state with the Input value
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value }); // Update the form state with the Input value
  };

  const handleRemoveExercicio = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1); // Remove the element at the specified index from the links array
    setLinks(updatedLinks);
  };

  const handleSubmit = () => {
    const jsonData = JSON.stringify(links); // Convert the links array to JSON data
    console.log(jsonData); // You can do whatever you want with the JSON data
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
                  value={link.name}
                  onChange={handleFormChange}
                  placeholder="Nome"
                />
                <Input2
                  type="text"
                  name="description"
                  value={link.description}
                  onChange={handleFormChange}
                  placeholder="Descrição"
                />
                <Input2
                  type="number"
                  name="sets"
                  value={link.sets}
                  onChange={handleFormChange}
                  placeholder="Sets"
                />
                <Input2
                  type="text"
                  name="reps"
                  value={link.reps}
                  onChange={handleFormChange}
                  placeholder="Repetições"
                />
                <Input2
                  type="text"
                  name="musculo_alvo"
                  value={link.musculo_alvo}
                  onChange={handleFormChange}
                  placeholder="Músculo alvo"
                />
                <Input2
                  type="text"
                  name="url_tutorial"
                  value={link.url_tutorial}
                  onChange={handleFormChange}
                  placeholder="Tutorial URL"
                />
                <Input2
                  type="text"
                  name="dicas"
                  value={link.dicas}
                  onChange={handleFormChange}
                  placeholder="Dicas"
                />
              </form>
              <button className={style.remove} onClick={() => handleRemoveExercicio(index)}>-</button>
            </div>
          ))}
        </div>
        
        <div className={style.botoes}>
          <button className={style.add} onClick={handleAddExercicio}>+</button>
        </div>

        <button className={style.salvarBotao} onClick={handleSubmit}>Salvar</button>
        
      </section>
    </div>
    
  );
}