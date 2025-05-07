import React from "react";

import { StyledListingDescription } from "./ExpandedListing.styles";

interface Props
{
    title: string;
    description: string;
    address: string;
    suburb: string;
};

const ExpandedListingDescription = ({ title, description, address, suburb }: Props) => {

  return (
    <StyledListingDescription>
        <div className="descriptionMainContainer">
            <span className="descriptionTitle">{title}</span>
            <span className="descriptionAddress">{address}, {suburb}</span>
            <span dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    </StyledListingDescription>
  );
};

export default ExpandedListingDescription;
