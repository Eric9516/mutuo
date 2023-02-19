import styled from "styled-components";
import image from "../img/leon.png";

export const StyledDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    background-image: url(${image});
    background-size: 500px;
    background-repeat: no-repeat;
    background-position: bottom left;
    

    @media screen and (min-width: 1800px) {
        background-color: #fff;
        background-image: url(${image});
        background-repeat: no-repeat;
        background-position: bottom left;
        background-size: 600px;
    }
    @media screen and (max-width: 960px) {
        height: 65vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        background-color: #fff;
        background-image: url(${image});
        background-repeat: no-repeat;
        background-position: bottom left;
        background-size: 300px;
    }
    @media screen and (max-width: 450px) {
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
    }

    @media screen and (max-width: 400px) {
        height: 120vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
    }

    @media screen and (max-width: 300px) {
        height: 100vh;
    }

    /* @media screen and (min-height: 600px) and (max-height: 700px) {
        height: 120vh;
    } */
`;
export const StyledChildDiv = styled.div`
    width: 80vh;
    position: relative;
    left: 45%;
    top: 80px;
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
        animation-name: "borde";
        animation-duration: 3s;
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
        width: 70vw;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        top: 50px;
    }
    @media screen and (max-width: 650px) {
        width: 70vw;
        padding: 0;
        left: 0;
        top: 30px;
    }

    /* @media screen and (max-width: 450px) and (max-height: 800px) {
        width: 90%;
        height: 40vh;
        padding: 0;
    } */
    @media screen and (max-width: 300px) {
        width: 60vw;
    }
    @media screen and (max-height: 550px) {
        height: 60vh;
    }
`;
export const Styledh3 = styled.p`
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
