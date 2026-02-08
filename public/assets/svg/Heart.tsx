import type { FC } from 'react';
import type { IconType } from './index';

export const Heart: FC<IconType> = ({
  width = 54,
  height = 40,
  color = '#5c3d2e',
}) => {
  return (
    <svg
      className="heart-pulse"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={`${color || '#5b3d2d'}`}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M12 19.5L4.8 12.2C3 10.3 3.2 7.3 5.4 5.8 
                        7.2 4.6 9.5 5 11 6.4l1 1 1-1c1.5-1.4 3.8-1.8 5.6-0.6 
                        2.2 1.5 2.4 4.5 0.6 6.4L12 19.5z"
      />
    </svg>
  );
};
