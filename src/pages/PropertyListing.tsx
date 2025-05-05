import { fetchListingData } from "../backend/FirebaseService";
import ListingContainer from "../components/ListingContainer";
import { useEffect, useState } from "react";
import { StyledListingParent} from "../components/ListingContainer.styles";

const PropertyListing = () => {
  const [listingData, setListingData] = useState<any[]>([]);

  useEffect(() => {
    const getListingData = async () => {
      const results = await fetchListingData();
      if(results)
      {
          setListingData(results);
      }
    };
    getListingData();
  }, []);

  return (
    <StyledListingParent>
      <div className="listingTitles">
        <span>Real Estate & Property for sale in {}</span>
        <span>Showing {} - {} of {} properties</span>
      </div>
      <hr></hr>
      {listingData && listingData.length > 0 && listingData.map((listing, index) => (
        <ListingContainer key={index} {...listing} />
      ))}
    </StyledListingParent>
  );
};

export default PropertyListing;
