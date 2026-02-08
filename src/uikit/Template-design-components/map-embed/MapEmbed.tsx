import { FC } from 'react';
import './MapEmbed.scss';

type MapEmbedProps = {
  href: string;
};

const MapEmbed: FC<MapEmbedProps> = ({ href }) => {
  return (
    <a href={href} target="_blank" rel="noopener">
      <button className="map-button">ՏԵՍՆԵԼ ՔԱՐՏԵԶԻ ՎՐԱ</button>
    </a>
  );
};

export default MapEmbed;
