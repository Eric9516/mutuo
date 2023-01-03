import React from "react";
import "../Styles/card.css";
import { whyChooseUs, easily } from "./itemsCard.js";

const Card = () => {
    const mostrarProducto = () => {
        for (let i = 0; i < whyChooseUs.length; i++) {
            return (
                <div class="card">
                    <div class="front">
                        {whyChooseUs[i].icono}
                        <h1>{whyChooseUs[i].textoFront}</h1>
                    </div>
                    <div class="back">
                        <h1>{whyChooseUs[i].textoBack}</h1>
                    </div>
                </div>
            );
        }
    };
    return mostrarProducto();
};

export default Card;
