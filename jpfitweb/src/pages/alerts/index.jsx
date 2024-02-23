import { Link } from "react-router-dom";
import Header from "../../components/header";
import style from "./style.module.css";
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

  return (
    <div className={style.body} >
    <Header />
    <Link className={style.buttonAlerta} to="/criar-aviso"> Criar Alerta </Link>
        
    {conteudo.map((mensagem, index) => (
        <div className={style.janela} key={index}>
        <img className={style.profile} src={profile} alt="" />
        <div className={style.informacoesUsuario}>
            <h1>{mensagem.nome}</h1>
            <p>{mensagem.mensagem}</p>
        </div>
        </div>
    ))}
    </div>
  );
}
