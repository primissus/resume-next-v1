import { render, screen, waitFor } from '@testing-library/react';
import { useParams } from 'next/navigation';
import { locales, ValidLocale } from '@lib/i18n';
import { provideLocale } from '@server/hooks/useLocale';
import { NAV_ITEMS } from '@server/components/LayoutHeader/constants';
import { useTranslator } from '@server/hooks/useTranslator';
import RootLayout from './layout';

jest.mock('next/navigation', () => ({
    useParams: jest.fn(),
    usePathname: jest.fn().mockReturnValue('/'),
}));

describe('RootLayout', () => {
    const setup = (locale: ValidLocale) => {
        (useParams as jest.Mock).mockReturnValue({ locale });
        provideLocale(locale);
        render(<RootLayout> </RootLayout>);
    };

    it.each([locales])(
        'shows correct nav items with %s locale',
        async (locale: ValidLocale) => {
            setup(locale);
            const t = useTranslator('home');

            await waitFor(() =>
                expect(
                    screen.getByTestId('root-layout-header-nav'),
                ).toBeInTheDocument(),
            );
            for (const { labelKey } of NAV_ITEMS) {
                expect(screen.getByText(t(labelKey)));
            }
        },
    );
});
