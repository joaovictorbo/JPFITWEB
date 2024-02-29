import style from "./style.module.css";


export default function Input({type,placeholder}) {
    return (
      <input className={style.input} type={type} placeholder={placeholder} />
    );
}