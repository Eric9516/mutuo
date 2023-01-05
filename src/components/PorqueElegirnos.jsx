import React from "react";
import Card from "../components/Card";
import { RiWhatsappFill } from "react-icons/ri";
import { StyledAllHome, StyledLogoWhatsapp, StyledDivContainer, StyledTitle } from "../Styles/StyledPorqueElegirnos";
import { whyChooseUs, easily } from "./itemsCard";

const PorqueElegirnos = () => {
    return (
        <>
            <StyledAllHome>
                <StyledTitle>Por que elegirnos?</StyledTitle>
                <StyledDivContainer>
                    {whyChooseUs.map((item, index) => {
                        return <Card key={index} icono={item.icono} txtFront={item.textoFront} txtBack={item.textoBack} />;
                    })}
                </StyledDivContainer>
                <StyledTitle id="requisitos">Obtene tu crédito con facilidad</StyledTitle>
                <StyledDivContainer>
                    {easily.map((item, index) => {
                        return <Card key={index} icono={item.icono} txtFront={item.textoFront} txtBack={item.textoBack} />;
                    })}
                </StyledDivContainer>
                <StyledLogoWhatsapp>
                    <a href="https://wa.link/ubocaj" target="_blank" rel="noreferrer">
                        <RiWhatsappFill color="green" size="lg" />
                    </a>
                </StyledLogoWhatsapp>
            </StyledAllHome>
        </>
    );
};

export default PorqueElegirnos;
