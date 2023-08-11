import Image from 'next/image';
import clsx from 'clsx';

import TintedImg from '@components/TintedImg';

import styles from './styles.module.scss';

const GlitchImg = ({ src, className }: any) => {

    return (
        <div className={clsx(className, styles.imgContainer)}>
            <TintedImg color="#e73396" className={clsx(styles.filterImg)} src={src} alt="" />
            <TintedImg color="#1d8ac9" className={clsx(styles.filterImg)} src={src} alt="" />
            <Image className={clsx(styles.originalImg , 'grayscale')} src={src} alt="" />
        </div>
    );
}


export default GlitchImg;
