import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

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
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about-us" className="nav-links" onClick={closeMobileMenu}>
                            Quienes somos?
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>
                            Contactanos
                        </Link>
                    </li>
                    <li>
                        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    );
}

export default Navbar;
