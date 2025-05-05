import { useState, useEffect } from "react";
import Button from "./Button";
import { StyledFooter } from "./Footer.styles";
import { fetchFooterLinks } from "../backend/FirebaseService";
import FooterLink from "./FooterLink";

const Footer = () => {
    const [footerCategory, setFooterCategory] = useState("realestate");
    const [footerLinks, setFooterLinks] = useState<any>({});

    const updateFooterCategory = (category: string) => {
        setFooterCategory(category);
    };

    //on initial render
    useEffect(() => {
        const getFooterLinks = async () => {
            const results = await fetchFooterLinks();
            if(results)
            {
                setFooterLinks(results);
            }
        };
        getFooterLinks();
    }, []);

    useEffect(() => {
        console.log(footerLinks);
    }, [footerLinks]);

    return (
        <StyledFooter>
            <div className="footerButtons">
                <Button 
                    buttonName={"Real Estate"}
                    backgroundOnHover="#f6f5f7"
                    width={263}
                    height={45}
                    padding={12}
                    underline={true}
                    borderUnderline={true}
                    fontOnHover="#3d3b40"
                    fontColor="#726e75"
                    onClick={() => updateFooterCategory("realestate")}
                />
                <Button 
                    buttonName={"New Homes"}
                    backgroundOnHover="#f6f5f7"
                    width={263}
                    height={45}
                    padding={12}
                    underline={true}
                    borderUnderline={true}
                    fontOnHover="#3d3b40"
                    fontColor="#726e75"
                    onClick={() => updateFooterCategory("newhomes")}
                />
                <Button 
                    buttonName={"Popular Areas"}
                    backgroundOnHover="#f6f5f7"
                    width={263}
                    height={45}
                    padding={12}
                    underline={true}
                    borderUnderline={true}
                    fontOnHover="#3d3b40"
                    fontColor="#726e75"
                    onClick={() => updateFooterCategory("popularareas")}
                />
                <Button 
                    buttonName={"Popular Searches"}
                    backgroundOnHover="#f6f5f7"
                    width={263}
                    height={45}
                    padding={12}
                    underline={true}
                    borderUnderline={true}
                    fontOnHover="#3d3b40"
                    fontColor="#726e75"
                    onClick={() => updateFooterCategory("popularsearches")}
                />
            </div>
            <div className="footerLinksParentContainer">
                <div className="footerHeading">
                    {footerLinks?.[footerCategory]?.title && <span>{footerLinks[footerCategory].title}</span>}
                </div>
                <div className="footerLinksSubContainer">
                    {footerLinks?.[footerCategory]?.links?.map((card: any, index: number) => (
                        <FooterLink key={index} text={card.text} />
                    ))}
                </div>
            </div>
        </StyledFooter>
    );
};

export default Footer;