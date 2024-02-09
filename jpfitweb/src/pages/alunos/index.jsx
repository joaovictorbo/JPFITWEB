import Header from "../../components/header";
import style from "./styles.module.css";
import fotoPerfil from "../../assets/fotoPerfilExemplo.png";
import logoFit from "../../assets/logoFitNome.png";
import logoJP from "../../assets/logoFitCor.png";
import { useState } from "react";

import olho from "../../assets/responsive/olho.png";
import plus from "../../assets/responsive/plus.png";
import { Link } from "react-router-dom";

export default function Alunos() {
  const alunos = [
    {
      nome: "Pollyana Rodrigues",
      cpf: "12345678910",
      idProf: 1,
    },
    {
      nome: "Maria Eduarda",
      cpf: "12345678911",
      idProf: 2,
    },
    {
      nome: "José Santos",
      cpf: "12345678912",
      idProf: 1,
    },
    {
      nome: "Lucas Pereira",
      cpf: "12345678912",
      idProf: 3,
    },
  ];

  let [conteudo, setConteudo] = useState(alunos);

  function todosAlunos() {
    setConteudo(alunos);
    let todos = document.getElementById("todos");
    let meusAlunosCadastrados = document.getElementById("meusAlunos");
    let cadastrar = document.getElementById("cadastrar");

    todos.style.backgroundColor = "#012a50";
    todos.style.color = "white";

    meusAlunosCadastrados.style.backgroundColor = "white";
    meusAlunosCadastrados.style.color = "#012a50";

    cadastrar.style.backgroundColor = "white";
    cadastrar.style.color = "#012a50";
    return conteudo;
  }

  function selecao() {
    let todos = document.getElementById("todos");

    todos.style.backgroundColor = "#012a50";
    todos.style.color = "#fff";
  }

  function meusAlunos() {
    let idProf = 1;
    let meusAlunos = alunos.filter((aluno) => aluno.idProf === idProf);
    setConteudo(meusAlunos);

    let todos = document.getElementById("todos");
    let meusAlunosCadastrados = document.getElementById("meusAlunos");
    let cadastrar = document.getElementById("cadastrar");

    todos.style.backgroundColor = "#fff";
    todos.style.color = "#012a50";

    meusAlunosCadastrados.style.backgroundColor = "#012a50";
    meusAlunosCadastrados.style.color = "#fff";

    cadastrar.style.backgroundColor = "white";
    cadastrar.style.color = "#012a50";

    return conteudo;
  }

  return (
    <div className={style.alunos}>
      <Header />
      <section className={style.container} onLoad={selecao}>
        <div className={style.logo}>
          <img src={logoFit} className={style.logoFit} alt="" />
          <img src={logoJP} className={style.logoJP} alt="" />
        </div>
        <div className={style.menus}>
          <button onClick={todosAlunos} id="todos">
            Todos
          </button>
          <button onClick={meusAlunos} id="meusAlunos">
            Meus Alunos
          </button>
          <button id="cadastrar">Cadastrar</button>
        </div>

        <div className={style.alunosList}>
          {conteudo.map((aluno, index) => (
            <div className={style.aluno} key={index}>
              <img src={fotoPerfil} alt="" />
              <h2>{aluno.nome}</h2>
              <button>Visualizar</button>

              <img className={style.icon} src={olho} alt="" />

              <button>Criar Treino</button>

              <img className={style.icon} src={plus} alt="" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
