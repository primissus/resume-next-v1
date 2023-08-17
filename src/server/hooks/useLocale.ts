import { defaultLocale } from "@src/i18n";
import userServerContext from 'server-only-context'

const [getLocale, setLocale] = userServerContext<string | undefined>(undefined);

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

