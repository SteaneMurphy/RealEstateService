import { StyledListingImage } from "./ListingContainer.styles";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../assets/ListingIcons";

interface ListingImageProps
{
    images: string[];
};

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
  