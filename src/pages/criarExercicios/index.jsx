import style from "./style.module.css";
import { useState } from "react"; // Add this import statement
import { useNavigate } from "react-router-dom"; // Add this import statement
import Header from "../../components/header";
import logoFitCorreto from "../../assets/Logo.png";
import api from '../../components/api/api'

export default function CriarTreinos() {
  const navigate = useNavigate();
  const [links, setLinks] = useState([]); // Add state for links
  const [categoria, setcategoria] = useState(""); // Add state for links
  const [descricao, setDescricao] = useState(""); // Add state for links
  const [nometreino, setnometreino] = useState(""); // Add state for links


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

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = {
      exercicios: links,
      treinos: {
        name: nometreino,
        categoria: categoria,
        description: descricao
      }
    };
    try {
      console.log(jsonData);
      const response = api.post('/treino',jsonData, {
        headers:{
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      })
        .then( (response) => {

          localStorage.setItem('idTreino', response.data.treinoId);
          const response2 = api.post('/Plano/treinoUnico', {
            treinoId: response.data.treinoId,
            nome: nometreino,
            user_id: localStorage.getItem('idAluno')
          }, {
            headers:{
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
          })
            .then( (response2) => {
              window.alert(JSON.stringify(response2.data.mensagem));
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
      <section className={style.content}>
        <div className={style.logo}>
          <img className={style.logoFit} src={logoFitCorreto} alt="" />
        </div>

        <div className={style.profile}>

          <div className={style.links}>
            
            <input
              type="text"
              name="Categoria"
              value={categoria || ""}
              onChange={(e) => setcategoria(e.target.value) }
              placeholder="Categoria"
            />
            <input
              type="text"
              name="descrição"
              value={descricao|| ""}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Descricao"
            />
            <input
              type="text"
              name="Nome do Treino"
              value={nometreino|| ""}
              onChange={(e) => setnometreino(e.target.value)}
              placeholder="Nome do treino"
            />
            
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