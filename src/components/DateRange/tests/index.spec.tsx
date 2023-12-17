import { screen, render } from '@testing-library/react';
import DateRange, { DateRangeProps } from '..';

describe('DateRange', () => {
    const DEFAULT_START_DATE = '2023-01-05T12:00:00.000Z';
    const DEFAULT_END_DATE = '2023-01-06T12:00:00.000Z';

    const setup = ({ props }: { props?: Partial<DateRangeProps> } = {}) => {
        render(<DateRange {...props} />);
    };

    it('should render both dates', () => {
        setup({ props: { start: DEFAULT_START_DATE, end: DEFAULT_END_DATE } });

        expect(screen.getByText('Jan 5, 2023')).toBeInTheDocument();
        expect(screen.getByText('Jan 6, 2023')).toBeInTheDocument();
    });
});
