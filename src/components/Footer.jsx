import React from "react";
import { BsFacebook, BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { A, Div1, Div2, DivContenedor, DivFooter, Redes, Ul } from "../Styles/StyledFooter.js";

const Footer = () => {
    return (
        <>
            <DivFooter>
                <DivContenedor>
                    <Div1>
                        <Ul>
                            <h5>Encontranos en nuestras redes sociales</h5>
                            <Redes>
                                <li>
                                    <a href="http://facebook.com" target="_blank" rel="noreferrer">
                                        <BsFacebook size="2em" color="blue" />
                                    </a>
                                </li>
                                <li>
                                    <a href="http://instagram.com" target="_blank" rel="noreferrer">
                                        <BsInstagram size="2em" />
                                    </a>
                                </li>
                            </Redes>
                        </Ul>
                        <Ul>
                            <h5>Contactanos</h5>
                            <li>
                                <BsFillTelephoneFill size="1.5em" /> 3472-469992
                            </li>
                            <li>
                                <MdEmail size="1.5em" /> mutuocreditos@hotmail.com
                            </li>
                        </Ul>
                    </Div1>
                    <Div2>
                        <Ul>
                            <li>
                                <A href="#nav">
                                    <FaArrowUp size="2em" /> Volver al inicio
                                </A>
                            </li>
                        </Ul>
                    </Div2>
                </DivContenedor>
            </DivFooter>
        </>
    );
};

export default Footer;
