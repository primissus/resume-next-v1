import Image from 'next/image';
import clsx from 'clsx';

import TintedImg from '@components/TintedImg';

import styles from './styles.module.scss';

const GlitchImg = ({ src, className }: any) => {
    //const ratioStyle = `aspect-[${src.width}/${src.height}]`
    const ratioStyle = `aspect-[${src.height}/${src.width}]`

    //console.log(ratioStyle);

    return (
        <div className={clsx(className, styles.imgContainer)}>
            <TintedImg fill color="#e73396" className={clsx(styles.filterImg, ratioStyle)} src={src} alt="" />
            <TintedImg fill color="#1d8ac9" className={clsx(styles.filterImg, ratioStyle)} src={src} alt="" />
            <Image className={clsx(styles.originalImg, 'grayscale', 'max-w-fit', ratioStyle)} src={src} alt="" />
        </div>
    );
}


export default GlitchImg;
