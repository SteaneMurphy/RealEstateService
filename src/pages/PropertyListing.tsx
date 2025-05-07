import { fetchListingData } from "../backend/FirebaseService";
import ListingContainer from "../components/ListingContainer";
import { useEffect, useState } from "react";
import { StyledListingParent} from "../components/ListingContainer.styles";

/*
  This is the PropertyListing page or view. This view provides search results
  to the user in the form of ListingContainers in a column view.

  Upon searching, this component queries the Firestore database for the
  listing results for a specific suburb. Due to time constraints, this
  search is automatically coded to fetch results for the suburb of 
  'Emerald'.

  The fetch is conducted using the equivalent of a backend query from the
  'FirebaseService' script. These APIs would normally be handled on a backend
  server and not exposed to the client application. For the sake of testing
  the backend functionality was added to the client application.

  The particular API call being used is 'fetchListingData' which returns a
  JSON object of listing data for each property stored in the document. As the
  results are already JSON, they do not need to be converted after retreival.

  Once the component loads, the useEffect hook is used (on mount) to call the
  fetching function. The returned results are stored in local component state
  using the 'useState' hook, specifically into the 'listingData' variable. This
  variable is set or changed using the 'setListingData' function.
*/

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
      {/* 
        This logic checks that the state variable 'listingData' exists and that it is
        not empty. If this logic is true, the array that is returned is iterated over
        using the map function and for each entry a new 'ListingContainer' component is
        rendered on the DOM.

        Each component is given an index as required by React to manage multiple versions
        of the same rendered component. Alongside this index prop, the information in each
        index of 'listingData' is passed as a prop 'listing' to its rendered component.

        This prop is sent using the '...' seperator to avoid typing out every field into
        the component.
      */}
      {listingData && listingData.length > 0 && listingData.map((listing, index) => (
        <ListingContainer key={index} {...listing} />
      ))}
    </StyledListingParent>
  );
};

export default PropertyListing;
