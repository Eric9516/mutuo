import React, { useContext, useState, useEffect } from "react";
import {
    StyledCotAll,
    Titulo,
    DivCentral,
    DivIndividual,
    DivBoton,
    Divh4,
    Transf,
    Efect,
} from "../Styles/StyledCotizador.js";
import { Button } from "react-bootstrap";
import { values } from "./../utils/Values.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { ValoresContext } from "../context/valoresContext.jsx";
import { AiFillQuestionCircle } from "react-icons/ai";
import Swal from "sweetalert2";

AOS.init();

const Cotizador = () => {
    const [cuotas, setCuotas] = useState(3);
    const [cantidad, setCantidad] = useState(5000);
    const [pago, setPago] = useState("");
    const context = useContext(ValoresContext);

    useEffect(() => {
        context.setMonto(cantidad);
        context.setCuota(cuotas);
        context.setPago(pago);
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

    const help = () => {
        Swal.fire({
            text: "Si selecciona transferencia debera pagar la todalidad de las cuotas del préstamo de esa forma.",
            icon: "info",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Volver",
        }).then((result) => {});
    };

    return (
        <StyledCotAll id="cotizador">
            <Titulo data-aos="fade-left">Un préstamo a tu medida</Titulo>
            <DivCentral data-aos="fade-up">
                <h6>
                    <strong>¿De que forma pagarías tu cuota?</strong>
                    <AiFillQuestionCircle fontSize={25} color="darkRed" onClick={help} />
                </h6>
                <DivIndividual>
                    <div>
                        <label>Efectivo</label>
                        <input
                            type="radio"
                            name="formaDePago"
                            id=""
                            onClick={() => setPago("efectivo")}
                        />
                    </div>
                    <div>
                        <label>Transferencia</label>
                        <input
                            type="radio"
                            name="formaDePago"
                            id=""
                            onClick={() => {
                                setPago("transferencia");
                                help();
                            }}
                        />
                    </div>
                </DivIndividual>
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
                {pago === "transferencia" && (
                    <h3>
                        Valor de la cuota: <Efect>${Math.trunc(pagoEfectivo)}</Efect> {"  "}
                        <Transf>${valores[cuotas]}</Transf>
                    </h3>
                )}
                {pago === "efectivo" && <h3>Valor de la cuota: ${Math.trunc(pagoEfectivo)}</h3>}
                <Button variant="primary" href="#contactUs">
                    LO QUIERO!!
                </Button>{" "}
            </DivCentral>
        </StyledCotAll>
    );
};

export default Cotizador;
