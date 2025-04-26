import SearchIcon from "../assets/SearchIcon";
import { InputContainer, SearchbarWrapper } from "./Header.styles";

type InputPlaceholder = {
    placeholder: string;
};

const Searchbar = ({ placeholder }: InputPlaceholder) => {

    return (
        <SearchbarWrapper>
            <SearchIcon width={16} height={16} />
            <InputContainer placeholder={placeholder} />
        </SearchbarWrapper>
    );
};

export default Searchbar;