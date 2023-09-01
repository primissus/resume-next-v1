export const defaultLocale = 'en';
export const locales = ['en', 'es'];
export type ValidLocale = typeof locales[number];

export type TranslatorFn = (
    key: string,
    options?: {
        data?: { [key: string]: string | number },
        debug?: boolean,
    }
) => string

export type Translator = TranslatorFn & { locale?: string };

//const dictionaries: Record<ValidLocale, any> = {
    //en: import('./dictionaries/en.json').then((module) => module.default),
    //es: import('./dictionaries/es.json').then((module) => module.default),
//}

export const getLocaleFrom = (pathname: string): string => {
    const [, locale] = pathname.toLowerCase().split('/');
    return locale;
}

export const getTranslatorFrom = (dictionary: any): Translator => {
    return (key: string, { data, debug } = {}) => {
        let translation = key.split('.').reduce((obj, key) => obj && obj[key], dictionary);

        if (!translation) {
            return key;
        }

        if (debug) {
            console.log(key, dictionary)
        }

        if (data && Object.entries(data).length) {
            Object.entries(data).forEach(([key, value]) => {
                translation = translation!.replace(`{{ ${key} }}`, String(value));
            });
        }
        return translation;
    }
}

export const getTranslator = async (locale: ValidLocale) => {
    const dictionary = await import(`./dictionaries/${locale}.json`);
    //const dictionary = await dictionaries[locale]();

    return getTranslatorFrom(dictionary);
}

