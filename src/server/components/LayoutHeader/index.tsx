import { Globe } from 'react-feather';
import { useTranslator } from '@server/hooks/useTranslator';
import LocaleLink from '@server/components/LocaleLink';
import DropdownIcon, { DropdownItem } from '@components/DropdownIcon';

import { useLocale } from '@server/hooks/useLocale';
import { usePathname } from 'next/navigation';

const NavItem = ({ children, href }: { children: string; href: string; }) => (
    <li><LocaleLink href={href}><span className="inline-block p-2">{children}</span></LocaleLink></li>
);

function LanguagesDropdown() {
    const locale = useLocale();
    const pathname = usePathname();

    console.log({ locale, pathname });

    return (
        <DropdownIcon icon={Globe}>
            <DropdownItem>Español</DropdownItem>
            <DropdownItem>Ingles</DropdownItem>
        </DropdownIcon>
    );
}


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

