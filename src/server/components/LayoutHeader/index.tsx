import { useTranslator } from '@server/hooks/useTranslator';
import LocaleLink from '@server/components/LocaleLink';
import { LanguagesDropdown } from '@components/LanguagesDropdown';
import { NAV_ITEMS } from './constants';

const NavItem = ({ children, href }: { children: string; href: string }) => (
    <li>
        <LocaleLink href={href}>
            <span className='inline-block p-2'>{children}</span>
        </LocaleLink>
    </li>
);

export default function LayoutHeader() {
    const t = useTranslator('home');

    return (
        <nav data-testid='root-layout-header-nav' className='print:hidden'>
            <ul className='flex flex-row items-center'>
                {NAV_ITEMS.map(({ href, labelKey }) => (
                    <NavItem key={labelKey} href={href}>
                        {t(labelKey)}
                    </NavItem>
                ))}
                <div className='flex-grow' />
                <li>
                    <LanguagesDropdown />
                </li>
            </ul>
        </nav>
    );
}
