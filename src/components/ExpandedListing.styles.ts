import styled from "styled-components";

export const StyledExpandedListing = styled.div
`


    .mainContainer
    {
        display: flex;
        background: #f6f5f7;
        width: 100%;
        justify-content: flex-end;
    }
`;

interface StyledHeaderProps{
    $backgroundcolor: string;
}

export const StyledHeader = styled.div<StyledHeaderProps>
`
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => (props.$backgroundcolor)}
`;

export const StyledImageContainer = styled.div
`
    display: flex;
    flex-direction: row;
    gap: 3px;
    background: #f6f5f7;
    width: 100%;
    justify-content: center;

    .mainImage
    {
        width: 960px;
        height: 456px;
    }

    .mainImage > img
    {
        width: 960px;
        height: 456px;
        object-fit: cover;
    }

    .sideImages
    {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }

    .sideImages > div
    {
        width: 250px;
        height: 150px;
    }

    .sideImage
    {
        width: 250px;
        height: 150px;
        object-fit: cover;
    }
`;

export const StyledPropertyDetails = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 350px;
    padding-left: 40px;

    .address
    {
        font-size: 25px;
        font-weight: 600;
        width: 100%;
        padding-top: 30px;
    }

    .propertyDetails
    {
        display: flex;
        align-items: center;
        gap: 5px;

    }

    .dot
    {
        margin-right: 10px;
    }

    .price
    {
        display: flex;
        flex-direction: column;
        margin-top: 200px;
        gap: 10px;
    }

    .priceText
    {
        font-size: 20px;
        font-weight: 600;
    }

    .guideDetails
    {
        color: #00639e;
        font-weight: 500;
        cursor: pointer;
    }
`;

export const StyledListingDescription = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .descriptionMainContainer
    {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 800px;
        gap: 10px;
    }

    .descriptionTitle
    {
        font-weight: 600;
        margin-top: 20px;
    }

    .descriptionAddress
    {
        font-size: 15px;
        color: #8e8b90;
    }
`;