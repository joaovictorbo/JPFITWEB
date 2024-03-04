import style from "./style.module.css";
import { useState, useEffect } from "react"; // Add this import statement
import { useNavigate } from "react-router-dom"; // Add this import statement
import Header from "../../components/header";
import logoFitCorreto from "../../assets/logoFitCorreto.png";
import api from "../../components/api/api.js";

export default function EditarExercicio() {
  const navigate = useNavigate();

  const [exercicios, setExercicios] = useState([]); // Add state for links
  const [categoria, setCategoria] = useState(""); // Add state for links
  const [name, setName] = useState(""); // Add state for links
  const [description, setDescription] = useState(""); // Add state for links
  const [treino, setTreino] = useState({}); // Add state for links

  const getExercicios = async () => {
    try {
      const response = api.get(`/treino/treinoexercicios/${localStorage.getItem('idTreino')}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }).then((info) => {
        setExercicios(info.data[0].exercicios);
        setTreino(info.data[0].treino)
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


  const putTreino = () => {
    const info = {
      categoria: categoria,
      name: name,
      description: description
    }

    try {
      const response = api.put(`/treino/${localStorage.getItem('idTreino')}`, info, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }).then((info) => {
        getExercicios()
        navigate('/criar-treino')
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
  const DeleteTreino = () => {
    try {
      const response = api.delete(`/treino/${localStorage.getItem('idTreino')}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }).then((info) => {
        navigate('/criar-treino')
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
          <p>Categoria:</p><input type="text" placeholder={`${treino.categoria}`} value={categoria} onChange={(e) => setCategoria(e.target.value)} />
          <p>Nome:</p><input type="text" placeholder={`${localStorage.getItem('nomeTreino')}`} value={name} onChange={(e) => setName(e.target.value)} />
          <p>Descrição:</p><input type="text" placeholder={`${treino.description}`} value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        {exercicios.map((exercicio) => (
          
          <div key={exercicio.id}>

            <p className={style.p}>{exercicio.exercicio.name}</p>
            <hr></hr>
            <p className={style.p}>{exercicio.exercicio.musculo_alvo}</p>
            <hr></hr>

          <button className={style.edit} onClick={() => handleEditExercicio(exercicio.exercicio.id)}>Editar</button>
          <button className={style.remove} onClick={() => handleDeleteExercicio(exercicio.exercicio.id)}>Deletar</button>

          </div>
        ))}
          <button className={style.adicionarExercicio} onClick={() => handleAddExercicio()}>Adicionar Exercicio</button>

          <button className={style.salvarBotao} onClick={putTreino}>Salvar</button>
          <button className={style.deletarTreino} onClick={() => DeleteTreino()}>Deletar Treino</button>

      </div>
    </div>

  );
}