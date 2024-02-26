import style from "./style.module.css";
import { useState } from "react"; // Add this import statement
import { useNavigate } from "react-router-dom"; // Add this import statement
import Header from "../../components/header";
import logoFitCorreto from "../../assets/logoFitCorreto.png";
import api from "../../components/api/api.js";

export default function EditarExercicio() {
  const navigate = useNavigate();
  const [nometreino, setnometreino] = useState(""); // Add state for links
  const [text, setText] = useState(""); // Add state for text
  const [description, setDescription] = useState(""); // Add state for description
  const [sets, setSets] = useState(""); // Add state for sets
  const [reps, setReps] = useState(""); // Add state for reps
  const [musculo_alvo, setMusculoAlvo] = useState(""); // Add state for musculo_alvo
  const [url_tutorial, setUrlTutorial] = useState(""); // Add state for url_tutorial
  const [dicas, setDicas] = useState(""); // Add state for dicas

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = {
    };
    try {
      const response = api.post('/treino',jsonData, {
        headers:{
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      })
        .then( (response) => {

          localStorage.setItem('idTreino', response.data.treinoId);
          const response2 = api.post('/Plano/treinoUnico', {
            treinoId: response.data.treinoId,
            nome: "Treino 1",
            user_id: localStorage.getItem('idAluno').preventDefault()
          }, {
            headers:{
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
          })
            .then( (response2) => {
              window.alert(response2.data);
              navigate('/criar-treino')
            })
            .catch(function (error) {
              window.alert('Erro ao enviar o treino.');
            });
          return response.data;
        })
        .catch(function (error) {
          window.alert('Erro ao enviar o treino.');
        });
      return response;
    } catch (error) {
      throw error;
    }
  }

  return (
    <div className={style.home}>
      <Header />
        <div className={style.logo}>
          <img className={style.logoFit} src={logoFitCorreto} alt="" />
        </div>
        <div className={style.profile}>
          <div className={style.links}>
            <div className={style.link}>Exercícios</div>
          </div>
                <input
                  type="text"
                  name="name"
                  value={text || ""}
                  //onChange={(e) => handleFormChange(e, )}
                  placeholder="Nome"
                />
                <input
                  type="text"
                  name="description"
                  value={description || ""}
                  //onChange={(e) => handleFormChange(e, )}
                  placeholder="Descrição"
                />
                <input
                  type="number"
                  name="sets"
                  value={sets || ""}
                  //onChange={(e) => handleFormChange(e, )}
                  placeholder="Sets"
                />
                <input
                  type="text"
                  name="reps"
                  value={reps || ""}
                  //onChange={(e) => handleFormChange(e, )}
                  placeholder="Repetições"
                />
                <input
                  type="text"
                  name="musculo_alvo"
                  value={musculo_alvo || ""}
                  //onChange={(e) => handleFormChange(e, )}
                  placeholder="Músculo alvo"
                />
                <input
                  type="text"
                  name="url_tutorial"
                  value={url_tutorial || ""}
                  //onChange={(e) => handleFormChange(e)}
                  placeholder="Tutorial URL"
                />
                <input
                  type="text"
                  name="dicas"
                  value={dicas || ""}
                  //onChange={(e) => handleFormChange(e, )}
                  placeholder="Dicas"
                />

        <button className={style.salvarBotao} onClick={handleSubmit}>Salvar</button>
        
    </div>
    </div>
    
  );
}