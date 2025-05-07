import React from "react";
import { StyledFooterLink } from "./Footer.styles";

interface FooterLinkProps {
  text: string;
}

/*
  Just some placeholder links and text for display purposes only.
  Populated in the footer parent component.
*/

const FooterLink: React.FC<FooterLinkProps> = ({ text }) => {
  return (
    <StyledFooterLink href="#">{text}</StyledFooterLink>
  );
};

export default FooterLink;