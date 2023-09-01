import { StaticImageData } from 'next/image';

export default function getRatioStyle(img: StaticImageData): string {
  return `${img.width} / ${img.height}`;
}
