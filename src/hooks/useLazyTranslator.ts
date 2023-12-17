'use client';
import { getTranslator, Translator } from '@lib/i18n';
import { useEffect, useState } from 'react';
import { useLocale } from './useLocale';

const emptyTranslator: Translator = (key: string) => {
    return key;
};

export function useLazyTranslator() {
    const [translator, setTranslator] = useState<Translator>(emptyTranslator);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(undefined);
    const locale = useLocale();

    useEffect(() => {
        if (locale) {
            loadTranslator();
        }
    }, [locale]);

    const loadTranslator = async () => {
        try {
            setError(undefined);
            setLoading(true);
            const loadedTranslator = await getTranslator(locale);

            setTranslator(() => loadedTranslator);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { t: translator, loading, error };
}
