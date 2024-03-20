import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/login/index";
import Register from "./pages/register/index";
import Home from "./pages/home/index";
import Profile from "./pages/profile/index";
import Messages from "./pages/messages/index";
import Alerts from "./pages/alerts/index";
import Security from "./pages/security/index";
import UserData from "./pages/userData/index";
import Alunos from "./pages/alunos";
import Visitante from "./pages/visitante";
import MeusTreinos from "./pages/meusTreinos";
import VerMaisMensagens from "./pages/verMais";
import Visualizar from "./pages/visualizar";
import CriarTreinos from "./pages/criarTreinos/index";
import RegisterAluno from "./pages/registerAluno";
import CriarExercicios from "./pages/criarExercicios";
import ResponderT from "./pages/responder/index";
import CriarAviso from "./pages/criar-aviso/index";
import EditarExercicio from "./pages/editarExercicio";
import EditarExercicioEspecifico from "./pages/editarexercicioespecifico";
import Baixar from "./pages/baixar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/baixar",
    element: <Baixar />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/messages",
    element: <Messages />,
  },
  {
    path: "/alerts",
    element: <Alerts />,
  },
  {
    path: "/password-and-security",
    element: <Security />,
  },
  {
    path: "/user-data",
    element: <UserData />,
  },
  {
    path: "/alunos",
    element: <Alunos />,
  },
  {
    path: "/visitante",
    element: <Visitante />,
  },
  {
    path: "/meus-treinos",
    element: <MeusTreinos />,
  },
  {
    path: "/verMais",
    element: <VerMaisMensagens />,
  },
  {
    path: "/aluno-visualizar",
    element: <Visualizar />,
  },
  {
    path: "/criar-treino",
    element: <CriarTreinos />,
  },
  {
    path: "/register-aluno",
    element: <RegisterAluno />,
  },
  {
    path: "/criar-exercicios",
    element: <CriarExercicios />,
  },
  {
    path: "/responder",
    element: <ResponderT />,
  },
  {
    path: "/criar-aviso",
    element: <CriarAviso />,
  },
  {
    path: "/editar-exercicio",
    element: <EditarExercicio />,
  },
  {
    path: "/editar-exercicio-especifico",
    element: <EditarExercicioEspecifico />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
