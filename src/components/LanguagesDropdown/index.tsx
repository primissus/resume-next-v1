'use client';
import { usePathname } from 'next/navigation';
import { Globe } from 'react-feather';
import DropdownIcon, { DropdownItem } from '@components/DropdownIcon';
import { locales } from '@lib/i18n';
import { useLazyTranslator } from '@hooks/useLazyTranslator';

function trimLocaleFrom(pathname: string) {
    const belongingLocale = locales.find((locale) =>
        pathname.startsWith(`/${locale}`)
    );
    if (belongingLocale) {
        return pathname.substring(belongingLocale.length + 1);
    }
    return pathname;
}

export function LanguagesDropdown() {
    const pathname = usePathname();
    const { t, loading, error } = useLazyTranslator();
    const trimmedPathname = trimLocaleFrom(pathname);

    if (error) {
        return <></>;
    }

    if (loading) {
        return <DropdownIcon disabled icon={Globe} />
    }

    return (
        <DropdownIcon icon={Globe}>
            <DropdownItem href={`/es${trimmedPathname}`}>
                {t('languagesDropdown.es')}
            </DropdownItem>
            <DropdownItem href={`/en${trimmedPathname}`}>
                {t('languagesDropdown.en')}
            </DropdownItem>
        </DropdownIcon>
    );
}
