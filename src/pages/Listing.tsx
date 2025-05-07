import { useLocation } from "react-router-dom";
import ExpandedListingHeader from "../components/ExpandedListingHeader";
import ExpandedListingImageContainer from "../components/ExpandedListingImageContainer";
import ExpandedPropertyDetailsContainer from "../components/ExpandedPropertyDetailsContainer";
import ExpandedListingDescription from "../components/ExpandedListingDescription";
import { StyledExpandedListing } from "../components/ExpandedListing.styles";

const Listing = () => {
  const location = useLocation();
  const listing = location.state?.listingDetails;

  return (
    <StyledExpandedListing>

      <ExpandedListingHeader logo={listing.logo} backgroundcolor={listing.logobackground} />

      <div className="mainContainer">
        <ExpandedPropertyDetailsContainer 
          address={listing.address}
          suburb={listing.suburb} 
          state={listing.state} 
          postcode={listing.postcode}
          bed={listing.bed}
          bath={listing.bath}
          car={listing.car}
          square={listing.square} 
          price={listing.price}
          type={listing.type}
        />
        <ExpandedListingImageContainer images={listing.images}/>
      </div>

      <ExpandedListingDescription 
        title={listing.descriptiontitle} 
        description={listing.description}
        address={listing.address}
        suburb={listing.suburb}
      />

    </StyledExpandedListing>
  );
};

export default Listing;
