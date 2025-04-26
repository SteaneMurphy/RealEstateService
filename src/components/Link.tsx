import React from "react";
import { StyledLink } from "./Link.styles";

interface LinkProps{
    linkName: string;
};

const Link: React.FC<LinkProps> = ({ linkName }) => {

    return (
        <StyledLink>{linkName}</StyledLink>
    );
};

export default Link;