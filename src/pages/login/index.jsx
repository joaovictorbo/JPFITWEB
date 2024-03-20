import { Link, Navigate } from "react-router-dom";
import style from "./style.module.css";
import Logo from "../../assets/logoFit.png";
import Input from "../../components/input/index"
import axios from "axios"
import api from "../../components/api/api"
import React from "react";
import { useState } from "react";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // essa variavel precisa ser false

  async function handleSignIn(data) {
    const dados = await loginUser(data.email, data.password);
  }

  const loginUser = async (username, password) => {
    try {
      const response = await api.post('/tokens/Professor', {
        email: username,
        password: password
      })
        .then( (response) => {
          setIsLoggedIn(true);
          localStorage.setItem("token", response.data.token);
          return response.data;
        })
        .catch(function (error) {
          window.alert('Usuário ou senha incorretos.');
        });
      return response;
    } catch (error) {
      throw error;
    }
  }

  return (
    <div className={style.login}>
      <div className={style.loginForm}>
        <img className={style.image} src={Logo} alt=""/>

        <div className={style.form}>
          <input type="text" placeholder="Email ou CPF" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
        </div>
        {isLoggedIn ? (
          <Navigate className={style.loginButton} to="./home">Login</Navigate>
        ) : (
          <button className={style.loginButton} onClick={() => handleSignIn({email, password})}>Login</button>
        )}
        {/* <p className={style.cadastrar}>Não possui uma conta?  <Link className={style.cadastrarLink} to="/register">Cadastrar</Link></p> */}
        <Link className={style.baixarLink} to="/baixar">Baixar App</Link>
      </div>
    </div>
  );
}
