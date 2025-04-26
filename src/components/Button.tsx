import React from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps{
    buttonName: string;
    backgroundColor?: string;
    backgroundOnHover?: string;
    fontColor?: string;
    width: number;
    height: number;
    padding: number;
    underline?: boolean;
    fontOnHover?: string;
    borderRadius?: number;
    borderUnderline?: boolean;
    border?: boolean;
    onClick?: () => void;
    icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ 
    buttonName, 
    width, 
    height, 
    padding, 
    backgroundColor, 
    backgroundOnHover, 
    fontColor, 
    underline, 
    fontOnHover, 
    borderRadius, 
    borderUnderline,
    onClick,
    icon,
 }) => {

    return (
        <>
            <StyledButton 
                fontColor={fontColor} 
                width={width} 
                height={height} 
                padding={padding} 
                backgroundColor={backgroundColor} 
                backgroundOnHover={backgroundOnHover}
                underline={underline ? "underline" : "none"}
                fontOnHover={fontOnHover}
                borderRadius={borderRadius}
                borderUnderline={borderUnderline}
                onClick={onClick}
            >
                {icon}
                {buttonName}
            </StyledButton>
        </>
    );
};

export default Button;