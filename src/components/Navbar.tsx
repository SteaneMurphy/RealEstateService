import Logo from "../assets/Logo.tsx";
import Button from "./Button.tsx";
import CustomLink from "./Link.tsx";
import { NavbarContainer } from "./Navbar.styles.ts";
import { Link } from "react-router-dom";


const Navbar = () => {

    return (
        <NavbarContainer>
            <div className="subContainer">
                <div className="logo">
                    <Link to="/">
                        <Logo width={210} height={28} />
                    </Link>
                </div>
                <CustomLink linkName={"Buy"} />
                <CustomLink linkName={"Rent"} />
                <CustomLink linkName={"Sold"} />
                <CustomLink linkName={"New homes"} />
                <CustomLink linkName={"Find agents"} />
                <CustomLink linkName={"Home loans"} />
                <CustomLink linkName={"News"} />
                <CustomLink linkName={"Commercial"} />
            </div>
            <div className="subContainer">
                <Button 
                    buttonName={"Sign in"}
                    backgroundOnHover="#f6f5f7"
                    width={80}
                    height={40}
                    padding={12}
                    borderRadius={8}
                />
                <Button 
                    buttonName={"Join"}
                    backgroundColor="#e4002b"
                    backgroundOnHover="#a81e35"
                    width={70}
                    height={40}
                    padding={12}
                    fontColor="white"
                    borderRadius={8}
                />
            </div>
        </NavbarContainer>
    );
};

export default Navbar;