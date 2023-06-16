let _locale: string;

export function useLocale() {
    if (!_locale) {
        throw new Error('Locale has not been provided, use provideLocale');
    }

    return _locale;
}

export function provideLocale(locale: string) {
    _locale = locale;
}
