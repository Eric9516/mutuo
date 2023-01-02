import React from "react";
import { Form } from "react-bootstrap";
import { StyledDiv, StyledForm, StyledFormControl, StyledButton, Myh2 } from "../Styles/StyledContactUs.js";

const ContactUs = () => {
    return (
        <StyledDiv id="contactUs">
            <Myh2>Contactanos</Myh2>
            <StyledForm>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <StyledFormControl type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Apellido</Form.Label>
                    <StyledFormControl type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>DNI</Form.Label>
                    <StyledFormControl type="number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Localidad</Form.Label>
                    <StyledFormControl type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Dirección</Form.Label>
                    <StyledFormControl type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Número de celular</Form.Label>
                    <StyledFormControl type="number" />
                </Form.Group>
                <hr></hr>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Condición laboral</Form.Label>
                    <StyledFormControl type="text" placeholder="Monotributista/Relacion de dependencia" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Antigüedad</Form.Label>
                    <StyledFormControl type="text" />
                </Form.Group>
                <hr></hr>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Monto solicitado</Form.Label>
                    <StyledFormControl type="number" placeholder="Mínimo $5.000 máximo $120.000" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Cantidad de cuotas</Form.Label>
                    <StyledFormControl type="number" placeholder="Hasta en 12 cuotas " />
                </Form.Group>
                <StyledButton variant="primary" type="submit" className="btn">
                    Enviar
                </StyledButton>
            </StyledForm>
        </StyledDiv>
    );
};

export default ContactUs;
