import { StyledHeadingContainer } from "./ListingContainer.styles";

interface ListingHeaderProps
{
    logo: string;
    agentname: string;
    $agentnamecolor: string;
    portrait: string;
};

const ListingHeader = ({ logo, agentname, $agentnamecolor, portrait }: ListingHeaderProps) => {

    return (
        <StyledHeadingContainer $agentnamecolor={$agentnamecolor}>
            <div className="listingLogo">
                <div>
                    <img src={logo}></img>
                </div>
            </div>
            <div className="agentHeader">
                <span className="agentName">{agentname}</span>
                <div className="agentPortraitContainer">
                    <img className="agentPortrait" src={portrait}></img>
                </div>
            </div>
        </StyledHeadingContainer>
    );
  };
  
  export default ListingHeader;
  