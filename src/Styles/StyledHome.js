import styled from "styled-components";

export const StyledAllHome = styled.div`
    background-color: rgb(230, 228, 228);
    height: 140vh;
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
`;

export const StyledDivChild = styled.div`
    width: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const StyledTittle = styled.h3`
    text-align: center;
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
`;
