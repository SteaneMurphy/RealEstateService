import { useEffect, useState } from "react";
import Button from "./Button";
import InfoCard from "./InfoCard";
import { StyledInfoCardContainer } from "./InfoCardContainer.styles";
import { fetchInfoCards } from "../backend/FirebaseService";

interface InfoCardContainerProps{
    heading: string;
};

/*
    This component displays the information cards on the home page. It consists of
    a set of buttons and some containers that display information and images fetched
    from the Firestore database.

    The buttons set a state when clicked using the 'changeInfoCardCategory'. When this
    state changes, it triggers a re-render of the InfoCard components. The path for the
    info cards has the particular sub-collection string used as a dynamic variable and
    displays the sub-collection for the relevant category. This state is stored in
    'infoCardCategory'.

    On initial render, a 'useEffect' hook is used to fetch from the Firestore database.
    This fetch returns the four sub-collections:
        - buying
        - renting
        - selling
        - researching
    
    Each sub-collection has a list of images and strings used to populate the info card
    containers.
*/
const InfoCardContainer = ({ heading }: InfoCardContainerProps) => {
    const [infoCards, setInfoCards] = useState<any>({});
    const [infoCardCategory, setInfoCardCatergory] = useState("buying");
    
    const changeInfoCardCategory = (buttonCategory: string) => {
        setInfoCardCatergory(buttonCategory);
    };

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