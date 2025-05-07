import { StyledImageContainer } from "./ExpandedListing.styles";

interface Props
{
    images: string[];
};

/*
    Image container for images in a single property lisiting. As per the original
    website, the images displayed are:
        - first index
        - last index
        - second index
        - third index

    The last image index is calculated below and then sent as a value to the 
    main image element for display.
*/

const ExpandedListingImageContainer = ({ images }: Props) => {
    const lastImage = images[images.length - 1];

    return (
        <StyledImageContainer>
            <div className="mainImage">
                <img src={images[0]} />
            </div>
            <div className="sideImages">
                <div>
                    <img src={lastImage} className="sideImage" />
                </div>
                <div>
                    <img src={images[1]} className="sideImage" />
                </div>
                <div>
                    <img src={images[2]} className="sideImage" />
                </div>
            </div>
        </StyledImageContainer>
    );
};

export default ExpandedListingImageContainer;
