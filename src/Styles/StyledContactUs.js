import styled from "styled-components";
import { Form, Button, FormControl } from "react-bootstrap";
import image from "../img/leon2.png";

export const StyledDiv = styled.div`
    background-color: rgb(230, 228, 228);
    background-image: url(${image});
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 30px;

    @media screen and (max-width: 1100px) {
        background-color: rgb(230, 228, 228);
        background-image: url(${image});
        background-repeat: no-repeat;
        background-position: bottom right;
        background-size: 300px;
    }

    @media screen and (max-width: 800px) {
        background-color: rgb(230, 228, 228);
        background-image: url(${image});
        background-repeat: no-repeat;
        background-position: bottom right;
        background-size: 200px;
    }
`;

export const StyledForm = styled(Form)`
    width: 50vw;
    margin-left: auto;
    margin-right: auto;
`;

export const Myh2 = styled.h2`
    width: 24ch;
    margin-top: 20px;
    text-align: center;
    font-family: monospace;
    color: rgb(55, 55, 141);
    border-right: 4px solid rgb(55, 55, 141);
    /* animation: tipyng 2s steps(12), blink 0.5s infinite step-end alternate; */
    animation: blink 0.5s infinite step-end alternate;
    overflow: hidden;
    /* 
    @keyframes tipyng {
        from {
            width: 0;
        }
        to {
            width: 24ch;
        }
    } */
    @keyframes blink {
        50% {
            border-color: transparent;
        }
    }
`;

export const StyledButton = styled(Button)`
    margin-bottom: 20px;
`;

export const StyledInput = styled(FormControl)`
    background-color: rgb(255, 255, 228);
`;
