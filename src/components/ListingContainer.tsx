import ListingDetails from "./ListingDetails";
import ListingHeader from "./ListingHeader";
import ListingImage from "./ListingImage";
import { StyledListingContainer } from "./ListingContainer.styles";
import { useState } from "react";

interface ListingProps
{
    logo: string;
    logobackground: string;
    agentname: string;
    agentnamecolor: string;
    portrait: string;
    images: string[];
    price: string;
    address: string;
    bed: string;
    bath: string;
    car: string;
    square: string;
    type: string;
};

const ListingContainer: React.FC<ListingProps> = ({ 
    logo, 
    logobackground, 
    agentname, 
    agentnamecolor, 
    portrait, 
    images, 
    price, 
    address, 
    bed, 
    bath, 
    car, 
    square, 
    type
}) => {

    return (
      <StyledListingContainer $logobackground={logobackground} >
        <ListingHeader logo={logo} agentname={agentname} $agentnamecolor={agentnamecolor} portrait={portrait} />
        <ListingImage images={images} />
        <ListingDetails price={price} address={address} bed={bed} bath={bath} car={car} square={square} type={type} />
      </StyledListingContainer>
    );
  };
  
  export default ListingContainer;
  