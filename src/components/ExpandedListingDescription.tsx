import { StyledListingDescription } from "./ExpandedListing.styles";

interface Props
{
    title: string;
    description: string;
    address: string;
    suburb: string;
};

/*
  Description information for the single property component. It contains information pass
  to it via props from its parent. This information is then displayed in its relevant elements.

  Note: the 'dangerouslySetInnerHTML' property is used to provide paragraph spacing and newlines to the
  supplied string. It is not best practice due to the potential for a malicious client to inject HTML.
  The reason I opted to use this property was because a significant amount of code was required to split
  strings, detect for newlines vs spaces and then redisplay the seperated paragraphs into new html elements.

  This was done for time reasons and would not be done in a production environment.
*/
const ExpandedListingDescription = ({ title, description, address, suburb }: Props) => {

  return (
    <StyledListingDescription>
        <div className="descriptionMainContainer">
            <span className="descriptionTitle">{title}</span>
            <span className="descriptionAddress">{address}, {suburb}</span>
            <span dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    </StyledListingDescription>
  );
};

export default ExpandedListingDescription;
