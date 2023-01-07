import React, { useState } from "react";
import { StyledCotAll, Titulo, DivCentral, DivIndividual, DivBoton, Divh4 } from "../Styles/StyledCotizador.js";
import { Button } from "react-bootstrap";
import { values } from "./Values.js";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

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
            <Titulo data-aos="fade-left">Cotizador</Titulo>
            <DivCentral data-aos="fade-up">
                <DivIndividual>
                    <Divh4>
                        <h4>Monto: {cantidad}</h4>
                    </Divh4>
                    <DivBoton>
                        <Button variant="primary" onClick={masCantidad}>
                            +
                        </Button>
                        <Button variant="secondary" onClick={menosCantidad}>
                            -
                        </Button>
                    </DivBoton>
                </DivIndividual>
                <DivIndividual>
                    <Divh4>
                        <h4>Cuotas: {cuotas}</h4>
                    </Divh4>
                    <DivBoton>
                        <Button variant="primary" onClick={sumar}>
                            +
                        </Button>
                        <Button variant="secondary" onClick={restar}>
                            -
                        </Button>
                    </DivBoton>
                </DivIndividual>
                <h3>Valor de la cuota: ${valores[cuotas]}</h3>
                <Button variant="primary" href="#contactUs">
                    Lo quiero!!
                </Button>{" "}
            </DivCentral>
        </StyledCotAll>
    );
};

export default Cotizador;
