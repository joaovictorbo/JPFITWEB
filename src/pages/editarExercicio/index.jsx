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

    try {
      const response = api.get(`/treino/treinoexercicios/${localStorage.getItem('idTreino')}`, {
        headers:{
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }).then((info)=>{
        console.log(info.data)

      }

      ).catch(function (error) {
              window.alert('Erro ao enviar o treino.');
            });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  const putTreino = (e)=>{
    e.preventDefault();
    const info  = {
      categoria:'afasfasf',
      name:'asfasf',
      description:'dgsdg'
    }

    try {
      const response = api.put(`/treino/${localStorage.getItem('idTreino')}`, info,{
        headers:{
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }).then((info)=>{
        console.log(info.data)

      }

      ).catch(function (error) {
              window.alert('Erro ao enviar o treino.');
            });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  const putExercicio = (e)=>{
    e.preventDefault();
    const info  = {
      reps:'afasfasf',
      tempo_descanço:'asfasf',
      sets:'dgsdg',
      name:'dgsdg',
      description:'dgsdg',
      dica:'dgsdg',
      musculo_alvo:'dgsdg',
      url_tutorial:'dgsdg'
    }

    try {
      //pega o id do exercio de alguma forma, a api(tigaz) lhe passa isso no get dentro de uma lista
      //agora vc faz a logica disso
      const response = api.put(`/exercicio/${localStorage.getItem('idExercicio')}`, info,{
        headers:{
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }).then((info)=>{
        console.log(info.data)

      }

      ).catch(function (error) {
              window.alert('Erro ao enviar o treino.');
            });
      return response.data;
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
            <div className={style.link}>Treino</div>
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

        <button className={style.salvarBotao} onClick={putTreino}>Salvar</button>
        
    </div>
    </div>
    
  );
}