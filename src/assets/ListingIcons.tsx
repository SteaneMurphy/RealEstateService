import React from "react";

interface IconProps
{
    width: number;
    height: number;
};

export const BedIcon: React.FC<IconProps> = ({ width, height }) => (
  <svg
    className="CK__Icon--medium"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="ck-sprite-consumerXpBedMd-title"
    width={width}
    height={height}
  >
    <title id="ck-sprite-consumerXpBedMd-title">bedrooms</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 2a.5.5 0 0 0-.5.5V5h1.102l.024-.563A1.5 1.5 0 0 1 6.624 3h2.754a1.5 1.5 0 0 1 1.5 1.437L10.9 5H12V2.5a.5.5 0 0 0-.5-.5h-7Zm5.921 4H3.924l-.834 5h9.82l-.834-5h-1.655ZM9.9 5l-.022-.521a.5.5 0 0 0-.5-.479H6.625a.5.5 0 0 0-.5.479L6.103 5H9.9Zm3.1 7H3v.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V12ZM3 5.459V2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v2.959l.993 5.959A.504.504 0 0 1 14 11.5v1a1.5 1.5 0 0 1-1.5 1.5h-.498v.5a.5.5 0 0 1-1 0V14h-6v.5a.5.5 0 0 1-1 0V14H3.5A1.5 1.5 0 0 1 2 12.5v-1c0-.027.002-.055.007-.082L3 5.458Z"
      fill="currentColor"
    />
  </svg>
);

export const BathIcon: React.FC<IconProps> = ({ width, height }) => (
    <svg
      className="CK__Icon--medium"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="ck-sprite-consumerXpBathMd-title"
      width={width}
      height={height}
    >
      <title id="ck-sprite-consumerXpBathMd-title">bathrooms</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 9V3.5a2.5 2.5 0 0 0-5 0V4l.001.039c-.364.059-.674.184-.935.357-.369.247-.609.571-.763.88A2.957 2.957 0 0 0 6 6.461v.025L6 6.495v.004l.5.001H6a.5.5 0 0 0 .5.5v-.5.5H10.5a.5.5 0 0 0 .5-.5h-.5.5V6.46l-.005-.083a2.956 2.956 0 0 0-.298-1.102 2.254 2.254 0 0 0-.763-.88 2.344 2.344 0 0 0-.935-.357A.507.507 0 0 0 9 4v-.5a1.5 1.5 0 1 1 3 0V9H2a.5.5 0 0 0-.5.5H2h-.5v.024a1.763 1.763 0 0 0 .015.201c.013.13.04.309.094.521.106.425.318.99.741 1.554.457.61 1.138 1.19 2.14 1.601l-.437.875a.5.5 0 0 0 .894.448l.5-1 .005-.01c.717.18 1.56.286 2.548.286.989 0 1.831-.105 2.548-.285a.372.372 0 0 0 .005.009l.5 1a.5.5 0 1 0 .894-.448l-.437-.875c1.002-.411 1.683-.992 2.14-1.601a4.357 4.357 0 0 0 .741-1.554 3.847 3.847 0 0 0 .107-.676l.002-.046V9.5L14 9.5h.5A.5.5 0 0 0 14 9h-1ZM9.912 6a1.794 1.794 0 0 0-.11-.276 1.256 1.256 0 0 0-.423-.495C9.189 5.102 8.913 5 8.5 5s-.689.102-.879.229a1.256 1.256 0 0 0-.424.495 1.794 1.794 0 0 0-.11.276H9.913Zm-7.334 4v.004c.082.325.245.76.572 1.196.636.848 1.972 1.8 4.85 1.8 2.878 0 4.214-.952 4.85-1.8.327-.436.49-.871.571-1.196l.001-.004H2.578Z"
        fill="currentColor"
      />
    </svg>
);

