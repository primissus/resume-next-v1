import DisplayDate from '@components/DisplayDate';
import { useTranslator } from '@server/hooks/useTranslator';

export interface DateRangeProps {
    start?: string;
    end?: string;
    current?: boolean;
    dateFormat?: string;
}

const DateRange = ({ start, end, current, dateFormat }: DateRangeProps) => {
    const t = useTranslator('cv');

    return (
        <>
            {start ? (
                <DisplayDate date={start} format={dateFormat} />
            ) : undefined}
            {start && (end || current) ? <span> — </span> : undefined}
            {end ? <DisplayDate date={end} format={dateFormat} /> : undefined}
            {current ? <span>{t('current')}</span> : undefined}
        </>
    );
};

export default DateRange;
