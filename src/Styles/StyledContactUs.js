import styled from "styled-components";
import { Form, Button, FormControl } from "react-bootstrap";
import image from "../img/leon2.png";

export const StyledDiv = styled.div`
    background-color: rgb(230, 228, 228);
    background-image: url(${image});
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: 400px;

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
    text-align: center;
    padding-top: 20px;
    color: rgb(55, 55, 141);
`;

export const StyledButton = styled(Button)`
    margin-bottom: 20px;
`;

export const StyledFormControl = styled(FormControl)`
    background-color: rgb(255, 255, 240);
`;
