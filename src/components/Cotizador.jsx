import React, { useContext, useState, useEffect } from "react";
import {
    StyledCotAll,
    Titulo,
    DivCentral,
    DivIndividual,
    DivBoton,
    Divh4,
} from "../Styles/StyledCotizador.js";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { values } from "./../utils/Values.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { ValoresContext } from "../context/valoresContext.jsx";

AOS.init();

const Cotizador = () => {
    const [cuotas, setCuotas] = useState(3);
    const [cantidad, setCantidad] = useState(5000);
    const context = useContext(ValoresContext);
    const [pago, setPago] = useState("");

    useEffect(() => {
        context.setMonto(cantidad);
        context.setCuota(cuotas);
    });

    const valor = values.find((item) => item.amount === cantidad);
    const valores = valor.quotes;
    let pagoEfectivo = valores[cuotas] * 1.1;

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
            <Titulo data-aos="fade-left">Un préstamo a tu medida</Titulo>
            <DivCentral data-aos="fade-up">
                <DivIndividual>
                    <Divh4>
                        <h4>Monto: ${cantidad}</h4>
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
                <p>¿De que forma pagarías tu cuota?</p>
                <DivIndividual>
                    <div>
                        <label>Efectivo</label>
                        <input
                            type="radio"
                            name="formaDePago"
                            id=""
                            onClick={() => setPago(false)}
                        />
                    </div>
                    <div>
                        <label>Transferencia</label>
                        <input
                            type="radio"
                            name="formaDePago"
                            id=""
                            onClick={() => setPago(true)}
                        />
                    </div>
                </DivIndividual>
                {pago && <h3>Valor de la cuota: ${valores[cuotas]}</h3>}
                {!pago && <h3>Valor de la cuota: ${Math.trunc(pagoEfectivo)}</h3>}
                <Button variant="primary" href="#contactUs">
                    LO QUIERO!!
                </Button>{" "}
            </DivCentral>
        </StyledCotAll>
    );
};

export default Cotizador;
