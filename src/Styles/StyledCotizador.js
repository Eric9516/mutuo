import styled from "styled-components";

export const StyledCotAll = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`;

export const Titulo = styled.h1`
    color: rgb(55, 55, 141);
`;

export const DivCentral = styled.div`
    width: 60vw;
    height: 70vh;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    background-color: rgb(230, 228, 228);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    @media screen and (max-width: 960px) {
        width: 80vw;
        height: 70vh;
        padding: 10px;
        gap: 30px;
    }
`;

export const DivIndividual = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 960px) {
        width: 40%;
        flex-direction: column;
        justify-content: center;
    }
`;

export const DivBoton = styled.div`
    border: none;
    background-color: inherit;
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 5px;

    @media screen and (max-width: 960px) {
        flex-direction: row;
    }
`;
export const Divh4 = styled.div`
    width: 200px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 960px) {
        margin-bottom: 10px;
    }
`;
