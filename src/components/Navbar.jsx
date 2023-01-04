import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img className="imagen" src={require("../img/logo.png")} alt="" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Nav.Link href="#aboutUs" className="nav-links" onClick={closeMobileMenu}>
                            Quienes somos?
                        </Nav.Link>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                            Services <i className="fas fa-caret-down" />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className="nav-item">
                        <Nav.Link href="#home" className="nav-links" onClick={closeMobileMenu}>
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
