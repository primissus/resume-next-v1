import { ValidLocale } from '@src/i18n';

export interface LocaleParams {
    locale: ValidLocale;
}

export interface LocaleComponentProps {
    params: LocaleParams;
}

