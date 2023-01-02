import styled from "styled-components";
import fondo from "../img/fondo2.jpg";

export const StyledAllHome = styled.div`
    width: 100vw;
    height: 90vh;
    background-color: rgb(230, 228, 228);
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media screen and (min-width: 1800px) {
        gap: 35px;
    }
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

export const StyledTitle = styled.h3`
    text-align: center;
    padding-top: 20px;
`;

export const StyledLogoWhatsapp = styled.div`
    width: 75px;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #fff;
    border-radius: 50%;
    position: fixed;
    bottom: 15px;
    right: 0;
    margin-right: 20px;

    @media screen and (min-width: 1800px) {
        bottom: 70px;
    }

    @media screen and (max-width: 700px) {
        bottom: 40px;
    }
`;
