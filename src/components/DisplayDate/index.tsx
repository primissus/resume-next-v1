import parseDate from 'date-fns/parse';
import formatDate from 'date-fns/format';
import { useLocale } from '@server/hooks/useLocale';
import { DATE_FNS_LOCALE } from './constants';
import { defaultLocale } from '@lib/i18n';

const DEFAULT_DATE_FORMAT = 'PP';

interface DisplayDateProps {
    date: string;
    format?: string;
}

export default function DisplayDate({
    date: dateRaw,
    format,
}: DisplayDateProps) {
    const locale = useLocale() || defaultLocale;
    const date = format
        ? parseDate(dateRaw, format, new Date())
        : new Date(dateRaw);
    const formattedDate = formatDate(date, format || DEFAULT_DATE_FORMAT, {
        locale: DATE_FNS_LOCALE[locale],
    });

    return <time dateTime={date.toISOString()}>{formattedDate}</time>;
}
