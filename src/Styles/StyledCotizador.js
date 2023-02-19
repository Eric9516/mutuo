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

    @media screen and (max-width: 500px) {
        margin-top: 40px;
        margin-bottom: 40px;
    }
    /* @media screen and (min-height: 700px) {
        margin-top: 10px;
        margin-bottom: 10px;
    } */
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
    box-shadow: 0px 0px 6px 4px #777;

    @media screen and (max-width: 960px) {
        width: 80vw;
        height: 70vh;
        padding: 10px;
        gap: 30px;
    }
    @media screen and (max-width: 400px) {
        width: 95vw;
        height: 90vh;
        padding: 10px;
        gap: 30px;
        margin-bottom: 20px;
    }
    @media screen and (min-height: 700px) {
        width: 80vw;
        height: 65vh;
        padding: 10px;
        gap: 30px;
        margin-bottom: 20px;
    }
    @media screen and (min-width: 1500px) {
        width: 40vw;
        height: 65vh;
        padding: 10px;
        gap: 30px;
        margin-bottom: 20px;
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

export const Transf = styled.strong`
    color: #00a61a;
`;

export const Efect = styled.strong`
    color: red;
    font-weight: 400;
    text-decoration: line-through;
`;
