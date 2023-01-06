import React, { useState } from "react";
import { StyledCotAll, StyledButton, DivCentral, DivIndividual, DivBotones, Divh4 } from "../Styles/StyledCotizador.js";
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
            <DivCentral>
                <DivIndividual>
                    <Divh4>
                        <h4>Monto: {cantidad}</h4>
                    </Divh4>
                    <DivBotones>
                        <StyledButton onClick={masCantidad}>+</StyledButton>
                        <StyledButton onClick={menosCantidad}>-</StyledButton>
                    </DivBotones>
                </DivIndividual>
                <DivIndividual>
                    <Divh4>
                        <h4>Cuotas: {cuotas}</h4>
                    </Divh4>
                    <DivBotones>
                        <StyledButton onClick={sumar}>+</StyledButton>
                        <StyledButton onClick={restar}>-</StyledButton>
                    </DivBotones>
                </DivIndividual>
                <h3>Valor de la cuota: {valores[cuotas]}</h3>
            </DivCentral>
        </StyledCotAll>
    );
};

export default Cotizador;
