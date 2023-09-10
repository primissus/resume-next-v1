import clsx from 'clsx';
import GlitchImg from '@components/GlitchImg';
import ImgProfile from '@assets/profile.png';
import { useTranslator } from '@server/hooks/useTranslator';
import { locales } from '@src/i18n';
import { provideLocale } from '@server/hooks/useLocale';
import { LocaleComponentProps } from './types';
import getRatioStyle from '@lib/getRatioStyle';
import styles from './styles.module.scss';

export default function Home({ params: { locale } }: LocaleComponentProps) {
    provideLocale(locale);
    const t = useTranslator('home');
    const ratioStyle = getRatioStyle(ImgProfile);

    return (
        <div className="h-full flex flex-col">
            <div className="h-full flex flex-row items-center justify-between overflow-hidden relative">
                <div className="flex w-[30%] z-10">
                    <div>
                        <p className={clsx(styles.greetingText, 'text-[40px] w-[85vw] max-w-[800px]')}>{t('helloMessage')}</p>
                    </div>
                </div>
                <div className="flex flex-row justify-end h-full overflow-hidden w-[70%]">
                    <div className="h-full absolute bottom-0 left-0 sm:left-[auto] max-h-[750px] md:max-h-max" style={{ aspectRatio: `${ratioStyle}`}}>
                        <GlitchImg src={ImgProfile} className="w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
        );
    }

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}
