import React from "react";
import Card from "./Card";
import {
    StyledAllHome,
    DivContainer,
    StyledTitle,
} from "../Styles/StyledPorqueElegirnos";
import { whyChooseUs, easily } from "../utils/itemsCard.js";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const PorqueElegirnos = () => {
    return (
        <>
            <StyledAllHome>
                <StyledTitle data-aos="fade-left">Por que elegirnos?</StyledTitle>
                <DivContainer>
                    {whyChooseUs.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                icono={item.icono}
                                txtFront={item.textoFront}
                                txtBack={item.textoBack}
                            />
                        );
                    })}
                </DivContainer>
                <StyledTitle id="requisitos" data-aos="fade-right">
                    Obtene tu crédito con <strong>FACILIDAD</strong>
                </StyledTitle>
                <DivContainer>
                    {easily.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                icono={item.icono}
                                txtFront={item.textoFront}
                                txtBack={item.textoBack}
                            />
                        );
                    })}
                </DivContainer>
            </StyledAllHome>
        </>
    );
};

export default PorqueElegirnos;
