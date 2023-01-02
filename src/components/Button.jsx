import React from "react";
import "../Styles/Button.css";
import { Link } from "react-router-dom";

export function Button() {
    return (
        <Link to="sign-up">
            <button className="boton">Sign Up</button>
        </Link>
    );
}
