import styled from "styled-components";

export const StyledInfoCardContainer = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 55%;

    .buttons
    {
        display: flex;
    }

    .buttons *
    {
        border: 1px solid #e5e3e8;
        border-radius: 50px;
        margin-right: 10px;
    }

    .infoCards
    {
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }
`;

export const StyledInfoCard = styled.div
`
    display: flex;
    flex-direction: column;
    border: 1px solid #e5e3e8;
    border-radius: 15px;
    width: 100%;
    padding: 20px;
    margin-top: 20px;
    cursor: pointer;

    div
    {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img
    {
        width: 200px;
        height: 200px;
    }
`;