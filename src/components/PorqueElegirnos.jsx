import React from "react";
import Card from "../components/Card";
import { RiWhatsappFill } from "react-icons/ri";
import { StyledAllHome, LogoWhatsapp, DivContainer, StyledTitle } from "../Styles/StyledPorqueElegirnos";
import { whyChooseUs, easily } from "./itemsCard";

const PorqueElegirnos = () => {
    return (
        <>
            <StyledAllHome>
                <StyledTitle>Por que elegirnos?</StyledTitle>
                <DivContainer>
                    {whyChooseUs.map((item, index) => {
                        return <Card key={index} icono={item.icono} txtFront={item.textoFront} txtBack={item.textoBack} />;
                    })}
                </DivContainer>
                <StyledTitle id="requisitos">Obtene tu crédito con facilidad</StyledTitle>
                <DivContainer>
                    {easily.map((item, index) => {
                        return <Card key={index} icono={item.icono} txtFront={item.textoFront} txtBack={item.textoBack} />;
                    })}
                </DivContainer>
                <LogoWhatsapp>
                    <a href="https://wa.link/ubocaj" target="_blank" rel="noreferrer">
                        <RiWhatsappFill color="green" size="lg" />
                    </a>
                </LogoWhatsapp>
            </StyledAllHome>
        </>
    );
};

export default PorqueElegirnos;
