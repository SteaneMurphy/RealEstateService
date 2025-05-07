import { StyledHeadingContainer } from "./ListingContainer.styles";

interface ListingHeaderProps
{
    logo: string;
    agentname: string;
    $agentnamecolor: string;
    portrait: string;
};

/*
    Listing sub-component. Passes props to its styled component and displays information
    sent from its parent in the relevant elements
*/

const ListingHeader = ({ logo, agentname, $agentnamecolor, portrait }: ListingHeaderProps) => {

    return (
        <StyledHeadingContainer $agentnamecolor={$agentnamecolor}>
            <div className="listingLogo">
                <div>
                    <img src={logo} />
                </div>
            </div>
            <div className="agentHeader">
                <span className="agentName">{agentname}</span>
                <div className="agentPortraitContainer">
                    <img className="agentPortrait" src={portrait} />
                </div>
            </div>
        </StyledHeadingContainer>
    );
  };
  
  export default ListingHeader;
  