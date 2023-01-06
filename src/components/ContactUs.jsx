import React from "react";
import { Form } from "react-bootstrap";
import { StyledDiv, StyledForm, StyledInput, StyledButton, Myh2 } from "../Styles/StyledContactUs.js";

const ContactUs = () => {
    return (
        <StyledDiv id="contactUs">
            <Myh2>Formulario de solicitud</Myh2>
            <StyledForm>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <StyledInput type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Apellido</Form.Label>
                    <StyledInput type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>DNI</Form.Label>
                    <StyledInput type="number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Localidad</Form.Label>
                    <StyledInput type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Dirección</Form.Label>
                    <StyledInput type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Número de celular</Form.Label>
                    <StyledInput type="number" />
                </Form.Group>
                <hr></hr>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Condición laboral</Form.Label>
                    <StyledInput type="text" placeholder="Monotributista/Relacion de dependencia" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Antigüedad</Form.Label>
                    <StyledInput type="text" />
                </Form.Group>
                <hr></hr>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Monto solicitado</Form.Label>
                    <StyledInput type="number" placeholder="Mínimo $5.000 máximo $100.000" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
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
