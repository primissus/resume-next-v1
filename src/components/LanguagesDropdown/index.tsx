'use client';
import { usePathname } from 'next/navigation';
import { Globe } from 'react-feather';
import DropdownIcon, { DropdownItem } from '@components/DropdownIcon';
import { locales } from '@src/i18n';


function trimLocaleFrom(pathname: string) {
    const belongingLocale = locales.find((locale) => pathname.startsWith(`/${locale}`));
    if (belongingLocale) {
        return pathname.substring(belongingLocale.length + 1);
    }
    return pathname;
}

export default function LanguagesDropdown() {
    const pathname = usePathname();
    const trimmedPathname = trimLocaleFrom(pathname);

    return (
        <DropdownIcon icon={Globe}>
            <DropdownItem href={`/es${trimmedPathname}`}>Español</DropdownItem>
            <DropdownItem href={`/en${trimmedPathname}`}>Ingles</DropdownItem>
        </DropdownIcon>
    );
}
