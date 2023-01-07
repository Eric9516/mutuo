import React from "react";
import { Form } from "react-bootstrap";
import { StyledDiv, StyledForm, StyledInput, StyledButton, Myh2 } from "../Styles/StyledContactUs.js";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const ContactUs = () => {
    return (
        <StyledDiv id="contactUs">
            <Myh2 data-aos="fade-right">Formulario de solicitud</Myh2>
            <StyledForm>
                <Form.Group className="mb-3" controlId="formBasicEmail" data-aos="fade-right">
                    <Form.Label>Nombre</Form.Label>
                    <StyledInput type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" data-aos="fade-right">
                    <Form.Label>Apellido</Form.Label>
                    <StyledInput type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" data-aos="fade-right">
                    <Form.Label>DNI</Form.Label>
                    <StyledInput type="number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" data-aos="fade-right">
                    <Form.Label>Localidad</Form.Label>
                    <StyledInput type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" data-aos="fade-right">
                    <Form.Label>Dirección</Form.Label>
                    <StyledInput type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" data-aos="fade-right">
                    <Form.Label>Número de celular</Form.Label>
                    <StyledInput type="number" />
                </Form.Group>
                <hr></hr>
                <Form.Group className="mb-3" controlId="formBasicEmail" data-aos="fade-right">
                    <Form.Label>Condición laboral</Form.Label>
                    <StyledInput type="text" placeholder="Monotributista/Relacion de dependencia" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" data-aos="fade-right">
                    <Form.Label>Antigüedad</Form.Label>
                    <StyledInput type="text" />
                </Form.Group>
                <hr></hr>
                <Form.Group className="mb-3" controlId="formBasicPassword" data-aos="fade-right">
                    <Form.Label>Monto solicitado</Form.Label>
                    <StyledInput type="number" placeholder="Mínimo $5.000 máximo $100.000" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" data-aos="fade-right">
                    <Form.Label>Cantidad de cuotas</Form.Label>
                    <StyledInput type="number" placeholder="Hasta en 12 cuotas " />
                </Form.Group>
                <StyledButton variant="primary" type="submit" className="btn">
                    Enviar
                </StyledButton>
            </StyledForm>
        </StyledDiv>
    );
};

export default ContactUs;
