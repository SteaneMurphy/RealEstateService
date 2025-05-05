import React from "react";
import { StyledFooterLink } from "./Footer.styles";

interface FooterLinkProps {
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ text }) => {
  return (
    <StyledFooterLink href="#">{text}</StyledFooterLink>
  );
};

export default FooterLink;