import React, { useContext, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import {
    StyledDiv,
    StyledForm,
    StyledInput,
    StyledButton,
    Myh2,
    P,
    A,
    Div,
    DivCondicionLaboral,
} from "../Styles/StyledContactUs.js";
import AOS from "aos";
import "aos/dist/aos.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { localidad } from "../validations/validator.js";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { ValoresContext } from "../context/valoresContext.jsx";

AOS.init();

const estilos = {
    div: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
    },
};

const ContactUs = () => {
    const [captchaValido, setCaptchaValido] = useState(null);
    const [condicionLaboral, setCondicionLaboral] = useState(false);
    const [valorInput, setValorInput] = useState("");
    const captcha = useRef(null);
    const context = useContext(ValoresContext);

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
            Swal.fire({
                title: "Mensaje enviado con exito.",
                text: "Nos pondremos en contacto con usted a la brevedad.",
                icon: "success",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Volver",
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            });
        } else {
            setCaptchaValido(false);
            e.preventDefault();
        }
    };

    return (
        <StyledDiv id="contactUs">
            <Myh2 data-aos="fade-right">Formulario de solicitud</Myh2>
            <StyledForm onSubmit={handleSubmit(submit)}>
                <Div>
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
                        {errors.nombre?.type === "minLength" && (
                            <P>Debe tener 3 letras como mínimo</P>
                        )}
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
                        {errors.apellido?.type === "minLength" && (
                            <P>Debe tener 3 letras como mínimo</P>
                        )}
                    </Form.Group>
                </Div>
                <Div>
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
                        <Form.Label>Número de celular</Form.Label>
                        <StyledInput
                            type="number"
                            {...register("telefono", {
                                required: true,
                            })}
                            name="telefono"
                        />
                        {errors.telefono?.type === "required" && <P>El campo es obligatorio</P>}
                    </Form.Group>
                </Div>
                <Div>
                    <Form.Group className="mb-3" controlId="formBasicEmail" data-aos="fade-right">
                        <Form.Label>Localidad</Form.Label>
                        <StyledInput
                            type="text"
                            {...register("localidad", {
                                required: true,
                                validate: localidad,
                            })}
                            name="localidad"
                        />
                        {errors.localidad?.type === "required" && <P>El campo es obligatorio</P>}
                        {errors.localidad?.type === "validate" && (
                            <P>Servicio disponible para personas de Leones, Córdoba</P>
                        )}
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
                </Div>

                <hr />
                <Form.Label data-aos="fade-right">Condicion laboral</Form.Label>
                <DivCondicionLaboral data-aos="fade-right">
                    {["radio"].map((type) => (
                        <div key={`inline-${type}`} className="mb-3" style={estilos.div}>
                            <Form.Check
                                inline
                                label="Monotributista"
                                name="group1"
                                type={type}
                                required
                                onClick={() => {
                                    setCondicionLaboral(false);
                                    setValorInput("Monotributista");
                                }}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="En relacion de dependencia"
                                name="group1"
                                type={type}
                                required
                                onClick={() => {
                                    setCondicionLaboral(false);
                                    setValorInput("En relacion de dependencia");
                                }}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                inline
                                label="Otro"
                                name="group1"
                                type={type}
                                required
                                onClick={() => {
                                    setCondicionLaboral(true);
                                    setValorInput("");
                                }}
                                id={`inline-${type}-3`}
                            />
                        </div>
                    ))}
                    <Form.Control
                        type="text"
                        value={valorInput}
                        hidden
                        name="condicion_laboral"
                    ></Form.Control>
                    {condicionLaboral && (
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                            data-aos="fade-right"
                        >
                            <Form.Label>Defina su condicion laboral</Form.Label>
                            <StyledInput
                                type="text"
                                {...register("condicion", { required: true })}
                                name="condicion"
                            />

                            {errors.condicion?.type === "required" && (
                                <P>El campo es obligatorio</P>
                            )}
                        </Form.Group>
                    )}
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                        data-aos="fade-right"
                    >
                        <Form.Label>Antigüedad</Form.Label>
                        <StyledInput
                            type="number"
                            {...register("antiguedad", { required: true })}
                            name="antiguedad"
                        />
                        {errors.antiguedad?.type === "required" && <P>El campo es obligatorio</P>}
                    </Form.Group>
                </DivCondicionLaboral>

                <hr />
                <Div>
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                        data-aos="fade-right"
                    >
                        <Form.Label>Monto solicitado</Form.Label>
                        <A href="#cotizador">
                            <StyledInput type="number" value={context.monto} name="monto" />
                        </A>
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                        data-aos="fade-right"
                    >
                        <Form.Label>Cantidad de cuotas</Form.Label>
                        <A href="#cotizador">
                            <StyledInput type="number" value={context.cuota} name="cuotas" />
                        </A>

                        {errors.cuotas?.type === "required" && <P>El campo es obligatorio</P>}
                        {errors.cuotas?.type === "validate" && <P>Máximo 12 cuotas</P>}
                    </Form.Group>
                </Div>
                <Form.Group className="mb-3" controlId="formBasicPassword" data-aos="fade-right">
                    <hr />
                    <textarea
                        className="form-control"
                        rows="5"
                        id="comentarios"
                        name="mensaje"
                        placeholder="Deje aquí su mensaje"
                        {...register("mensaje")}
                    ></textarea>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" data-aos="fade-right">
                    <ReCAPTCHA
                        ref={captcha}
                        sitekey="6LdRwdwjAAAAAJVOgCpJoA5qBkMeHkfpSm5t1eFz"
                        onChange={onChange}
                    />
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
