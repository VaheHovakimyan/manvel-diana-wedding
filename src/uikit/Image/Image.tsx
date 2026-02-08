'use client';

import ImagePlaceholder from 'public/assets/img/imagePlaceholder.jpg';
import Image, { StaticImageData } from 'next/image';
import { FC, useEffect, useState } from 'react';
import { CSSProperties } from 'react';
import './Image.scss';

interface ICustomImage {
  src: string | StaticImageData | null;
  alt?: string;
  className?: string;
  width?: string;
  height?: string;
  style?: CSSProperties;
}

const CustomImage: FC<ICustomImage> = ({
  src,
  alt = '',
  className = '',
  width,
  height,
  style = {},
}) => {
  const [imageSrc, setImageSrc] = useState<string | StaticImageData>(
    ImagePlaceholder
  );

  const handleError = () => {
    setImageSrc(ImagePlaceholder);
  };

  const isInvalidSrc = (value: string | null | undefined) => {
    if (!value) return true;

    const lowerValue = value.toLowerCase();

    return (
      lowerValue.includes('null') ||
      lowerValue.includes('undefined') ||
      lowerValue.trim() === ''
    );
  };

  useEffect(() => {
    if (typeof src === 'string') {
      if (isInvalidSrc(src)) {
        setImageSrc(ImagePlaceholder);
      } else {
        setImageSrc(src);
      }
    } else if (src) {
      setImageSrc(src);
    } else {
      setImageSrc(ImagePlaceholder);
    }
  }, [src]);

  const numericWidth = width ? parseInt(width) : undefined;
  const numericHeight = height ? parseInt(height) : undefined;
  const useFill = !width || !height;

  return (
    <Image
      className={`static ${className}`}
      src={imageSrc}
      alt={alt}
      style={{ ...style }}
      {...(useFill
        ? { fill: true }
        : { width: numericWidth, height: numericHeight })}
      onError={handleError}
      placeholder="blur"
      blurDataURL={'https://picsum.photos/id/237/200/300'}
    />
  );
};

export default CustomImage;
