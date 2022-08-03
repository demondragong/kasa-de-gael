import logo from '../assets/logo.svg'
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Kasa logo"/>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/a-propos">A propos</NavLink>
            </nav>
        </header>
    )
}