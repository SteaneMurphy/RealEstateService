import { HeroContainer, SearchContainer } from "./Header.styles";
import heroImage from "../assets/heroImage.jpg";

const Header = () => {

    return (
        <HeroContainer backgroundImage={heroImage}>
            <div className="titleContainer">
                <h1>Properties to call home</h1>
            </div>
            <SearchContainer />
        </HeroContainer>
    );
};

export default Header;