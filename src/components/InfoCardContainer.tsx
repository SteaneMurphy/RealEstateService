import { useEffect, useState } from "react";
import Button from "./Button";
import InfoCard from "./InfoCard";
import { StyledInfoCardContainer } from "./InfoCardContainer.styles";
import { fetchInfoCards } from "../backend/FirebaseService";

interface InfoCardContainerProps{
    heading: string;
};

const InfoCardContainer = ({ heading }: InfoCardContainerProps) => {
    const [infoCards, setInfoCards] = useState<any>({});
    const [infoCardCategory, setInfoCardCatergory] = useState("buying");
    
    const changeInfoCardCategory = (buttonCategory: string) => {
        setInfoCardCatergory(buttonCategory);
    };

    //on initial render
    useEffect(() => {
        const getInfoCards = async () => {
            const results = await fetchInfoCards();
            if(results)
            {
                setInfoCards(results);
            }
        };
        getInfoCards();
    }, []);

    return (
        <StyledInfoCardContainer>
            <h1>{heading}</h1>
            <div className="buttons">
                <Button 
                    buttonName={"Buying"}
                    backgroundOnHover="#f6f5f7"
                    width={140}
                    height={45}
                    padding={12}
                    fontOnHover="#3d3b40"
                    fontColor="#726e75"
                    onClick={() => changeInfoCardCategory("buying")}
                />
                <Button 
                    buttonName={"Renting"}
                    backgroundOnHover="#f6f5f7"
                    width={140}
                    height={45}
                    padding={12}
                    fontOnHover="#3d3b40"
                    fontColor="#726e75"
                    onClick={() => changeInfoCardCategory("renting")}
                />
                <Button 
                    buttonName={"Selling"}
                    backgroundOnHover="#f6f5f7"
                    width={140}
                    height={45}
                    padding={12}
                    fontOnHover="#3d3b40"
                    fontColor="#726e75"
                    onClick={() => changeInfoCardCategory("selling")}
                />
                <Button 
                    buttonName={"Researching"}
                    backgroundOnHover="#f6f5f7"
                    width={140}
                    height={45}
                    padding={12}
                    fontOnHover="#3d3b40"
                    fontColor="#726e75"
                    onClick={() => changeInfoCardCategory("researching")}
                />
            </div>
            <div className="infoCards">
                {infoCards?.[infoCardCategory]?.length > 0 && infoCards?.[infoCardCategory].map((card: any, index: number) => (
                    <InfoCard
                        key={index}
                        heading={card.title}
                        text={card.description}
                        link={card.link}
                        image={card.image}
                    />
                ))}
            </div>
        </StyledInfoCardContainer>
    );
};

export default InfoCardContainer;