export const CarSpacesIcon: React.FC<IconProps> = ({ width, height }) => (
    <svg
        className="CK__Icon--medium"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="ck-sprite-consumerXpCarMd-title"
        width={width}
        height={height}
    >
        <title id="ck-sprite-consumerXpCarMd-title">car spaces</title>
        <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.96 1a3.5 3.5 0 0 0-3.433 2.814l-.473 2.368C1.43 6.482 1 7.12 1 7.857V10.5c0 1.21.857 2.22 2 2.45v.55A1.5 1.5 0 0 0 4.5 15h1A1.5 1.5 0 0 0 7 13.5V13h2v.5a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-.55c1.143-.23 2-1.24 2-2.45V7.857c0-.738-.43-1.375-1.054-1.675l-.473-2.368A3.5 3.5 0 0 0 10.04 1H5.959Zm7.606 6.111a3.246 3.246 0 0 1-.783.363C11.961 7.748 10.526 8 8 8c-2.526 0-3.961-.252-4.783-.526a3.247 3.247 0 0 1-.783-.363.857.857 0 0 0-.434.746V10.5c0 .83.669 1.5 1.496 1.5h9.007c.828 0 1.497-.67 1.497-1.5V7.857a.857.857 0 0 0-.434-.746ZM12 13h-2v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V13Zm-6 0H4v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V13ZM3.533 6.526a2.557 2.557 0 0 1-.486-.21l.461-2.306A2.5 2.5 0 0 1 5.959 2h4.082a2.5 2.5 0 0 1 2.451 2.01l.461 2.306c-.095.056-.248.13-.486.21C11.789 6.752 10.474 7 8 7c-2.474 0-3.789-.248-4.467-.474ZM6 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        fill="currentColor"
        />
    </svg>
);

export const LandSizeIcon: React.FC<IconProps> = ({ width, height }) => (
    <svg
        className="CK__Icon--medium"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="ck-sprite-consumerXpLandSizeMd-title"
        width={width}
        height={height}
    >
        <title id="ck-sprite-consumerXpLandSizeMd-title">land size</title>
        <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V3H6v.5a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0V2h8v-.5a.5.5 0 0 1 .5-.5ZM5 6.5A1.5 1.5 0 0 1 6.5 5h7A1.5 1.5 0 0 1 15 6.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 5 13.5v-7ZM6.5 6a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7Zm-3 9a.5.5 0 0 0 0-1H3V6h.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1H2v8h-.5a.5.5 0 0 0 0 1h2Z"
        fill="currentColor"
        />
    </svg>
);

export const StarIcon: React.FC<IconProps> = ({ width, height }) => (
  <svg viewBox="0 0 24 24" aria-label="Save property" xmlns="http://www.w3.org/2000/svg" fill="#4c4b4f" width={width} height={height}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.862 21.817a1 1 0 0 1-.411-.978l.98-6.014-4.147-4.251a1 1 0 0 1 .565-1.687l5.691-.87 2.555-5.442a1 1 0 0 1 1.81 0l2.555 5.442 5.691.87a1 1 0 0 1 .565 1.687l-4.148 4.25.981 6.015a1 1 0 0 1-1.47 1.036L12 19.068l-5.079 2.807a1 1 0 0 1-1.06-.058ZM12 17.925l4.449 2.46 1.113.615-.205-1.256-.857-5.256 3.641-3.732.859-.88-1.216-.186-5.003-.765-2.229-4.748L12 3l-.552 1.177-2.23 4.748-5.002.765L3 9.875l.859.88L7.5 14.488l-.857 5.257L6.438 21l1.113-.616L12 17.925Z"
    />
  </svg>
);

interface ArrowProps
{
  width: number;
  height: number;
  fill: string;
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
};

export const ArrowLeftIcon: React.FC<ArrowProps> = ({ width, height, fill, onClick }) => (
  <svg
    className="CK__Icon--medium"
    viewBox="0 0 16 16"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    width={width} 
    height={height}
    onClick={onClick}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.354 1.146a.5.5 0 0 1 0 .708L5.207 8l6.147 6.146a.5.5 0 0 1-.708.708l-6.5-6.5a.5.5 0 0 1 0-.708l6.5-6.5a.5.5 0 0 1 .708 0Z"
    />
  </svg>
);

export const ArrowRightIcon: React.FC<ArrowProps> = ({ width, height, fill, onClick }) => (
  <svg
    className="CK__Icon--medium"
    viewBox="0 0 16 16"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    width={width} 
    height={height}
    onClick={onClick}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.646 1.146a.5.5 0 0 1 .708 0l6.5 6.5a.5.5 0 0 1 0 .708l-6.5 6.5a.5.5 0 0 1-.708-.708L10.793 8 4.646 1.854a.5.5 0 0 1 0-.708Z"
    />
  </svg>
);
