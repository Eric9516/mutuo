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
                    {whyChooseUs.map((item) => {
                        return <Card key={item.id} icono={item.icono} txtFront={item.textoFront} txtBack={item.textoBack} />;
                    })}
                </StyledDivContainer>
                <StyledTitle>Obtene tu crédito con facilidad</StyledTitle>
                <StyledDivContainer>
                    {easily.map((item) => {
                        return <Card key={item.id} icono={item.icono} txtFront={item.textoFront} txtBack={item.textoBack} />;
                    })}
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
