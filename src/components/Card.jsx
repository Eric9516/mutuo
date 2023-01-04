import React from "react";
import "../Styles/Card.css";

const Card = (props) => {
    return (
        <div className="card">
            <div className="front">
                {props.icono}
                <p>{props.txtFront}</p>
            </div>
            <div className="back">
                <p>{props.txtBack}</p>
            </div>
        </div>
    );
};

export default Card;
