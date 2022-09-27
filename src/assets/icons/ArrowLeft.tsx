import React from 'react';

export enum ArrowResponse {
  left = 0,
  right = 180,
}
interface ArrowProps {
  position?: ArrowResponse;
  color?: string;
  onClick?: () => void;
}

const ArrowLeft: React.FC<ArrowProps> = ({
  position = ArrowResponse.right,
  color = 'black',
  onClick,
}) => {
  return (
    <div onClick={onClick}>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        transform={`rotate(${position})`}
      >
        <path
          d='M5.83 11L8.41 8.41L7 7L2 12L7 17L8.41 15.59L5.83 13H22V11H5.83Z'
          fill={`${color}`}
        />
      </svg>
    </div>
  );
};

export default ArrowLeft;
