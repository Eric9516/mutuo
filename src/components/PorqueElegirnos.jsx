import React from "react";
import Card from "../components/Card";
import { RiWhatsappFill } from "react-icons/ri";
import { StyledAllHome, StyledLogoWhatsapp, StyledDivContainer, StyledTitle } from "../Styles/StyledPorqueElegirnos";

const PorqueElegirnos = () => {
    return (
        <>
            <StyledAllHome>
                <StyledTitle>Por que elegirnos?</StyledTitle>
                <StyledDivContainer>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </StyledDivContainer>
                <StyledTitle>Obtene tu crédito con facilidad</StyledTitle>
                <StyledDivContainer>
                    <Card />
                    <Card />
                    <Card />
                </StyledDivContainer>
                <StyledLogoWhatsapp>
                    <a href="https://wa.link/ubocaj .">
                        <RiWhatsappFill color="green" size="lg" />
                    </a>
                </StyledLogoWhatsapp>
            </StyledAllHome>
        </>
    );
};

export default PorqueElegirnos;
