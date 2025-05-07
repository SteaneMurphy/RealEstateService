import { StyledImageContainer } from "./ExpandedListing.styles";

interface Props
{
    images: string[];
};

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
