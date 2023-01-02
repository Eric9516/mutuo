import React, { useState } from "react";
import Card from "../components/Card";
import { RiWhatsappFill } from "react-icons/ri";
import { StyledAllHome, StyledLogoWhatsapp } from "../Styles/StyledPorqueElegirnos";

const PorqueElegirnos = () => {
    return (
        <StyledAllHome>
            <Card />
            <Card />
            <Card />
            <Card />
            <StyledLogoWhatsapp>
                <a href="https://wa.link/ubocaj .">
                    <RiWhatsappFill color="green" size="lg" />
                </a>
            </StyledLogoWhatsapp>
        </StyledAllHome>
    );
};

export default PorqueElegirnos;
