import { HeroContainer, SearchContainer } from "./Header.styles";
import heroImage from "../assets/heroImage.jpg";

/*
    Wrapper component that contains a title, image (search container background)
    and the 'SearchContainer' sub-component with its associated search logic.
*/

const Header = () => {

    return (
        <HeroContainer $backgroundImage={heroImage}>
            <div className="titleContainer">
                <h1>Properties to call home</h1>
            </div>
            <SearchContainer />
        </HeroContainer>
    );
};

export default Header;