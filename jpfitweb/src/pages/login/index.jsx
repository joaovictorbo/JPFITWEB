import { Link } from "react-router-dom";
import style from "./style.module.css";
import Logo from "../../assets/logoFit.png";
import Input from "../../components/input/index"
import axios from "axios"
import api from "../../components/api/api"
import React from "react";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleSignIn(data) {
    const dados = await loginUser(data.username, data.password)
  }

  const loginUser = async (username, password) => {
    try {
      const response = await api.post('/tokens', {
        email: username,
        password: password
      })
        .then(async function (response) {
          return response.data
        })
        .catch(function (error) {
          window.alert('Usuário ou senha incorretos.')
        })
    } catch (error) {
      throw error;
    }

  }
  return (
    <div className={style.login}>
      <div className={style.loginForm}>
        <img className={style.image} src={Logo} />

        <div className={style.form}>
          <Input type="text" placeholder="Email ou CPF" onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
        </div>
        {"onClick={() => handleSingIn(email, password)"}
        <Link className={style.loginButton} to="./home">Login</Link>
        <p className={style.cadastrar}>Não possui uma conta?  <Link className={style.cadastrarLink} to="/register">Cadastrar</Link></p>
      </div>
    </div>
  );
}
