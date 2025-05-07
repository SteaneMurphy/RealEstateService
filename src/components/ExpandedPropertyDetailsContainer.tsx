import { BedIcon, BathIcon, CarSpacesIcon, LandSizeIcon } from "../assets/ListingIcons";
import { StyledPropertyDetails } from "./ExpandedListing.styles";

interface Props
{
    address: string;
    suburb: string; 
    state: string; 
    postcode: string; 
    bed: string; 
    bath: string; 
    car: string; 
    square: string;  
    price: string;
    type: string;
} 

const ExpandedPropertyDetailsContainer = ({ address, suburb, state, postcode, bed, bath, car, square, price, type }: Props) => {

  return (
    <StyledPropertyDetails>
        <div className="address">
            <span>{address}, {suburb}, {state} {postcode}</span>
        </div>
        
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

        <div className="price">
            <span className="priceText">{price}</span>
            <span className="guideDetails">Price guide details</span>
        </div>
    </StyledPropertyDetails>
  );
};

export default ExpandedPropertyDetailsContainer;
