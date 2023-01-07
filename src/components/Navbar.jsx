import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar" id="nav">
                <Nav.Link href="#footer" className="navbar-logo" onClick={closeMobileMenu}>
                    <img className="imagen" src={require("../img/logo.png")} alt="" />
                </Nav.Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Nav.Link href="#requisitos" className="nav-links" onClick={closeMobileMenu}>
                            Requisitos
                        </Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link href="#cotizador" className="nav-links" onClick={closeMobileMenu}>
                            Cotiza tu préstamo
                        </Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link href="#contactUs" className="nav-links" onClick={closeMobileMenu}>
                            Formulario de solicitud
                        </Nav.Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
