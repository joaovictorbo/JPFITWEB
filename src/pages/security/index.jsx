import style from "./style.module.css";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import logoFit from "../../assets/logoFit.png";
import Input from "../../components/input/index.jsx";
import { useState } from "react";
import api from "../../components/api/api.js";
export default function Security() {
  const [password, setPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [newpassword2, setNewPassword2] = useState('');

  const AlterUser = async () => {
    try {
      const response = await api.post('/users/MudarSenha',{        password: password,
        newpassword: newpassword,
        newpassword2: newpassword2}, {
        headers:{
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                  },
      })
        .then(async function (response) {
          alert('Senha alterada com sucesso')
          return response.data
        })
        .catch(function (error) {
          alert('Erro de Conexão ou sua senha não confere')
        });

      return response;
    } catch (error) {
      throw error;
    };
  };

  return (
    <div className={style.profilePage}>
      <Header />
      <section className={style.container}>
        <div className={style.content}>
          <img src={logoFit} className={style.logo} alt="" />

          <div className={style.password}>
            <input type="password" placeholder="Senha Atual" onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Nova Senha" onChange={(e) => setNewPassword(e.target.value)} />
            <input type="password" placeholder="Confirme sua senha" onChange={(e) => setNewPassword2(e.target.value)} />
          </div>

          <button className={style.link} onClick={AlterUser}>
            Salvar
          </button>
        </div>
      </section>
    </div>
  );
}
