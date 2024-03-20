import Header from "../../components/header";
import style from './style.module.css';
import profile from "../../assets/fotoPerfilExemplo.png";
import logo from '../../assets/logoFit.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../components/api/api";

export default function Responder() {
  const [texto, settexto] = useState(''); // Add state for links

    const Emitiraviso = async (texto) => {
        try {
          const response = await api.post('/Avisos', {
            texto:texto

          },{
            headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }},)
            .then(async function (response) {
              window.alert('aviso cadastrado com sucesso.')
              return response.data
            })
            .catch(function (error) {
              window.alert('Erro ao enviar o aviso.')
            });
        } catch (error) {
            console.log(error)
            throw error;
            };
        }
    return(
        <div className={style.body}>
            <Header />          
            <div className={style.background}>
                <div className={style.body}>
                    <img className={style.logo} src={logo} alt="Logo" />
                </div>
                <div className={style.janelaVerMais}>    
                    <div className={style.informacoesUsuario}>
                        <textarea className={style.textarea} placeholder="Digite seu aviso..." onChange={(e) => settexto(e.target.value)}></textarea>
                        <button className={style.button} onClick={() => Emitiraviso(texto)}>Enviar Aviso</button>
                    </div>
                </div>
            </div>
        </div>
    );
}