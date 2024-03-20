import style from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; // Add this import statement
import api from "../../components/api/api.js";
import Header from "../../components/header";
import logoFitCorreto from "../../assets/Logo.png";

export default function CriarTreinos() {
  const [nametreinos, setnametreinos] = useState([]); // Add state for links
  const navigate = useNavigate();
  async function handlegettreinos() {
    const dados = await gettreinos();
    return dados;
  }
  useEffect(() => {
    handlegettreinos();
  }, []);

  const handleClick = (treino) => {
    localStorage.setItem('idTreino', treino.id);
    localStorage.setItem('nomeTreino', treino.name);
    navigate('/editar-exercicio');
  }
  const gettreinos = async () => {
    try {
      const response = await api.get(`/Plano/MeusPlanosAlunos/${localStorage.getItem('idAluno')}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      })
        .then((response) => {
          if (response.data.isTreino == false) {
            navigate('/criar-exercicios');
          } else {
            const treinos = response.data.treinosComPlano[0].treinos;
            setnametreinos(treinos);
            return response.data;
          }
        })
        .catch(function (error) {
          window.alert('Treinos nao encontrados');
        });
      return response;
    } catch (error) {
      throw error;
    }
  };
  return (
    <div className={style.home}>
      <Header />
      <section className={style.content}>
        <div className={style.profile}>
          <div>
          </div>
          <div className={style.links}>
              {nametreinos && nametreinos.map((treino) => (
                <button  className={style.link} onClick={() => handleClick(treino.treino)}>{treino.treino && treino.treino.name}</button>
              ))}
            <Link to="/criar-exercicios" className={style.link}>Criar novo treino</Link>
          </div>      
        </div>

        <div className={style.logo}>
          <img className={style.logoFit} src={logoFitCorreto} alt="" />
        </div>

      </section>
    </div>
  );
}
