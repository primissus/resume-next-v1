import DisplayDate from '@components/DisplayDate';
import { useTranslator } from '@server/hooks/useTranslator';

interface DateRangeProps {
    start?: string;
    end?: string;
    current?: boolean;
}

const DateRange = ({ start, end, current }: DateRangeProps) => {
    const t = useTranslator('cv');

    return (
        <>
            {start ? <DisplayDate date={start} /> : undefined}
            {start && (end || current) ? <span> — </span> : undefined}
            {end ? <DisplayDate date={end} /> : undefined}
            {current ? <span>{t('current')}</span> : undefined}
        </>
    );
};

export default DateRange;
