import React from "react";
import "../Styles/card.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Card = (props) => {
    return (
        <div className="card" data-aos="fade-up" data-aos-duration="900">
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
