import styled from "styled-components";
import image from "../img/leon.png";

export const StyledDiv = styled.div`
    width: 100vw;
    height: 90vh;
    background-color: rgb(230, 228, 228);
    background-image: url(${image});
    background-size: 500px;
    background-repeat: no-repeat;
    background-position: bottom left;
    padding: 20px;

    @media screen and (min-width: 1800px) {
        background-color: rgb(230, 228, 228);
        background-image: url(${image});
        background-repeat: no-repeat;
        background-position: bottom left;
        background-size: 700px;
    }
    @media screen and (max-width: 960px) {
        background-color: rgb(230, 228, 228);
        background-image: url(${image});
        background-repeat: no-repeat;
        background-position: bottom left;
        background-size: 300px;
    }
    @media screen and (max-width: 450px) {
        padding: 30px;
        height: 100vh;
    }
`;
export const StyledChildDiv = styled.div`
    width: 80vh;
    position: relative;
    left: 45%;
    top: 100px;
    padding: 10px 20px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    transition: all 1s;

    &::after,
    &::before {
        content: " ";
        width: 70px;
        height: 70px;
        position: absolute;
        border: 0px solid #fff;
        transition: all 1s;
        animation-name: borde;
        animation-duration: 1.5s;
        animation-fill-mode: forwards;
    }
    &::after {
        top: -1px;
        left: -1px;
        border-top: 5px solid #e98b0f;
        border-left: 5px solid #e98b0f;
    }
    &::before {
        bottom: -1px;
        right: -1px;
        border-bottom: 5px solid #e98b0f;
        border-right: 5px solid #e98b0f;
    }

    @keyframes borde {
        100% {
            width: 110%;
            height: 110%;
        }
    }

    @media screen and (max-width: 960px) {
        width: auto;
        left: 0;
        top: 50px;
    }
    @media screen and (max-width: 650px) {
        width: auto;
        left: 0;
        top: 30px;
    }
`;
export const Styledh3 = styled.h3`
    color: darkblue;
    font-size: 2.5em;
    padding: 20px;

    @media screen and (min-width: 1700px) {
        font-size: 3.5em;
    }
    @media screen and (max-width: 960px) {
        font-size: 1.5em;
        padding: 20px;
    }
`;
