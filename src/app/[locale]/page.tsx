import GlitchImg from '@components/GlitchImg';
import ImgProfile from '@assets/profile.png';
import { useTranslator } from '@server/hooks/useTranslator';
import { locales } from '@src/i18n';
import { provideLocale } from '@server/hooks/useLocale';
import LocaleLink from '@server/components/LocaleLink';
import { LocaleComponentProps } from './types';

function Header() {
    const t = useTranslator('home');

    return (
        <div className="p-4">
            <nav>
                <ul className="flex flex-row gap-x-2">
                    <li><LocaleLink href="/">{t('home')}</LocaleLink></li>
                    <li><LocaleLink href="about-this-page">{t('about')}</LocaleLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default function Home({ params: { locale } }: LocaleComponentProps) {
    provideLocale(locale);
    const t = useTranslator('home');

    return (
        <div className="container h-screen mx-auto bg-slate-950 flex flex-col">
            <Header />
            <div className="h-full flex flex-row">
                <div className="flex-grow">
                    <p>{t('helloMessage')}</p>
                </div>
                <div className="max-w-[1000px] w-1/2 h-full overflow-hidden flex-grow">
                    <GlitchImg src={ImgProfile} className="w-full h-full" />
                </div>
            </div>
            <div>{t.locale}</div>
        </div>
    );
}

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}
