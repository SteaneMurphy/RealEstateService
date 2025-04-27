import Logo from "../assets/Logo.tsx";
import Button from "./Button.tsx";
import Link from "./Link.tsx";
import { NavbarContainer } from "./Navbar.styles.ts";


const Navbar = () => {

    return (
        <NavbarContainer>
            <div className="subContainer">
                <div className="logo">
                    <Logo width={210} height={28} />
                </div>
                <Link linkName={"Buy"} />
                <Link linkName={"Rent"} />
                <Link linkName={"Sold"} />
                <Link linkName={"New homes"} />
                <Link linkName={"Find agents"} />
                <Link linkName={"Home loans"} />
                <Link linkName={"News"} />
                <Link linkName={"Commercial"} />
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