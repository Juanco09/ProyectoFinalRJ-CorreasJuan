import React, { useContext } from 'react'
import "./NavBar.css";
import CartWidget from "./CartWidget.js";
import logo from "../../assets/Logo-1.png";
import { Link } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'


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
                            <Nav className="me-auto">
                                <Link to={"/category/tintos"} className="NavBar_link">Tintos</Link>
                                <Link to={"/category/blancos"} className="NavBar_link">Blancos</Link>
                                <Link to={"/category/rosados"} className="NavBar_link">Rosados</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </nav>
                    <CartWidget />
                </div>
                <div className='login-state container'>
                    <h6>Bienvenido {user.email}</h6>
                    <button className='btn btn-danger' onClick={logout}>Cerrar sesión</button>
                </div>
            </header>
        </Navbar>
    )
};
