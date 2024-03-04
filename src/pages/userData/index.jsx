import style from "./style.module.css";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import logoFit from "../../assets/logoFit.png";
import { useState } from "react";
import api from "../../components/api/api";
export default function UserData() {
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
      const response = await api.put('/Professor', {
        cpf: info.cpf,
        email: info.email,
        password: info.senha,
        last_name: info.sobrenome,
        name: info.nome,
        phone: info.dddNumero,
      })
        .then(async function (response) {
          window.alert('Informações editadas com sucesso')
          return response.data
        })
        .catch(function (error) {
          window.alert('Erro editar informações')
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
    <div className={style.userData}>
      <Header />
      <section className={style.content}>
        <div className={style.contentForm}>
          <h1> Dados Pessoais </h1>

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
            </form>
            <button type="submit" className={style.editarLink}>
              Editar
            </button>
          
        </div>

        <div className={style.logo}>
          <img className={style.logoFit} src={logoFit} alt="" />
        </div>
      </section>
    </div>
  );
}
