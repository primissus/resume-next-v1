import { Locale as DateFnsLocale } from 'date-fns';
import { es, enUS } from 'date-fns/locale';
import { ValidLocale } from '@lib/i18n';

export const DATE_FNS_LOCALE: Record<ValidLocale, DateFnsLocale> = {
    es,
    en: enUS,
};
