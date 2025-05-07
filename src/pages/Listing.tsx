import { useLocation } from "react-router-dom";
import ExpandedListingHeader from "../components/ExpandedListingHeader";
import ExpandedListingImageContainer from "../components/ExpandedListingImageContainer";
import ExpandedPropertyDetailsContainer from "../components/ExpandedPropertyDetailsContainer";
import ExpandedListingDescription from "../components/ExpandedListingDescription";
import { StyledExpandedListing } from "../components/ExpandedListing.styles";

/*
  This is the Listing page or view. This view provides specific results for a single property
  once a user has clicked on it in the 'PropertyListing' view.

  This component uses the 'useLocation' and 'location.state' functionality built into the
  React-Router library. The location variable allows the application to use a form of very
  localalised state from its parent component.

  In this case, the state is sent in from the parent component and then retreived and used by
  first:
    - accessing the state by using the 'useLocation' function
    - using the state by accessing the 'location.state' variable
  
  This state is then used to access individual props for display in this component. This was preferable
  to storing all this information in global state, as the parent component has already fetched and stored
  the listing data for us to use.
*/

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
