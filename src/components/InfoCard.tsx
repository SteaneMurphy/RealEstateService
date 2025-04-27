import { StyledInfoCard } from "./InfoCardContainer.styles";

interface InfoCardProps{
    heading: string;
    text: string;
    link: string;
    image: string;
};

const InfoCard = ({ heading, text, link, image }: InfoCardProps) => {

    return (
        <StyledInfoCard>
            <div>
                <img src={image} alt="Image" />
            </div>
            <h3>{heading}</h3>
            <p>{text}</p>
            <a>{link}</a>
        </StyledInfoCard>
    );
};

export default InfoCard;