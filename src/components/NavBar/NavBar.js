import React, { useContext } from 'react'
import "./NavBar.css";
import CartWidget from "./CartWidget.js";
import logo from "../../assets/Logo-1.png";
import { Link } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext';
import Navbar from 'react-bootstrap/Navbar';


export const NavBar = () => {
    const { user, logout } = useContext(LoginContext)

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <header className="header">
                <div className="header_container">
                    <Link to={"/"}><img className="header_logo" src={logo} /></Link>
                    <nav className="header_nav">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Link to={"/category/tintos"} className="NavBar_link">Tintos</Link>
                            <Link to={"/category/blancos"} className="NavBar_link">Blancos</Link>
                            <Link to={"/category/rosados"} className="NavBar_link">Rosados</Link>
                        </Navbar.Collapse>
                    </nav>
                    <CartWidget />
                </div>
                <div className='login-state container'>
                    <h6>Bienvenido {user.id}</h6>
                    <button className='btn btn-danger' onClick={logout}>Cerrar sesión</button>
                </div>
            </header>
        </Navbar>
    )
};



// {/* <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
//             <Container>
//                 <Navbar.Brand>
//                     <Link to={"/"}><img className="header_logo" src={logo} /></Link>
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="me-auto">
//                         <nav className="header_nav">
//                             <li><Link to={"/category/tintos"} className="NavBar_link">Tintos</Link></li>
//                             <li><Link to={"/category/blancos"} className="NavBar_link">Blancos</Link></li>
//                             <li><Link to={"/category/rosados"} className="NavBar_link">Rosados</Link></li>
//                             {/* <li><Link to={"/nosotros"} className="NavBar_link">Nosotros</Link></li> */}
//                             <CartWidget />
//                         </nav>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar> */}