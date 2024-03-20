import Header from "../../components/header";
import style from "./styles.module.css";
import fotoPerfil from "../../assets/fotoPerfilExemplo.png";
import Logo from "../../assets/Logo.png";

import { useState, useEffect } from "react";
import api from "../../components/api/api.js";
import olho from "../../assets/responsive/olho.png";
import plus from "../../assets/responsive/plus.png";
import { Link } from "react-router-dom";

export default function Alunos() {
  
  let [conteudo, setConteudo] = useState([]);
  let [atual, setAtual] = useState({});
  let [pagina, setPagina] = useState(1);
  let [total, setTotal] = useState(0);

  async function handlegetalunos() {
    const dados = await getalunos();
    return dados;
  }

  useEffect(() => {
    handlegetalunos();
  }, [pagina]);

  const getalunos = async () => {
    try {
      const response = await api.get(`/Professor/users?page=${pagina}`, {
        headers:{
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      })
        .then( (response) => {
          setConteudo(response.data.listUser);
          setTotal(response.data.pagination.allpage);
          return response.data.listUser;
        })
        .catch(function (error) {
          window.alert('Alunos nao encontrados');
        });
      return response;
    } catch (error) {
      throw error;
    }
  };
    

  // function todosAlunos() {
  //   setConteudo(alunos);
  //   let todos = document.getElementById("todos");
  //   let meusAlunosCadastrados = document.getElementById("meusAlunos");
  //   let cadastrar = document.getElementById("cadastrar");

  //   todos.style.backgroundColor = "#012a50";
  //   todos.style.color = "white";

  //   meusAlunosCadastrados.style.backgroundColor = "white";
  //   meusAlunosCadastrados.style.color = "#012a50";

  //   cadastrar.style.backgroundColor = "white";
  //   cadastrar.style.color = "#012a50";
  //   return conteudo;
  // }

  function selecao() {
    let todos = document.getElementById("todos");

    todos.style.backgroundColor = "#012a50";
    todos.style.color = "#fff";
  }
  function setidaluno(id){
    console.log(id);
    localStorage.setItem("idAluno", id);
  }

  // function meusAlunos() {
  //   let idProf = 1;
  //   let meusAlunos = alunos.filter((aluno) => aluno.idProf === idProf);
  //   setConteudo(meusAlunos);

  //   let todos = document.getElementById("todos");
  //   let meusAlunosCadastrados = document.getElementById("meusAlunos");
  //   let cadastrar = document.getElementById("cadastrar");

  //   todos.style.backgroundColor = "#fff";
  //   todos.style.color = "#012a50";

  //   meusAlunosCadastrados.style.backgroundColor = "#012a50";
  //   meusAlunosCadastrados.style.color = "#fff";

  //   cadastrar.style.backgroundColor = "white";
  //   cadastrar.style.color = "#012a50";

  //   return conteudo;
  // }

  return (
    <div className={style.alunos}>
      <Header />
      <section className={style.container} onLoad={selecao}>
        <div className={style.logo}>
          <img src={Logo} className={style.logoNome} alt="" />
        </div>
        <div className={style.menus}>
          <button id="todos">
            Todos
          </button>
         {/* <button onClick={meusAlunos} id="meusAlunos">
            Meus Alunos
          </button> */}
          <Link to="/register-aluno" className={style.linkMenu}>
            <button id="cadastrar">Cadastrar</button>
          </Link>
        </div>

        <div className={style.alunosList}>
          {Object.values(conteudo).map((aluno, index) => (
            <div className={style.aluno} key={index}>
              <img src={fotoPerfil} alt="" />
              <h2>{aluno.name} {aluno.last_name}</h2>

              <button>
                <Link to="/criar-treino" className={style.link} onClick={() => setidaluno(aluno.id)}>
                  Criar Treino{" "}
                </Link>
              </button>

              <Link to="/criar-treino" onClick={() => setidaluno(aluno.id)}>
                <img className={style.icon} src={plus} alt="" />
              </Link>
            </div>
          ))}
        </div>
        <div>
        {Array.from({ length: total }, (_, index) => (
            <button className={style.paginacao} key={index} onClick={() => setPagina(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
