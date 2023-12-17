import React from 'react';
import { render, screen } from '@testing-library/react';
import { ValidLocale, defaultLocale } from '@lib/i18n';
import homeDict from '@src/dictionaries/en/home.json';
import RootPage from './page';

describe('RootPage', () => {
    function setup({ locale = defaultLocale }: { locale?: ValidLocale } = {}) {
        render(<RootPage params={{ locale }} />);
    }

    it('Shows main content correctly', () => {
        setup();

        expect(screen.getByText(homeDict.helloMessage)).toBeInTheDocument();
        expect(screen.getAllByRole('img').length).toBeGreaterThan(0);
    });
});
