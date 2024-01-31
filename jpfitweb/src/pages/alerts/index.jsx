
import { Link } from "react-router-dom";
import Header from "../../components/header";




export default function Alerts() {
    return (
        <div>
            <Header/>
            <h1>Avisos</h1>
            <Link to='/'> Sair</Link>
        </div>
        
    );


}