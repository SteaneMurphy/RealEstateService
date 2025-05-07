import { StyledHeader } from "./ExpandedListing.styles";

interface ExpandedListingHeaderProps
{
    logo: string;
    backgroundcolor: string;
};

/*
    Header with logo for the single property view. It is passed a logo src and color value from its parent component.
    It renders the image via the path provided and sends the background colour to the styled component to adjust its css value.
*/
const ExpandedListingHeader = ({ logo, backgroundcolor }: ExpandedListingHeaderProps) => {
  
    return (
        <StyledHeader $backgroundcolor={backgroundcolor}>
            <img src={logo} />
        </StyledHeader>
    );
  };
  
  export default ExpandedListingHeader;
  