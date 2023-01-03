import React from "react";
import "../Styles/card.css";
import { whyChooseUs, easily } from "./itemsCard.js";

const Card = (props) => {
    return (
        <div class="card">
            <div class="front">
                <h1>{props.titleFront}</h1>
            </div>
            <div class="back">
                <h1>{props.titleBack}</h1>
            </div>
        </div>
    );
};

export default Card;
