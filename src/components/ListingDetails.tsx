import { StyledListingDetails } from "./ListingContainer.styles";
import { BedIcon, BathIcon, CarSpacesIcon, LandSizeIcon, StarIcon } from "../assets/ListingIcons";

interface ListingDetailsProps
{
    price: string;
    address: string;
    suburb: string;
    state: string;
    postcode: string;
    bed: string;
    bath: string;
    car: string;
    square: string;
    type: string;
};

/*
    Listing sub-component. Displays information sent to it from its parent component into the 
    relevant elements.

    This component calls SVG icon sub-components and passes width/height to them as props.
*/

const ListingDetails = ({ price, address, suburb, state, postcode, bed, bath, car, square, type }: ListingDetailsProps) => {

    return (
        <StyledListingDetails>
            <div className="priceContainer">
                <span className="price">{price}</span>
                <div className="starIcon">
                    <StarIcon width={24} height={24} />
                </div>
            </div>
            <span className="address">{address}, {suburb}</span>
            <div className="propertyDetails">
                <div>
                    <BedIcon width={18} height={18} />
                    <span>{bed}</span>
                </div>
                <div>
                    <BathIcon width={18} height={18} />
                    <span>{bath}</span>
                </div>
                <div>
                    <CarSpacesIcon width={18} height={18} />
                    <span>{car}</span>
                </div>
                <div>
                    <LandSizeIcon width={18} height={18} />
                    <span>{square}</span>
                </div>
                <div>
                    <span className="dot">{"•"}</span>
                    <span>{type}</span>
                </div>
            </div>
        </StyledListingDetails>
    );
  };
  
  export default ListingDetails;
  