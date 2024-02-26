import style from "./style.module.css";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import logoFit from "../../assets/logoFit.png";
import Input from "../../components/input/index.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../components/api/api.js";


export default function Visitante() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // essa variavel precisa ser false
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    telefone: "",
    cpf: "",
    email: "",
    senha: "",
    estado: "",
    pais: "",
  });
  const RegisterUser = async (info) => {
    try {
        const response = await api.post('/Visitante', {
            cpf: info.cpf,
            email: info.email,
            password: info.senha,
            last_name: info.sobrenome,
            name: info.nome,
            phone: info.dddNumero,
            estado: info.estado,
            pais: info.pais
        })
        .then(async function (response) {
            window.alert('checking feito com sucesso')
            return response.data
          })
          .catch(function (error) {
            window.alert('Usuário ou senha incorretos')
          });
  
        return response;
      } catch (error) {
        console.log(error)
        throw error;
      };
    };


  const handleChange = (e) => {
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    RegisterUser(formData);

  };

  return (
    <div className={style.register}>
      <Header />
      <section className={style.content}>
        <div className={style.contentForm}>
          <h1> Fazer Check-in </h1>

          <form className={style.form} onSubmit={handleSubmit}>
            <input
              className={style.input}
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
            />
            <input
              type="text"
              name="sobrenome"
              placeholder="Sobrenome"
              value={formData.sobrenome}
              onChange={handleChange}
            />
            <input
              type="text"
              name="estado"
              placeholder="Estado"
              value={formData.estado}
              onChange={handleChange}
            />
            <input
              type="text"
              name="pais"
              placeholder="pais"
              value={formData.pais}
              onChange={handleChange}
            />
            <div className={style.tel}>
              <input
                type="text"
                name="telefone"
                placeholder="+55"
                value={formData.telefone}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="dddNumero"
                placeholder="DDD + Número"
                value={formData.dddNumero}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="cpf"
              placeholder="CPF"
              value={formData.cpf}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleChange}
            />
            <button type="submit" className={style.editarLink}>
              Check-in
            </button>
          </form>

    

        </div>

        <div className={style.logo}>
          <img className={style.logoFit} src={logoFit} alt="" />
        </div>
      </section>
    </div>
  );
}
