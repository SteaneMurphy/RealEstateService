import styled from "styled-components";

export const NavbarContainer = styled.div
`
    display: flex;
    justify-content: space-between;
    width: 55%;
    height: 100px;

    .logo
    {
        display: flex;
        align-items: center;
        margin-right: 40px;
        cursor: pointer;
    }

    .subContainer
    {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;