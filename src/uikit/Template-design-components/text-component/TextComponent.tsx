import React from 'react';
import CountDown from '../count-down/CountDown';

interface TextComponentProps {
  text: string;
  imageUrl: string;
  fontSize: string;
  type?: string;
  padding?: string;
}

const TextComponent: React.FC<TextComponentProps> = ({
  text,
  imageUrl,
  fontSize,
  type = 'default',
  padding = 'p-8',
}) => {
  return (
    <div className="relative w-full h-48 min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className='absolute bottom-[10px] z-10 '>
        {type === 'special' && <CountDown />}
        <h4
          className={`bottom-text-comp text-white text-[18px] text-center text-[${fontSize}] ${padding} whitespace-pre-line`}
        >
          {text}
        </h4>
      </div>
    </div>
  );
};

export default TextComponent;
