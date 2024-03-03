import style from "./style.module.css";
import { useState, useEffect } from "react"; // Add this import statement
import { useNavigate } from "react-router-dom"; // Add this import statement
import Header from "../../components/header";
import logoFitCorreto from "../../assets/logoFitCorreto.png";
import api from "../../components/api/api.js";

export default function EditarExercicio() {
  const navigate = useNavigate();

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
      const response = api.post(`/treino/${localStorage.getItem('idTreino')}`, info, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }).then((info) => {
        getExercicios()
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

  const handleAddExercicio = () => {
    const info = {
      exercicios: [
      {
        reps: '1',
        tempo_descanço: '30 sec',
        sets: '3',
        name: 'Agachamento',
        description: 'Treino de Agachamento',
        dica: 'use toda a amplitude do musculo',
        musculo_alvo: 'coxa',
        url_tutorial: '...'
      }
      ]
    }

    try {
      //pega o id do exercio de alguma forma, a api(tigaz) lhe passa isso no get dentro de uma lista
      //agora vc faz a logica disso
      const response = api.post(`/treino/ExercicioUnico/${localStorage.getItem('idTreino')}`, info, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }).then((info) => {
        getExercicios()
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
        getExercicios()
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
  }, []);



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
        <button className={style.adicionarExercicio} onClick={() => handleAddExercicio()}>Adicionar Exercicio</button>

        <button className={style.salvarBotao} onClick={putTreino}>Salvar</button>

      </div>
    </div>

  );
}