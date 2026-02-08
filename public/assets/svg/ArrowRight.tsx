import type { FC } from 'react';
import type { IconType } from './index';

export const ArrowRight: FC<IconType> = ({
  width = 28,
  height = 12,
  color = '#333333',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 28 12"
    >
      <line x1="1" y1="6" x2="23" y2="6" />
      <polyline points="18,2 23,6 18,10" />
    </svg>
  );
};
