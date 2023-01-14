import styled from "styled-components";

export const StyledAllHome = styled.div`
    width: 100vw;
    height: 90vh;
    background-color: rgb(230, 228, 228);
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media screen and (min-width: 1800px) {
        gap: 35px;
    }
`;

export const DivContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 30px;
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
    color: rgb(55, 55, 141);
`;
