import { Link } from "react-router-dom";
import Header from "../../components/header";
import style from "./style.module.css";
import profile from "../../assets/fotoPerfilExemplo.png";
import { useEffect, useState } from "react";
import api from "../../components/api/api";

export default function Messages() {

  const Pegaraviso = async (texto) => {
    try {
      const response = await api.get('/Avisos/TodosAvisos',{
        headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }},)
        .then(async function (response) {
          console.log(response.data)
          setConteudo(response.data)
        })
        .catch(function (error) {
          window.alert('Erro ao enviar o aviso.')
        });
    } catch (error) {
        console.log(error)
        throw error;
        };
    }
  let [conteudo, setConteudo] = useState([]);
    useEffect(() => {
      Pegaraviso();
    }
    , []);
  return (
    <div className={style.body} onLoad={Pegaraviso} >
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
