import { useTranslator } from '@server/hooks/useTranslator';
import LocaleLink from '@server/components/LocaleLink';

export default function LayoutHeader() {
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

