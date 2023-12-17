import React from 'react';
import { render, screen } from '@testing-library/react';
import { generateStaticParams } from './page';

describe('HomePage', () => {
    const defaultParams = [{ locale: 'en' }, { locale: 'es' }];

    describe('generateStaticParams', () => {
        it('generates params for valid locales', async () => {
            const params = await generateStaticParams();

            expect(params).toEqual(defaultParams);
        });
    });
});
