import React from "react";
import styled from "styled-components";

interface StyledButton{
    $backgroundColor?: string;
    $backgroundOnHover?: string;
    $fontColor?: string;
    width: number;
    height: number;
    $padding: number;
    $underline?: string;
    $fontOnHover?: string;
    $borderRadius?: number;
    $borderUnderline?: boolean;
};

export const StyledButton = styled.div<StyledButton>
`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 16px;
    border-radius: ${(props) => (props.$borderRadius)}px;
    height: ${(props) => (props.height)}px;
    width: ${(props) => (props.width)}px;
    padding: ${(props) => (props.$padding)}px;
    transition: background 200ms ease-in;
    background: ${(props) => (props.$backgroundColor)};
    color: ${(props) => (props.$fontColor)};
    border-bottom: ${(props) => (props.$borderUnderline ? "1px solid #d2d5da" : "none")};

    &:hover
    {
        background: ${(props) => (props.$backgroundOnHover)};
        cursor: pointer;
        text-decoration: ${(props) => (props.$underline)};
        color: ${(props) => (props.$fontOnHover)};
        border-bottom: ${(props) => (props.$borderUnderline ? "2px solid red" : "none")};
    }
`;