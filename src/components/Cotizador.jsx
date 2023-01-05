import React, { useState } from "react";
import { StyledCotAll } from "../Styles/StyledCotizador.js";

const Cotizador = () => {
    const [cuotas, setCuotas] = useState(3);

    const sumar = () => {
        setCuotas(cuotas + 3);
        if (cuotas === 12) {
            setCuotas(12);
        }
    };

    const restar = () => {
        setCuotas(cuotas - 3);
        if (cuotas === 3) {
            setCuotas(3);
        }
    };
    return (
        <StyledCotAll id="cotizador">
            <h1>Cotizador</h1>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <h4>{cuotas}</h4>
        </StyledCotAll>
    );
};

export default Cotizador;
