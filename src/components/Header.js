import logo from '../assets/logo.svg'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Kasa logo"/>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A propos</Link>
            </nav>
        </header>
    )
}