import style from "./style.module.css";
import { useState, useEffect } from "react"; // Add this import statement
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
  const [exercicios, setExercicios] = useState([]); // Add state for links
  const getExercicios = async () => {
    try {
      const response = api.get(`/treino/treinoexercicios/${localStorage.getItem('idTreino')}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }).then((info) => {
        setExercicios(info.data[0].exercicios);
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


  const putTreino = (e) => {
    e.preventDefault();
    const info = {
      categoria: 'afasfasf',
      name: 'asfasf',
      description: 'dgsdg'
    }

    try {
      const response = api.put(`/treino/${localStorage.getItem('idTreino')}`, info, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }).then((info) => {
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

  const putExercicio = (e) => {
    e.preventDefault();
    const info = {
      reps: 'afasfasf',
      tempo_descanço: 'asfasf',
      sets: 'dgsdg',
      name: 'dgsdg',
      description: 'dgsdg',
      dica: 'dgsdg',
      musculo_alvo: 'dgsdg',
      url_tutorial: 'dgsdg'
    }

    try {
      //pega o id do exercio de alguma forma, a api(tigaz) lhe passa isso no get dentro de uma lista
      //agora vc faz a logica disso
      const response = api.put(`/exercicio/${localStorage.getItem('idExercicio')}`, info, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }).then((info) => {
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

  useEffect(() => {
    getExercicios();
  }
    , []);

  const handleEditExercicio = (id) => {
    localStorage.setItem('idExercicio', id);
    console.log(localStorage.getItem('idExercicio'));
    navigate('/editar-exercicio-especifico');
  }
  const handleDeleteExercicio = (id) => {
    try {
      //pega o id do exercio de alguma forma, a api(tigaz) lhe passa isso no get dentro de uma lista
      //agora vc faz a logica disso
      const response = api.delete(`/exercicio/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }).then((info) => {
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
    <div className={style.home} onLoad={getExercicios}>
      <Header />
      <div className={style.logo}>
        <img className={style.logoFit} src={logoFitCorreto} alt="" />
      </div>
      <div className={style.profile}>
        <div className={style.links}>
          <div className={style.link}>Treino</div>
        </div>
        {exercicios.map((exercicio) => (
          
          <div key={exercicio.id}>
            <input
              type="text"
              name="name"
              value={exercicio.name || ""}
              // onChange={(e) => handleFormChange(e)}
              placeholder={`Exercicio ${exercicio.exercicio.name}`}
            />
            <input
              type="text"
              name="musculo_alvo"
              value={exercicio.musculo_alvo || ""}
              // onChange={(e) => handleFormChange(e)}
              placeholder={`Exercicio ${exercicio.exercicio.musculo_alvo}`}
            />
          <button onClick={() => handleEditExercicio(exercicio.exercicio.id)}>editar</button>
          <button onClick={() => handleDeleteExercicio(exercicio.exercicio.id)}>deletar</button>

          </div>
        ))}

        <button className={style.salvarBotao} onClick={putTreino}>Salvar</button>

      </div>
    </div>

  );
}