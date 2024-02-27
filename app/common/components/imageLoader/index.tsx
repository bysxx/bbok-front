'use client';

import { url } from '@libs/config';

interface IImageLoaderProps {
  src: string;
  width: number;
}
const ImageLoader = ({ src, width }: IImageLoaderProps) => {
  return `${url}/images/${src}?w=${width}`;
};

export default ImageLoader;
