import React from "react";

interface FilterIconProps{
    width: number;
    height: number;
};

const SearchIcon: React.FC<FilterIconProps> = ({ width=24, height=24 }) => (
    <svg className="CK__Icon--medium" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6h2.563a2 2 0 0 0 
            3.874 0H14.5a.5.5 0 0 0 0-1H7.937a2 2 0 0 0-3.874 0H1.5a.5.5 0 0 0 0 1ZM6 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM1.5 10a.5.5 0 0 0 0 1h6.563a2 2 0 0 0 3.874 0H14.5a.5.5 0 0 0 
            0-1h-2.563a2 2 0 0 0-3.874 0H1.5Zm9.5.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z" fill="currentColor">
        </path>
    </svg>
);

export default SearchIcon;