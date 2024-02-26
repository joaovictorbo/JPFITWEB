import style from "./style.module.css";
import { Link , useNavigate } from "react-router-dom";
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
        const response = await api.post('/users', {
            cpf: info.cpf,
            email: info.email,
            password: info.senha,
            last_name: info.sobrenome,
            name: info.nome,
            phone: info.dddNumero,
        })
        .then(async function (response) {
            window.alert('Aluno cadastrado com sucesso')
            navigate('/home')
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
          <h1> Fazer Cadastro </h1>

          <section className={style.form}>
            <input className={style.input} type="text" placeholder="Nome" />
            <input type="text" placeholder="Sobrenone" />
            <div className={style.tel}>
              <input type="text" placeholder="+55" />
              <input type="tel" placeholder="DDD + Número" />
            </div>
            <input type="text" placeholder="CPF" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
          </section>

          <p className={style.login}>
            Já possui uma conta?{" "}
            <Link className={style.loginLink} to="/login">
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
