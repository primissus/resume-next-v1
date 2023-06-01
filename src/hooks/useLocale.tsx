import { createContext, useContext } from 'react';
import { ValidLocale } from '../i18n';

export const LocaleContext = createContext('en');

export function LocaleProvider({ value, children }: { value: ValidLocale, children: JSX.Element }) {
    return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
    return useContext(LocaleContext);
}

