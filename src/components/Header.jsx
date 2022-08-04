import logo from '../assets/logo.svg'
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className='header'>
            <Link to="/">
                <img src={logo} alt="Kasa logo"/>
            </Link>
            <nav className='header__nav'>
                <NavLink 
                className={({ isActive }) => isActive ? "header__navlink underline" : "header__navlink"}
                to="/">
                    Accueil
                </NavLink>
                <NavLink
                className={({ isActive }) => isActive ? "header__navlink underline" : "header__navlink"}
                to="/a-propos">
                    A Propos
                </NavLink>
            </nav>
        </header>
    )
}