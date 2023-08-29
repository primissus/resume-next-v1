'use client'
import { getTranslator } from '@src/i18n';
import { useLocale } from './useLocale';

export function useTranslator() {
    const locale = useLocale();

    console.log('useTranslator locale:', locale);

    return getTranslator(locale);
}
