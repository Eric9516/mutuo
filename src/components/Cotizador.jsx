import React, { useState } from "react";
import { StyledCotAll, StyledButton } from "../Styles/StyledCotizador.js";

const Cotizador = () => {
    const [cuotas, setCuotas] = useState(3);

    const sumar = () => {
        setCuotas(cuotas + 3);
        cuotas === 12 ? setCuotas(12) : sumar();
    };

    const restar = () => {
        setCuotas(cuotas - 3);
        cuotas === 3 ? setCuotas(3) : restar();
    };

    return (
        <StyledCotAll id="cotizador">
            <h1>Cotizador</h1>
            <StyledButton onClick={sumar}>+</StyledButton>
            <StyledButton onClick={restar}>-</StyledButton>
            <h4>{cuotas}</h4>
        </StyledCotAll>
    );
};

export default Cotizador;
