import { useTranslator } from '@server/hooks/useTranslator';
import LocaleLink from '@server/components/LocaleLink';

const NavItem = ({ children, href }: { children: string; href: string; }) => (
    <li><LocaleLink href={href}><span className="inline-block p-2">{children}</span></LocaleLink></li>
);


export default function LayoutHeader() {
    const t = useTranslator('home');

    return (
        <nav>
            <ul className="flex flex-row">
                <NavItem href="/">{t('home')}</NavItem>
                <NavItem href="about-this-page">{t('about')}</NavItem>
            </ul>
        </nav>
    );
}

