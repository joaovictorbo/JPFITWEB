
import style from "./style.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/index.jsx";
import logoFitCorreto from "../../assets/logoFitCorreto.png";
import api from "../../components/api/api.js";

export default function EditarExercicioEspecifico() {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [musculo_alvo, setMusculoAlvo] = useState("");
  const [url_tutorial, setUrlTutorial] = useState("");
  const [dicas, setDicas] = useState("");
  const [exercicios, setExercicios] = useState([]);
  const [id, setId] = useState(""); // Add this state
  const [name, setName] = useState(""); // Add this state

  const getExercicios = async () => {
    try {
      const response = api.get(`/exercicio/${localStorage.getItem('idExercicio')}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }).then((info) => {
        console.log(info.data[0])
        setExercicios(info.data[0]);
        return info.data;

      }

      ).catch(function (error) {
        window.alert('Erro ao pegar o treino.');
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }


  const putExercicio = (e) => {
    try {
      const response = api.put(`/exercicio/${localStorage.getItem('idExercicio')}`, {
        Reps: reps,
        Sets: sets,
        Name: name,
        Description: description,
        Dica: dicas,
        Musculo_alvo: musculo_alvo,
        Url_tutorial: url_tutorial
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }).then((info) => {
        navigate('/editar-exercicio')

      }

      ).catch(function (error) {
        window.alert('Erro ao enviar o treino.');
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    getExercicios();
  }
    , []);


  return (
    <div className={style.home} onLoad={getExercicios}>
      <Header />
      <div className={style.logo}>
        <img className={style.logoFit} src={logoFitCorreto} alt="" />
      </div>
      <div className={style.profile}>
        <div className={style.links}>
          <div className={style.link}>Treino</div>
        </div>
        <div>
          <h2>Exercício:</h2>
          <p>Descrição: <input type="text"placeholder={`${exercicios.description}`} value={description} onChange={(e) => setDescription(e.target.value)} /></p>
          <p>Músculo_Alvo: <input placeholder={`${exercicios.musculo_alvo}`} type="text" value={musculo_alvo} onChange={(e) => setMusculoAlvo(e.target.value)} /></p>
          <p>Nome: <input placeholder={`${exercicios.name}`} type="text" value={name} onChange={(e) => setName(e.target.value)} /></p>
          <p>Repetições:  <input placeholder={`${exercicios.reps}`} type="text" value={reps} onChange={(e) => setReps(e.target.value)} /></p>
          <p>Séries: <input placeholder={`${exercicios.sets}`} type="text" value={sets} onChange={(e) => setSets(e.target.value)} /></p>
          <p>URL_Tutorial: <input placeholder={`${exercicios.url_tutorial}`} type="text" value={url_tutorial} onChange={(e) => setUrlTutorial(e.target.value)} /></p>
          <p>Dicas: <input placeholder={`${exercicios.dicas}`} type="text" value={dicas} onChange={(e) => setDicas(e.target.value)} /></p>
        </div>
        <button onClick={putExercicio} className={style.salvarBotao}>Salvar</button>
      </div>
    </div>
  );
}