import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { StyledDiv, StyledForm, StyledInput, StyledButton, Myh2, P } from "../Styles/StyledContactUs.js";
import AOS from "aos";
import "aos/dist/aos.css";
import ReCAPTCHA from "react-google-recaptcha";

AOS.init();

const ContactUs = () => {
    const [captchaValido, setCaptchaValido] = useState(null);

    const captcha = useRef(null);

    const onChange = () => {
        if (captcha.current.getValue()) {
            console.log("el usuario no es un robot");
        }
    };

    const submit = (e) => {
        if (captcha.current.getValue()) {
        } else {
            setCaptchaValido(false);
            e.preventDefault();
        }
    };

    return (
        <StyledDiv id="contactUs">
            <Myh2 data-aos="fade-right">Formulario de solicitud</Myh2>
            <StyledForm onSubmit={submit}>
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
                <div>
                    <ReCAPTCHA ref={captcha} sitekey="6LdRwdwjAAAAAJVOgCpJoA5qBkMeHkfpSm5t1eFz" onChange={onChange} />
                    {captchaValido === false && <P>Por favor acepta el captcha</P>}
                </div>
                <StyledButton variant="primary" type="submit" className="btn">
                    Enviar
                </StyledButton>
            </StyledForm>
        </StyledDiv>
    );
};

export default ContactUs;
