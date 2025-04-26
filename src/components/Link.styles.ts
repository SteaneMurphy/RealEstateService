import styled from "styled-components";

export const StyledLink = styled.div
`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    border-radius: 8px;
    height: 50px;
    width: auto;
    padding: 12px;
    transition: background 200ms ease-in;

    &:hover
    {
        background: #f6f5f7;
        cursor: pointer;
    }
`;