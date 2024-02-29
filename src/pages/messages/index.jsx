// Seu componente React (Messages.js)

import { Link } from "react-router-dom";
import Header from "../../components/header";
import style from "./style.module.css";
import logo from "../../assets/Logo.png";
import profile from "../../assets/fotoPerfilExemplo.png";
import { useState } from "react";

export default function Messages() {


  
  const mensagens = [
    {
      img: "",
      nome: "Pollyana Rodrigues",
      mensagem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 1111111111",
      respondida: true,
    },
    {
      nome: "Maria Eduarda",
      mensagem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 2222222222",
      respondida: true,
    },
    {
      nome: "José Santos",
      mensagem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 333333333",
      respondida: false,
    },
  ];

  let [conteudo, setConteudo] = useState(mensagens);

  function selecao() {
    let todos = document.getElementById("todos");

    todos.style.backgroundColor = "#012a50";
    todos.style.color = "#fff";
  }

  function todos() {
    setConteudo(mensagens);
    let todos = document.getElementById("todos");
    let resposta = document.getElementById("respostas");
    let enviado = document.getElementById("enviado");

    todos.style.backgroundColor = "#012a50";
    todos.style.color = "white";

    resposta.style.backgroundColor = "white";
    resposta.style.color = "#012a50";

    enviado.style.backgroundColor = "white";
    enviado.style.color = "#012a50";
    return conteudo;
  }

  function respostas() {
    let respostas = mensagens.filter(
      (mensagem) => mensagem.respondida === true
    );
    setConteudo(respostas);

    let todos = document.getElementById("todos");
    let resposta = document.getElementById("respostas");
    let cadastrar = document.getElementById("enviado");

    todos.style.backgroundColor = "#fff";
    todos.style.color = "#012a50";

    resposta.style.backgroundColor = "#012a50";
    resposta.style.color = "#fff";

    cadastrar.style.backgroundColor = "white";
    cadastrar.style.color = "#012a50";

    return conteudo;
  }

  return (
    <div className={style.body} onLoad={selecao}>
      <Header />
      <img className={style.logo} src={logo} alt="Logo" />
      <div className={style.menus}>
        <button className={style.buttonArredondado} id="todos" onClick={todos}>
          Todos
        </button>
        <button
          className={style.buttonArredondado}
          id="respostas"
          onClick={respostas}
        >
          Resposta
        </button>
        <button className={style.buttonArredondado} id="enviado">
          Enviado
        </button>
      </div>

      {conteudo.map((mensagem, index) => (
        <div className={style.janela} key={index}>
          <img className={style.profile} src={profile} alt="" />
          <div className={style.informacoesUsuario}>
            <h1>{mensagem.nome}</h1>
            <p>{mensagem.mensagem}</p>
            <div className={style.button}>
              <Link className={style.buttonVermais} to="/verMais">
                Ver mais
              </Link>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}
