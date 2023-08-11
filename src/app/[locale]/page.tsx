import GlitchImg from '@components/GlitchImg';
import ImgProfile from '@assets/profile.png';
import { useTranslator } from '@server/hooks/useTranslator';
import { locales } from '@src/i18n';
import { provideLocale } from '@server/hooks/useLocale';
import { LocaleComponentProps } from './types';

export default function Home({ params: { locale } }: LocaleComponentProps) {
    provideLocale(locale);
    const t = useTranslator('home');

    return (
        <div className="h-full flex flex-col">
            <div className="h-full flex flex-row">
                <div className="flex-grow">
                    <p>{t('helloMessage')}</p>
                </div>
                <div className="max-w-[1000px] w-1/2 h-full overflow-hidden flex-grow">
                    <GlitchImg src={ImgProfile} className="w-full h-full" />
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}
