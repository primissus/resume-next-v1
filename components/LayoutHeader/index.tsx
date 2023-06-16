import { useLocale } from '@server/hooks/useLocale';

export function LayoutHeader() {
    const locale = useLocale();

    console.log('LayoutHeader locale', locale);

    return <></>;
}
