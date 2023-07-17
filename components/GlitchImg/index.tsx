import Image from 'next/image';
import clsx from 'clsx';

import TintedImg from '@/components/TintedImg';

import styles from './styles.module.scss';

const GlitchImg = ({ src, className }: any) => {

    return (
        <div className={clsx(className, styles.imgContainer)}>
            <Image className={clsx(className, styles.originalImg, styles.singlePath, 'grayscale')} src={src} alt="" />
            <TintedImg color="#e73396" className={clsx(className, styles.filterImg)} src={src} alt="" />
            <TintedImg color="#1d8ac9" className={clsx(className, styles.filterImg)} src={src} alt="" />
        </div>
    );
}


export default GlitchImg;
