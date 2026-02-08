'use client';

import { FC } from 'react';
import CustomImage from '../../Image/Image';
import { TemplateDesign } from '../../../../public/types';
import welcome_background from 'public/assets/manvel-diana/photo_5.webp';
import { AmData } from '../../../template-designs';

interface WelcomeProps {
  template: AmData;
}

const WelcomeComp: FC<WelcomeProps> = ({ template }) => {
  return (
    <div className="invitation-container">
      <div className="image-section">
        <div className="main-image">
          <CustomImage src={welcome_background} />
        </div>
        <div className="text-overlay-wrapper">
          <div className="text-overlay-blur"> </div>
          <div className="text-overlay">
            <h1 className="names">
              <span className="name-left">{template.maleName}</span>
              <span className="and">&</span>
              <span className="name-right">{template.femaleName}</span>
            </h1>
            <div className="swipe">
              <span className="arrow">↓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComp;
