import styled from "styled-components"

export const StyledFooter = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: center;

    .footerButtons
    {
        display: flex;
        margin-top: 20px;
    }

    .footerHeading
    {
        display: flex;
        justify-content: flex-start;
        width: 55%;
        margin-top: 20px;
    }

    .footerLinksParentContainer
    {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .footerLinksSubContainer
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 55%;
        margin-top: 20px;
    }
`;

export const StyledFooterLink = styled.a
`
    flex: 0 0 calc(33.33% - 1rem);
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    text-decoration: underline;
    margin-top: 5px;
    color: #726e75;
`;