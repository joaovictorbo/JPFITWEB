import { Link } from "react-router-dom";
import Header from "../../components/header";
import style from "./style.module.css";
import profile from "../../assets/fotoPerfilExemplo.png";
import { useEffect, useState } from "react";
import api from "../../components/api/api";

export default function Messages() {
  const Deleteaviso = async (id) => {
    try {
      const response = await api.delete(`/Avisos/${id}`,{
        headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }},)
        .then(async function (response) {
          console.log(response.data)
          Pegaraviso()
        }
        )
        .catch(function (error) {
          window.alert('Erro ao deletar o aviso.')
        });
    }
    catch (error) {
      console.log(error)
      throw error;
    };
  }
  const Pegaraviso = async () => {
    try {
      const response = await api.get('/Avisos/TodosAvisos',{
        headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }},)
        .then(async function (response) {
          console.log(response.data)
          setConteudo(response.data.listUser)
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
        
 {conteudo && conteudo.map((mensagem, index) => (
        <div className={style.geral} key={index}>
        <div className={style.janela}>
        <img className={style.profile} src={profile} alt="" />
        <div className={style.informacoesUsuario}>
            <h1>{mensagem.name_professor}</h1>
            <p>{mensagem.texto}</p>
        </div>
        </div>
        <button className={style.buttonDelete} onClick={() => Deleteaviso(mensagem.id)}>Deletar</button>
        </div>
        
        
    ))}  
  
    </div>
  );
}
