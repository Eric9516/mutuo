import styled from "styled-components";

export const WhatsappLogo = styled.div`
    width: 755px;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #fff;
    border-radius: 50%;
    /* position: fixed; */
    bottom: 0;
    right: 0;
    /* margin-right: 20px; */

    @media screen and (min-width: 1800px) {
        bottom: 70px;
    }

    @media screen and (max-width: 700px) {
        width: 50px;
        height: 50px;
        bottom: 90px;
        right: 40px;
    }
`;
