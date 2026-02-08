'use client';

import { FC } from 'react';
import CustomImage from '../../Image/Image';
import under_background from 'public/assets/vardges-tatev/photo_4.webp';
import { StaticImageData } from 'next/image';

interface FinalMessageProps {
  message: string;
  background?: StaticImageData;
}

const FinalMessage: FC<FinalMessageProps> = ({
  message = '',
  background = under_background,
}) => {
  return (
    <div className="wedding-info-section">
      <div className="final-message">
        <div className="text-overlay-wrapper-footer">
          <div className="text-overlay-blur"></div>
          <div className="text-overlay">
            <h4 className="names footer-text">{message}</h4>
          </div>
        </div>
        <CustomImage
          src={background}
          alt="Couple walking"
          className="footer-image"
        />
      </div>
    </div>
  );
};

export default FinalMessage;
