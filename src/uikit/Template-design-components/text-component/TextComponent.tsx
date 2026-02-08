import React from 'react';

interface TextComponentProps {
  text: string;
  imageUrl: string;
  fontSize: string;
}

const TextComponent: React.FC<TextComponentProps> = ({
  text,
  imageUrl,
  fontSize,
}) => {
  return (
    <div className="relative w-full h-48 min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <h4
        className={`bottom-text-comp absolute bottom-[10px] z-10 text-white text-[18px] p-8 text-center text-[${fontSize}]`}
      >
        {/* {text} */}
        Your presence
        will make this day
        even more special to us.
        <br />
        <br />
        With love,
        Manvel & Diana
      </h4>
    </div>
  );
};

export default TextComponent;
