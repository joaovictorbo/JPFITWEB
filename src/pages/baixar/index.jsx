import { Link, Navigate } from "react-router-dom";
import style from "./style.module.css";
import Logo from "../../assets/logoFit.png";
import Input from "../../components/input/index"
import axios from "axios"
import api from "../../components/api/api"
import React from "react";
import { useState } from "react";


export default function Baixar() {


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

  const handleDownload = () => {
    const fileUrl = require("../../components/app.apk");
    window.open(fileUrl);
  };

  return (
    <div className={style.login}>
      <div className={style.loginForm}>
        <img className={style.image} src={Logo} alt=""/>
        <button className={style.baixarButton} onClick={handleDownload}>Baixar App</button>
      </div>
    </div>
  );
}
