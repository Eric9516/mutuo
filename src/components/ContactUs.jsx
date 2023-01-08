import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { StyledDiv, StyledForm, StyledInput, StyledButton, Myh2, P } from "../styles/StyledContactUs.js";
import AOS from "aos";
import "aos/dist/aos.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { cantidadCuotas, montoPrestamo } from "../validations/validator.js";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

AOS.init();

const ContactUs = () => {
    const [captchaValido, setCaptchaValido] = useState(null);
    const captcha = useRef(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onChange = () => {
        if (captcha.current.getValue()) {
        }
    };

    const submit = (data, e) => {
        if (captcha.current.getValue()) {
            emailjs
                .sendForm("service_arcn9qh", "template_6wsatef", e.target, "VX9SWecCA8TT-C6kr")
                .then((response) => console.log(response))
                .catch((error) => console.log(error));
        } else {
            setCaptchaValido(false);
            e.preventDefault();
        }
    };

    return (
        <StyledDiv id="contactUs">
            <Myh2 data-aos="fade-right">Formulario de solicitud</Myh2>
            <StyledForm onSubmit={handleSubmit(submit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail" data-aos="fade-right">
                    <Form.Label>Nombre</Form.Label>
                    <StyledInput
                        type="text"
                        {...register("nombre", {
                            required: true,
                            minLength: 3,
                        })}
                        name="nombre"
                    />
                    {errors.nombre?.type === "required" && <P>El campo es obligatorio</P>}
                    {errors.nombre?.type === "minLength" && <P>Debe tener 3 letras como mínimo</P>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" data-aos="fade-right">
                    <Form.Label>Apellido</Form.Label>
                    <StyledInput
                        type="text"
                        {...register("apellido", {
                            required: true,
                            minLength: 3,
                        })}
                        name="apellido"
                    />
                    {errors.apellido?.type === "required" && <P>El campo es obligatorio</P>}
                    {errors.apellido?.type === "minLength" && <P>Debe tener 3 letras como mínimo</P>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" data-aos="fade-right">
                    <Form.Label>DNI</Form.Label>
                    <StyledInput
                        type="number"
                        {...register("dni", {
                            required: true,
                        })}
                        name="dni"
                    />
                    {errors.dni?.type === "required" && <P>El campo es obligatorio</P>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" data-aos="fade-right">
                    <Form.Label>Localidad</Form.Label>
                    <StyledInput
                        type="text"
                        {...register("localidad", {
                            required: true,
                        })}
                        name="localidad"
                    />
                    {errors.localidad?.type === "required" && <P>El campo es obligatorio</P>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" data-aos="fade-right">
                    <Form.Label>Dirección</Form.Label>
                    <StyledInput
                        type="text"
                        {...register("direccion", {
                            required: true,
                        })}
                        name="direccion"
                    />
                    {errors.direccion?.type === "required" && <P>El campo es obligatorio</P>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" data-aos="fade-right">
                    <Form.Label>Número de celular</Form.Label>
                    <StyledInput
                        type="number"
                        {...register("celular", {
                            required: true,
                        })}
                        name="telefono"
                    />
                    {errors.celular?.type === "required" && <P>El campo es obligatorio</P>}
                </Form.Group>
                <hr />
                <Form.Group className="mb-3" controlId="formBasicEmail" data-aos="fade-right">
                    <Form.Label>Condición laboral</Form.Label>
                    <StyledInput
                        type="text"
                        placeholder="Monotributista/Relacion de dependencia"
                        {...register("condicion_laboral", {
                            required: true,
                        })}
                        name="condicion_laboral"
                    />
                    {errors.condicion_laboral?.type === "required" && <P>El campo es obligatorio</P>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" data-aos="fade-right">
                    <Form.Label>Antigüedad</Form.Label>
                    <StyledInput
                        type="text"
                        {...register("antigüedad", {
                            required: true,
                        })}
                        name="antiguedad"
                    />
                    {errors.antigüedad?.type === "required" && <P>El campo es obligatorio</P>}
                </Form.Group>
                <hr />
                <Form.Group className="mb-3" controlId="formBasicPassword" data-aos="fade-right">
                    <Form.Label>Monto solicitado</Form.Label>
                    <StyledInput
                        type="number"
                        placeholder="Mínimo $5.000 máximo $100.000"
                        {...register("monto_prestamo", {
                            required: true,
                            validate: montoPrestamo,
                        })}
                        name="monto"
                    />
                    {errors.monto_prestamo?.type === "required" && <P>El campo es obligatorio</P>}
                    {errors.monto_prestamo?.type === "validate" && <P>Monto entre $5.000 y $100.000</P>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" data-aos="fade-right">
                    <Form.Label>Cantidad de cuotas</Form.Label>
                    <StyledInput
                        type="number"
                        placeholder="Hasta en 12 cuotas"
                        {...register("n_cuotas", {
                            required: true,
                            validate: cantidadCuotas,
                        })}
                        name="cuotas"
                    />
                    {errors.n_cuotas?.type === "required" && <P>El campo es obligatorio</P>}
                    {errors.n_cuotas?.type === "validate" && <P>Máximo 12 cuotas</P>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" data-aos="fade-right">
                    <hr />
                    <textarea className="form-control" rows="5" id="comentarios" name="mensaje" placeholder="Deje aquí su mensaje" {...register("mensaje")}></textarea>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" data-aos="fade-right">
                    <ReCAPTCHA ref={captcha} sitekey="6LdRwdwjAAAAAJVOgCpJoA5qBkMeHkfpSm5t1eFz" onChange={onChange} />
                    {captchaValido === false && <P>Por favor acepta el captcha</P>}
                </Form.Group>
                <StyledButton variant="primary" type="submit" className="btn">
                    Enviar
                </StyledButton>
            </StyledForm>
        </StyledDiv>
    );
};

export default ContactUs;
