
import { Link } from "react-router-dom";
import Header from "../../components/header";




export default function Messages() {
    return (
        <div>
            <Header/>
            <h1>Mensagens</h1>
            <Link to='/'> Sair</Link>
        </div>
        
    );


}