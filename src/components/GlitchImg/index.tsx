import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';

import TintedImg from '@components/TintedImg';
import getRatioStyle from '@lib/getRatioStyle';

import styles from './styles.module.scss';

interface GlitchImgProps {
    src: StaticImageData;
    className?: string;
}

const GlitchImg = ({ src, className }: GlitchImgProps) => {
    return (
        <div className={clsx(className, styles.imgContainer)}>
            <TintedImg fill color="#e73396" className={clsx(styles.filterImg)} src={src} alt="" />
            <TintedImg fill color="#1d8ac9" className={clsx(styles.filterImg)} src={src} alt="" />
            <Image className={clsx(styles.originalImg, 'grayscale', 'max-w-fit')} src={src} alt="" />
        </div>
    );
}


export default GlitchImg;
