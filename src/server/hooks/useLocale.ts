import { defaultLocale } from '@lib/i18n';
import useServerContext from 'server-only-context';

const [getLocale, setLocale] = useServerContext<string | undefined>(undefined);

export function provideLocale(locale: string, override?: boolean) {
    const currentLocale = getLocale();

    if (!currentLocale || override) {
        setLocale(locale);
    }
}

export function useLocale(): string {
    const currentLocale = getLocale();

    return currentLocale || defaultLocale;
}

export function useLocaleRaw(): string | undefined {
    const currentLocale = getLocale();

    return currentLocale;
}
