import React from "react";
import { StyledDiv, StyledChildDiv, Styledh3 } from "../styles/StyledAboutUs.js";

const AboutUs = () => {
    return (
        <StyledDiv>
            <StyledChildDiv>
                <Styledh3>
                    ¡Hola! 😊 somos <strong>MUTUO</strong>, una empresa exclusiva de préstamos personales en <strong>efectivo</strong> y <strong>en el acto</strong>.
                    <br /> Cuotas fijas y en pesos.
                </Styledh3>
            </StyledChildDiv>
        </StyledDiv>
    );
};

export default AboutUs;
