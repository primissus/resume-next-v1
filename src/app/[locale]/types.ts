import { ValidLocale } from '@lib/i18n';

export interface LocaleParams {
    locale: ValidLocale;
}

export interface LocaleComponentProps {
    params: LocaleParams;
}

