import { useTranslator } from '@server/hooks/useTranslator';
import LocaleLink from '@server/components/LocaleLink';
import { LanguagesDropdown } from '@components/LanguagesDropdown';


const NavItem = ({ children, href }: { children: string; href: string; }) => (
    <li><LocaleLink href={href}><span className="inline-block p-2">{children}</span></LocaleLink></li>
);



export default function LayoutHeader() {
    const t = useTranslator('home');

    return (
        <nav>
            <ul className="flex flex-row items-center">
                <NavItem href="/">{t('home')}</NavItem>
                <NavItem href="about-this-page">{t('about')}</NavItem>
                <div className="flex-grow" />
                <li>
                    <LanguagesDropdown />
                </li>
            </ul>
        </nav>
    );
}

