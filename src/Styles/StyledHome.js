import styled from "styled-components";
import fondo from "../img/fondo2.jpg";

export const StyledAllHome = styled.div`
    background-color: rgb(230, 228, 228);
    min-height: 140vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const StyledDivContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 30px;

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`;

export const StyledDivChild = styled.div`
    width: 20vw;
    height: 40vh;
    /* background-image: url(${fondo}); */
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    border-radius: 15px;
    transition: all 0.2s;

    & p {
        transform: translateZ(40px);
    }

    &:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 700px) {
        width: 65vw;
        height: 25vh;
    }
`;

export const StyledTittle = styled.h3`
    text-align: center;
    padding-top: 20px;
`;

export const StyledLogoWhatsapp = styled.div`
    width: 60px;
    height: 60px;
    cursor: pointer;
    background-color: #fff;
    border-radius: 50%;
    position: fixed;
    bottom: 10;
    right: 0;
    margin-right: 20px;

    @media screen and (max-width: 700px) {
        bottom: 40px;
    }
`;
