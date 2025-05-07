import { StyledListingImage } from "./ListingContainer.styles";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../assets/ListingIcons";

interface ListingImageProps
{
    images: string[];
};

/*
    This component is the sub-component of the listing container. It displays the
    images on the listing and provides the logic for the image carousel.

    When the component mounts, it is provide an array of images from its parent.
    The first index is displayed initially.

    When a user clicks the left or right arrow buttons, the next or previous image is
    rendered into the image container. The current image is stored as an index using
    the 'useState' hook and is incremented or decremented via the 'getPreviousImage'
    or 'getNextimage' functions.

    When the state variable 'currentImage' is changed, it triggers a re-render of the
    image container and displays the new image.

    The arrow buttons have the built in functions:
        - preventDefault()
        - stopPropagation()
    These functions are used to prevent the click from triggering the Link component in the
    parent. If not prevented the user would trigger a route and navigate away from the listing page.
    In this case, I wanted a click to change the picture and not cause a link traversal.
*/

const ListingImage = ({ images }: ListingImageProps) => {
    const [currentImage, setCurrentImage] = useState(images[0]);

    const getPreviousImage = () =>
    {
        const currentIndex = images.indexOf(currentImage);
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        return images[newIndex];
    };

    const getNextImage = () => 
    {
        const currentIndex = images.indexOf(currentImage);
        const newIndex = (currentIndex + 1) % images.length;
        return images[newIndex];
    };

    return (
        <StyledListingImage>
            <div className="arrows">
                <ArrowLeftIcon 
                    width={50} 
                    height={50} 
                    fill={"#d1d1d1"} 
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setCurrentImage(getPreviousImage());}}
                />
                <ArrowRightIcon 
                    width={50} 
                    height={50} 
                    fill={"#d1d1d1"} 
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setCurrentImage(getNextImage());}}/>
            </div>
            <img src={currentImage} />
        </StyledListingImage>
    );
  };
  
  export default ListingImage;
  