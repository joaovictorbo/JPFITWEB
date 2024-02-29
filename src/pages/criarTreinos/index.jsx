import style from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; // Add this import statement
import api from "../../components/api/api.js";
import Header from "../../components/header";
import logoFitCorreto from "../../assets/logoFitCorreto.png";

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
          <div className={style.links}>
            <ul>
              {nametreinos && nametreinos.map((treino) => (
                <button onClick={() => handleClick(treino.treino)} className={style.link}>{treino.treino && treino.treino.name}</button>
              ))}
            </ul>
          </div>
        </div>

        <div className={style.logo}>
          <img className={style.logoFit} src={logoFitCorreto} alt="" />
          <Link className={style.add} to="/criar-exercicios">Criar treino</Link>
        </div>

      </section>
    </div>
  );
}
