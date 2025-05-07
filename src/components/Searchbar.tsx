import SearchIcon from "../assets/SearchIcon";
import { InputContainer, SearchbarWrapper } from "./Header.styles";

type InputPlaceholder = {
    placeholder: string;
};

/*
    Searchbar main component. Takes in styled component variables
    for width and height, as well as a string value for the 
    placeholder text. This component is a wrappper for its
    sub-components which contain the logic.
*/

const Searchbar = ({ placeholder }: InputPlaceholder) => {

    return (
        <SearchbarWrapper>
            <SearchIcon width={16} height={16} />
            <InputContainer placeholder={placeholder} />
        </SearchbarWrapper>
    );
};

export default Searchbar;