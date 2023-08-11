import fs from 'fs';
import { join } from 'path';
import { getTranslatorFrom } from '@src/i18n';
import { useLocale } from '@server/hooks/useLocale';

const dictionariesDir = join(process.cwd(), 'src/dictionaries');

export function useTranslator(namespace: string) {
    const locale = useLocale();

    const fullPath = join(dictionariesDir, locale, `${namespace}.json`);
    const dictionary = JSON.parse(fs.readFileSync(fullPath, 'utf8'));

    const translator = getTranslatorFrom(dictionary);

    translator.locale = locale;

    return translator;
}
