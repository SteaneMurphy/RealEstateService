import styled from "styled-components";

export const StyledListingParent = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;

    .listingTitles
    {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 600px;
        margin-bottom: 10px;
    }

    hr
    {
        border: none;
        width: 600px;
        border-top: 1px solid #e5e3e8;
        margin-bottom: 20px;
    }
`;

interface ListingContainerProps{
    $logobackground: string;
};

export const StyledListingContainer = styled.div<ListingContainerProps>
`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    background: ${(props) => (props.$logobackground)};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 0.0625rem 0.25rem 0px;
    margin-bottom: 40px;
    z-index: 1;
`;

interface HeadingContainerProps{
    $agentnamecolor: string;
}

export const StyledHeadingContainer = styled.div<HeadingContainerProps>
`
    display: flex;
    height: 65px;
    z-index: 1;

    .listingLogo
    {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 65px;
        margin-left: 10px;
    }

    .listingLogo > div
    {
        display: flex;
        align-items: center;
    }

    .agentHeader
    {
        display: flex;
        justify-content: flex-end;
        position: absolute;
        width: 600px;
    }

    .agentPortraitContainer
    {
        position: relative;
        top: 10px;
        right: 10px;
        width: 80px;
    }

    .agentPortrait
    {
        border-radius: 50%;
        border: 2px solid white;
        width: 100%;
        height: auto;
    }

    .agentName
    {
        padding-top: 25px;
        margin-right: 20px;
        font-size: 14px;
        color: ${(props) => (props.$agentnamecolor)}
    }
`;

export const StyledListingDetails = styled.div
`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 0 0 15px 15px;
    padding: 20px;
    z-index: 1;

    .priceContainer
    {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    .price
    {
        font-size: 20px;
        font-weight: 600;
        color: #3d3b40;
    }

    .starIcon
    {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 8px;
        margin-right: 5px;
    }

    .starIcon:hover
    {
        background: #f6f5f7;
    }

    .propertyDetails
    {
        display: flex;
        align-items: center;
    }

    .propertyDetails > div
    {
        margin-right: 10px;
        margin-top: 5px;
        display: flex;
        gap: 10px;
    }
`;

export const StyledListingImage = styled.div
`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    position: relative;
    z-index: 0;

    .arrows
    {
        display: flex;
        position: absolute;
        justify-content: space-between;
        width: 100%;
        padding: 10px;

        svg {
            pointer-events: auto;
            cursor: pointer;
            transition: fill 0.2s ease;

            &:hover {
                fill: #ffffff;
            }
        }
    }

    .arrows:hover
    {
        
    }
`;