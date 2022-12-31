import React from "react";
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaDollarSign, FaPercent } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { AiFillBank } from "react-icons/ai";
import { RxCountdownTimer } from "react-icons/rx";
import { MdWork } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { StyledDivContainer, StyledDivChild, StyledTittle, StyledAllHome, StyledLogoWhatsapp } from "../Styles/StyledHome";

const Home = () => {
    const whatsapp = () => {
        window.location.href = "google.com";
    };
    return (
        <StyledAllHome>
            <StyledTittle className="home">Por que elegirnos?</StyledTittle>
            <StyledDivContainer>
                <StyledDivChild>
                    <BsFillStopwatchFill size="4em" />
                    <p>Solicitud simple y 100% online</p>
                </StyledDivChild>

                <StyledDivChild>
                    <FaDollarSign size="4em" />
                    <p>Acreditación inmediata</p>
                </StyledDivChild>
                <StyledDivChild>
                    <FaPercent size="4em" />
                    <p>Las mejores tasas de interés</p>
                </StyledDivChild>
                <StyledDivChild>
                    <GoChecklist size="4em" />
                    <p>Excelente atencion a nuestros clientes</p>
                </StyledDivChild>
            </StyledDivContainer>
            <StyledTittle className="home">Obtene tu crédito con facilidad</StyledTittle>
            <StyledDivContainer>
                <StyledDivChild>
                    <AiFillBank size="4em" />
                    <p>Trabajo en relación de dependencia o monotriburo</p>
                </StyledDivChild>
                <StyledDivChild>
                    <MdWork size="4em" />
                    <p>Antigüedad mínima de un año</p>
                </StyledDivChild>
                <StyledDivChild>
                    <RxCountdownTimer size="4em" />
                    <p>Tener buen comportamiento creditico los últimos 12 meses</p>
                </StyledDivChild>
            </StyledDivContainer>
            <StyledLogoWhatsapp>
                <RiWhatsappFill color="green" size="lg" onClick={whatsapp} />
            </StyledLogoWhatsapp>
        </StyledAllHome>
    );
};

export default Home;
