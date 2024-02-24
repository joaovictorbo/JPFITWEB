import style from "./style.module.css";
import { useState } from "react"; // Add this import statement
import Header from "../../components/header";
import logoFitCorreto from "../../assets/logoFitCorreto.png";
import { Navigate } from "react-router-dom";

export default function CriarTreinos() {
  const [links, setLinks] = useState([]); // Add state for links

  const handleAddExercicio = () => {
    setLinks([...links, {}]);
  };

  const handleFormChange = (e, index) => {
    const updatedLinks = [...links];
    updatedLinks[index] = { ...updatedLinks[index], [e.target.name]: e.target.value };
    setLinks(updatedLinks);
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
                <input
                  type="text"
                  name="name"
                  value={link.name || ""}
                  onChange={(e) => handleFormChange(e, index)}
                  placeholder="Nome"
                />
                <input
                  type="text"
                  name="description"
                  value={link.description || ""}
                  onChange={(e) => handleFormChange(e, index)}
                  placeholder="Descrição"
                />
                <input
                  type="number"
                  name="sets"
                  value={link.sets || ""}
                  onChange={(e) => handleFormChange(e, index)}
                  placeholder="Sets"
                />
                <input
                  type="text"
                  name="reps"
                  value={link.reps || ""}
                  onChange={(e) => handleFormChange(e, index)}
                  placeholder="Repetições"
                />
                <input
                  type="text"
                  name="musculo_alvo"
                  value={link.musculo_alvo || ""}
                  onChange={(e) => handleFormChange(e, index)}
                  placeholder="Músculo alvo"
                />
                <input
                  type="text"
                  name="url_tutorial"
                  value={link.url_tutorial || ""}
                  onChange={(e) => handleFormChange(e, index)}
                  placeholder="Tutorial URL"
                />
                <input
                  type="text"
                  name="dicas"
                  value={link.dicas || ""}
                  onChange={(e) => handleFormChange(e, index)}
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