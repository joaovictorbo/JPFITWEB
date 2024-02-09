import style from "./style.module.css";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import logoFit from "../../assets/logoFit.png";
import Input from "../../components/input/index.jsx";

export default function CriarTreinos() {
  const EXERCISES = [

    {
        name:"Bicicleta", 
        reps: 10, 
        sets: 3, 
        description:"rosca direta",
        musculo_alvo:"biceps",
        url_tutorial:"https://www.youtube.com/watch?v=ZpvqYXj-gIQ",
        dicas:"aproxime o cotovelo"
     },
     {
        name:"Bicicleta",
        reps: 10, 
        sets: 3, 
        description:"rosca direta",
        musculo_alvo:"biceps",
        url_tutorial:"https://www.youtube.com/watch?v=ZpvqYXj-gIQ",
        dicas:"aproxime o cotovelo"
     },
     {
        name:"Bicicleta",
        reps: 10, 
        sets: 3, 
        description:"rosca direta",
        musculo_alvo:"biceps",
        url_tutorial:"https://www.youtube.com/watch?v=ZpvqYXj-gIQ",
        dicas:"aproxime o cotovelo"
     },
     {
        name:"Bicicleta",
        reps: 10, 
        sets: 3, 
        description:"rosca direta",
        musculo_alvo:"biceps",
        url_tutorial:"https://www.youtube.com/watch?v=ZpvqYXj-gIQ",
        dicas:"aproxime o cotovelo"
     },
     {
        name:"Bicicleta",
        reps: 10, 
        sets: 3, 
        description:"rosca direta",
        musculo_alvo:"biceps",
        url_tutorial:"https://www.youtube.com/watch?v=ZpvqYXj-gIQ",
        dicas:"aproxime o cotovelo"
     }

];
  return (
    <div className={style.home}>
      <Header />
      <section className={style.content}>
        <div className={style.profile}>
          <div className={style.links}>
            <Link className={style.link} to="">Criar Treino</Link>
            <Link className={style.add} to="">+</Link>
          </div>
        </div>

        <div className={style.logo}>
          <img className={style.logoFit} src={logoFit} alt="" />
        </div>
      </section>

    </div>
  );
}
