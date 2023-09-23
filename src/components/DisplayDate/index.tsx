import formatDate from 'date-fns/format';
import { useLocale } from '@server/hooks/useLocale';
import { DATE_FNS_LOCALE } from './constants';
import { defaultLocale } from '@lib/i18n';

interface DisplayDateProps {
  date: string;
  format?: string;
}

export default function DisplayDate({
  date: dateRaw,
  format = 'PP',
}: DisplayDateProps) {
  const locale = useLocale() || defaultLocale;
  const date = new Date(dateRaw);
  const formattedDate = formatDate(date, format, {
    locale: DATE_FNS_LOCALE[locale],
  });

  return <time dateTime={date.toISOString()}>{formattedDate}</time>;
}
