import React from "react";

interface SearchIconProps{
    width: number;
    height: number;
};

const SearchIcon: React.FC<SearchIconProps> = ({ width=24, height=24 }) => (
    <svg className="CK__Icon--medium" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
        <path fillRule="evenodd" clipRule="evenodd" d="M7 1a6 6 0 1 0 3.874 10.582l3.272 3.272a.5.5 0 0 0 .708-.708l-3.272-3.272A6 6 0 0 0 7 1ZM2 7a5 5 0 1 1 10 0A5 5 0 
            0 1 2 7Z" fill="currentColor">
        </path>
    </svg>
);

export default SearchIcon;