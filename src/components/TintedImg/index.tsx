import Image, { ImageLoaderProps } from 'next/image';
import clsx from 'clsx';
import styles from './styles.module.css';


export interface TintedImageProps {
    color: string;
}

const TintedImage = ({ color, src, className }: any) => {
    return (
        <Image
            src={src}
            alt=""
            className={clsx(className, styles.tintedImage)}
            style={{
                filter: `brightness(200%) grayscale(100%) opacity(0.6) drop-shadow(0 0 0 ${color})`
            }} />
    );
};

export default TintedImage;

