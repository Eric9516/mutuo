import React from "react";
import { StyledDiv, StyledChildDiv, Styledh3 } from "../Styles/StyledAboutUs.js";

const AboutUs = () => {
    return (
        <StyledDiv>
            <StyledChildDiv>
                <Styledh3>
                    ¡Hola! 😊 somos <strong>Mutuo</strong>, una empresa exclusiva de préstamos personales en efectivo y en el acto.
                    <br /> Cuotas fijas y en pesos.
                </Styledh3>
            </StyledChildDiv>
        </StyledDiv>
    );
};

export default AboutUs;
