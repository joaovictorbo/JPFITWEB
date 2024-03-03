import style from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header";
import logoFit from "../../assets/logoFit.png";
import api from "../../components/api/api";

import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // essa variavel precisa ser false
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    telefone: "",
    cpf: "",
    email: "",
    senha: ""
  });
  const RegisterUser = async (info) => {
    try {
      const response = await api.post('/Professor', {
        cpf: info.cpf,
        email: info.email,
        password: info.senha,
        last_name: info.sobrenome,
        name: info.nome,
        phone: info.dddNumero,
      })
        .then(async function (response) {
          window.alert('Usuário cadastrado com sucesso')
          navigate('/')
          return response.data
        })
        .catch(function (error) {
          window.alert('Erro ao cadastrar usuário')
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
    
      <section className={style.content}>
        <div className={style.contentForm}>
          <h1> Fazer Cadastro </h1>

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
              Cadastrar
            </button>
          </form>

          <p className={style.login}>
            Já possui uma conta?{" "}
            <Link className={style.loginLink} to="/">
              Entrar
            </Link>
          </p>
        </div>

        <div className={style.logo}>
          <img className={style.logoFit} src={logoFit} alt="" />
        </div>
      </section>
    </div>
  );
}
