import ListingDetails from "./ListingDetails";
import ListingHeader from "./ListingHeader";
import ListingImage from "./ListingImage";
import { StyledListingContainer } from "./ListingContainer.styles";
import { Link } from "react-router-dom";

interface ListingProps
{
    id?: string;
    logo: string;
    logobackground: string;
    agentname: string;
    agentnamecolor: string;
    portrait: string;
    images: string[];
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
    descriptiontitle: string;
    description: string;
};

/*
  This component is the main container for a single property listing. It is a wrapper
  for a collection of sub-components. The entire component is wrapped in a Link element
  from the React-Router. When a user clicks on this component, it calls the relevant page/view
  as per the associated route stored in the App component.

  In this case, it is the '/listing' route, which is dynamic. The precreated slug is sent to the route
  so that each property listing has a unique url that defines its location in the application.

  The slug is a combination of the property variables to ensure its uniqueness including its document id
  from the firestore database. This may not be very secure to provide such IDs but was used for quick 
  testing purposes.
*/

const ListingContainer: React.FC<ListingProps> = ({
    id, 
    logo, 
    logobackground, 
    agentname, 
    agentnamecolor, 
    portrait, 
    images, 
    price, 
    address,
    suburb,
    state,
    postcode, 
    bed, 
    bath, 
    car, 
    square, 
    type,
    descriptiontitle,
    description
}) => {

    const slug = `property-${type.toLowerCase()}-${state.toLowerCase()}-${suburb.toLowerCase()}-${id}`;

    return (
      <Link 
        to={`/listing/${slug}`}
        state={{ listingDetails: {     
          id, 
          logo, 
          logobackground, 
          agentname, 
          agentnamecolor, 
          portrait, 
          images, 
          price, 
          address,
          suburb,
          state,
          postcode, 
          bed, 
          bath, 
          car, 
          square, 
          type,
          descriptiontitle,
          description
        }}}
      >
        <StyledListingContainer $logobackground={logobackground} >
          <ListingHeader logo={logo} agentname={agentname} $agentnamecolor={agentnamecolor} portrait={portrait} />
          <ListingImage images={images} />
          <ListingDetails price={price} address={address} suburb={suburb} state={state} postcode= {postcode} bed={bed} bath={bath} car={car} square={square} type={type} />
        </StyledListingContainer>
      </Link>
    );
  };
  
  export default ListingContainer;
  