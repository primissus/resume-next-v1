export const defaultLocale = 'en';
export const locales = ['en', 'es'];
export type ValidLocale = typeof locales[number];

const dictionaries: Record<ValidLocale, any> = {
    en: import('../dictionaries/en.json').then((module) => module.default),
    es: import('../dictionaries/es.json').then((module) => module.default),
}

export const getLocaleFrom = (pathname: string): string => {
    const [, locale] = pathname.toLowerCase().split('/');
    return locale;
}

export const getTranslator = async (locale: ValidLocale) => {
    const dictionary = await dictionaries[locale]();

    return(key: string, params?: { [key: string]: string | number }) => {
        let translation = key.split('.').reduce((obj, key) => obj && obj[key], dictionary);
        if (!translation) {
            return key;
        }

        if (params && Object.entries(params).length) {
            Object.entries(params).forEach(([key, value]) => {
                translation = translation!.replace(`{{ ${key} }}`, String(value));
            });
        }
        return translation;
    }
}
