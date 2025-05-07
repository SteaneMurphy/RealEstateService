import { StyledHeader } from "./ExpandedListing.styles";

interface ExpandedListingHeaderProps
{
    logo: string;
    backgroundcolor: string;
};

const ExpandedListingHeader = ({ logo, backgroundcolor }: ExpandedListingHeaderProps) => {
  
    return (
        <StyledHeader $backgroundcolor={backgroundcolor}>
            <img src={logo} />
        </StyledHeader>
    );
  };
  
  export default ExpandedListingHeader;
  