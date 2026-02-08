import telephone_icon from 'public/assets/WhiteIllusion/icons/tel_icon.svg';
import './CallTo.scss';
import React, { FC } from 'react';
import CustomImage from '../../Image/Image';

interface ICallToProps {
  phoneNumber?: string;
}

const CallTo: FC<ICallToProps> = ({ phoneNumber }) => {
  return (
    <div className="call_to">
      <a href={`tel:+374${phoneNumber}`} className="call_to_link">
        <CustomImage
          src={telephone_icon}
          width="24px"
          height="24px"
          alt="telephone_icon"
        />
      </a>
    </div>
  );
};

export default CallTo;
