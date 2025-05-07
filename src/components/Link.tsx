import React from "react";
import { Link } from "react-router-dom";
import { StyledLink } from "./Link.styles";

interface LinkProps{
    linkName: string;
};

const CustomLink: React.FC<LinkProps> = ({ linkName }) => {

    return (
        <Link to="/">
            <StyledLink>{linkName}</StyledLink>
        </Link>
    );
};

export default CustomLink;