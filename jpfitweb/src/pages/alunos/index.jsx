import Header from "../../components/header";
import style from "./styles.module.css";
import fotoPerfil from "../../assets/fotoPerfilExemplo.png";
import logoFit from "../../assets/logoFitNome.png";
import logoJP from "../../assets/logoFitCor.png";

export default function Alunos() {
  const alunos = [
    {
      nome: "Pollyana Rodrigues",
    },
    {
      nome: "Maria Eduarda",
    },
    {
      nome: "José Santos",
    },
    {
      nome: "Lucas Pereira",
    },
  ];

  return (
    <div className={style.alunos}>
      <Header />
      <section className={style.container}>
        <div className={style.logo}>
          <img src={logoFit} className={style.logoFit} alt="" />
          <img src={logoJP} className={style.logoJP} alt="" />
        </div>
        <h1>Meus Alunos</h1>

        <div className={style.alunosList}>
          {alunos.map((aluno, index) => (
            <div className={style.aluno} key={index}>
              <img src={fotoPerfil} alt="" />
              <h2>{aluno.nome}</h2>
              <button>Visualizar</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
