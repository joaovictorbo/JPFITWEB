import styles from './style.module.css'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className = {styles.header}>
            <img src="" alt="" className={styles.logo} />
            <ul className={styles.menu}>
                <li> Mensagens </li>
                <li> Alunos </li>
                <li> Avisos</li>
                <li> Meus Treinos</li>
                <li> <Link to='/profile'> Perfil </Link></li>
            </ul>
        </div>
      );
}