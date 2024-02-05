import { Link } from "react-router-dom";
import Header from "../../components/header";
import style from "./style.module.css";
import logo from "../../assets/Logo.png";
import fotoPerfil from "../../assets/fotoPerfilExemplo.png";

export default function MeusTreinos() {
  const treinos = [
    {
      nomeTreino: "Treino A",
      treino1: [
        {
          treino: "Agachamento na Máquina Smith",
          repeticao: "séries x 10-12 repetições",
        },
        {
            treino: "Descanse: ",
            repeticao: "60-90 segundos entre as séries.",
          },

          {
            treino: "Prensa de Pernas Horizontal ",
            repeticao: "séries x 12-15 repetições",
          },
      ],
    },
  ];

  return (
    <div className={style.meusTreinos}>
      <Header />
      <section className={style.container}>
        <img src={logo} className={style.img} />

        <div className={style.aluno}>
          <img src={fotoPerfil} alt="" />
          <h3>Pollyana Rodrigues</h3>
        </div>

        <div className={style.treino}>
            
          <h2>Treino A </h2>
          <p>Agachamento na Máquina Smith:</p>
          <p>4 séries x 10-12 repetições.</p>

          <p>Descanse: 60-90 segundos entre as séries.</p>

          <p></p>
          <p>3 .</p>
        </div>
      </section>
    </div>
  );
}
