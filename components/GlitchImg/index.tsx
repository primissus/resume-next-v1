import Image from 'next/image';
import clsx from 'clsx';

import TintedImg from '@/components/TintedImg';

import styles from './styles.module.scss';

const GlitchImg = ({ src, className }: any) => {

    return (
        <div className={styles.imgContainer}>
            <Image className={clsx(className, 'grayscale')} src={src} alt="" />
            <TintedImg color="red" className={clsx(className, styles.filterImg)} src={src} alt="" />
            <TintedImg color="blue" className={clsx(className, styles.filterImg)} src={src} alt="" />
        </div>
    );
}


export default GlitchImg;
