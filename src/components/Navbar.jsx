import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import logoMarvel from '../../public/logo-marvel.png';

export const Navbar = () => {
    return (
        <nav id='navbar' className="navbar bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div id='contenedor-navlink' className="container-fluid">
                <NavLink to='/' className="navbar-brand">
                    <img id="logo-marvel" src={logoMarvel} alt="Logo Marvel" width="30" height="24" className="d-inline-block align-text-top" />
                    Comics
                </NavLink>
            </div>
        </nav>
    )
}
