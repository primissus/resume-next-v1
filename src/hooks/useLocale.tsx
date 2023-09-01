'use client'
import { createContext, useContext } from 'react';
import { useParams } from 'next/navigation';
import { defaultLocale } from '@src/i18n';
import { ValidLocale } from '../i18n';

export const LocaleContext = createContext<ValidLocale>('en');

export function LocaleProvider({ children }: { children: JSX.Element }) {
    const { locale = defaultLocale } = useParams() as { locale?: ValidLocale };

    return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
}

export function useLocale() {
    return useContext(LocaleContext);
}

