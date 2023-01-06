import React, { useState } from "react";
import { StyledCotAll, StyledButton } from "../Styles/StyledCotizador.js";
import { values } from "./Values.js";

const Cotizador = () => {
    const [cuotas, setCuotas] = useState(3);
    const [cantidad, setCantidad] = useState(5000);

    const valor = values.find((item) => item.amount === cantidad);
    const valores = valor.quotes;

    const sumar = () => {
        setCuotas(cuotas + 3);
        cuotas === 12 ? setCuotas(12) : sumar();
    };

    const restar = () => {
        setCuotas(cuotas - 3);
        cuotas === 3 ? setCuotas(3) : restar();
    };

    const masCantidad = () => {
        setCantidad(cantidad + 5000);
        cantidad === 100000 ? setCantidad(100000) : masCantidad();
    };
    const menosCantidad = () => {
        setCantidad(cantidad - 5000);
        cantidad === 5000 ? setCantidad(5000) : menosCantidad();
    };

    return (
        <StyledCotAll id="cotizador">
            <h1>Cotizador</h1>
            <StyledButton onClick={restar}>-</StyledButton>
            <StyledButton onClick={sumar}>+</StyledButton>
            <h4>{cuotas}</h4>
            <StyledButton onClick={menosCantidad}>-</StyledButton>
            <StyledButton onClick={masCantidad}>+</StyledButton>
            <h4>{cantidad}</h4>
            <h3>Valor de la cuota: {valores[cuotas]}</h3>
        </StyledCotAll>
    );
};

export default Cotizador;
