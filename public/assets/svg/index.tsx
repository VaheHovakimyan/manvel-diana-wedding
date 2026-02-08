import { type CSSProperties } from 'react';

export { GlobusIcon } from './Globus';
export { MoneyGrabIcon } from './MoneyGrab';
export { OnePlaceIcon } from './OnePlace';
export { EmailIcon } from './Email';
export { HourGlassIcon } from './HourGlass';
export { ChatIcon } from './Chat';

export type IconType = {
  width?: number;
  height?: number;
  color?: string;
  toggle?: boolean;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
};
