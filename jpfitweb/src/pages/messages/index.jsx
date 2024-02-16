// Seu componente React (Messages.js)

import { Link } from "react-router-dom";
import Header from "../../components/header";
import style from "./style.module.css";
import logo from "../../assets/Logo.png";
import profile from "../../assets/fotoPerfilExemplo.png";

export default function Messages() {
  const mensagens = [
    {
      nome: "Pollyana Rodrigues",
      mensagem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 1111111111",
    },
    {
      nome: "Maria Eduarda",
      mensagem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 2222222222",
    },
    {
      nome: "José Santos",
      mensagem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 333333333",
    },
  ];

  return (
    <div className={style.body}>
      <Header />
      <img className={style.logo} src={logo} alt="Logo" />
      <div className={style.menus}>
        <button className={style.buttonArredondado}>Enviado</button>
        <button className={style.buttonArredondado}>Todos</button>
        <button className={style.buttonArredondado}>Resposta</button>
      </div>

      {mensagens.map((mensagem, index) => (
        <div className={style.janela}>
          <img className={style.profile} src={profile} alt="" />
          <div className={style.informacoesUsuario}>
            <h1>{mensagem.nome}</h1>
            <p>
             {mensagem.mensagem}
            </p>
            <div className={style.button}>
              <Link className={style.buttonVermais} to="/verMais">
                Ver mais
              </Link>
            </div>
          </div>
        </div>
      ))}

      <Link to="/">Sair</Link>
    </div>
  );
}
