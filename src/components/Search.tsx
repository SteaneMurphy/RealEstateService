import { useState } from "react";
import Button from "./Button";
import Searchbar from "./Searchbar";
import FilterIcon from "../assets/FilterIcon";
import { useNavigate } from "react-router-dom";

interface SearchProps{ 
    className?: string;
};

const placeholderText: string[] = [
    "Search suburb, postcode or state",
    "Search by address",
    "Search suburb, postcode or region",
];

const Search = ({ className }: SearchProps) => {
    const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholderText[0]);

    const adjustSearchDisplay = (placeholder: string) => {
        setCurrentPlaceholder(placeholder);
    };

    const navigate = useNavigate();
    const searchOnType = (type: string) =>
    {
        navigate(`/${type}`);
    };

    return (
        <div className={className}>
            <div className="topButtons">
                <Button 
                    buttonName={"Buy"}
                    backgroundOnHover="#f6f5f7"
                    width={140}
                    height={45}
                    padding={12}
                    underline={true}
                    borderUnderline={true}
                    fontOnHover="#3d3b40"
                    fontColor="#726e75"
                    onClick={() => adjustSearchDisplay(placeholderText[0])}
                />
                <Button 
                    buttonName={"Rent"}
                    backgroundOnHover="#f6f5f7"
                    width={140}
                    height={45}
                    padding={12}
                    underline={true}
                    borderUnderline={true}
                    fontOnHover="#3d3b40"
                    fontColor="#726e75"
                    onClick={() => adjustSearchDisplay(placeholderText[0])}
                />
                <Button 
                    buttonName={"Sold"}
                    backgroundOnHover="#f6f5f7"
                    width={140}
                    height={45}
                    padding={12}
                    underline={true}
                    borderUnderline={true}
                    fontOnHover="#3d3b40"
                    fontColor="#726e75"
                    onClick={() => adjustSearchDisplay(placeholderText[0])}
                />
                <Button 
                    buttonName={"Address"}
                    backgroundOnHover="#f6f5f7"
                    width={140}
                    height={45}
                    padding={12}
                    underline={true}
                    borderUnderline={true}
                    fontOnHover="#3d3b40"
                    fontColor="#726e75"
                    onClick={() => adjustSearchDisplay(placeholderText[1])}
                />
                <Button 
                    buttonName={"Agents"}
                    backgroundOnHover="#f6f5f7"
                    width={140}
                    height={45}
                    padding={12}
                    underline={true}
                    borderUnderline={true}
                    fontOnHover="#3d3b40"
                    fontColor="#726e75"
                    onClick={() => adjustSearchDisplay(placeholderText[2])}
                />
            </div>
            <div className="botButtons">
                <Searchbar placeholder={currentPlaceholder} />
                <div className="filterButtons">
                    <div>
                        <Button 
                            buttonName={"Filters"}
                            backgroundOnHover="#f6f5f7"
                            borderRadius={50}
                            width={100}
                            height={50}
                            padding={12}
                            icon={<FilterIcon width={16} height={16} />}
                        />
                    </div>
                    <Button 
                        buttonName={"Search"}
                        backgroundColor="#e4002b"
                        backgroundOnHover="#a81e35"
                        fontColor="white"
                        borderRadius={50}
                        width={100}
                        height={50}
                        padding={12}
                        onClick={() => searchOnType("buy")}
                    />
                </div>
            </div>
        </div>
    );
};

export default Search;