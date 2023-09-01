'use client';
import { usePathname } from 'next/navigation';
import { Globe } from 'react-feather';
import DropdownIcon, { DropdownItem } from '@components/DropdownIcon';
import { useTranslator } from '@hooks/useTanslator';
import { locales } from '@src/i18n';
import { Suspense } from 'react';


function trimLocaleFrom(pathname: string) {
    const belongingLocale = locales.find((locale) => pathname.startsWith(`/${locale}`));
    if (belongingLocale) {
        return pathname.substring(belongingLocale.length + 1);
    }
    return pathname;
}

export async function LanguagesDropdown() {
    const pathname = usePathname();
    const t = await useTranslator();
    const trimmedPathname = trimLocaleFrom(pathname);

    return (
        <DropdownIcon icon={Globe}>
            <DropdownItem href={`/es${trimmedPathname}`}>{t('languagesDropdown.es')}</DropdownItem>
            <DropdownItem href={`/en${trimmedPathname}`}>{t('languagesDropdown.en')}</DropdownItem>
        </DropdownIcon>
    );
}

export default function LazyLanguagesDropdown() {
    return (
        <Suspense fallback={<DropdownIcon icon={Globe} />}>
            <LanguagesDropdown />
        </Suspense>
    );
}
