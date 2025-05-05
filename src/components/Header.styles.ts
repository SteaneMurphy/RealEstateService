import styled from "styled-components";
import Search from "./Search.tsx";

interface HeroProps{
    $backgroundImage: string;
};

export const HeroContainer = styled.div<HeroProps>
`
    background-image: url(${(props) => (props.$backgroundImage)});
    background-size: cover;
    background-position: center;
    width: 55%;
    height: 300px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .titleContainer
    {
        display: flex;
        align-items: center;
        height: 25%;
    }

    h1
    {
        font-size: 17px;
        font-weight: 500;
    }
`;

export const SearchContainer = styled(Search)
`
    background: white;
    border-radius: 8px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;

    .topButtons
    {
        display: flex;
    }

    .botButtons
    {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
    }

    .filterButtons
    {
        display: flex;
    }
`;

export const SearchbarWrapper = styled.div
`
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: 100%;

    &:hover
    {
        background: #f6f5f7;
        border-radius: 8px 8px 8px 8px;
    }
`;

export const InputContainer = styled.input
`
    outline: none;
    border: none;
    font-size: 16px;
    margin-left: 20px;
    height: 50px;
    width: 100%;

    &:hover
    {
        background: #f6f5f7;
        border-radius: 8px 8px 8px 8px;
    }
`;