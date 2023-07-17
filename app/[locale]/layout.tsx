import './globals.css';
import { provideLocale } from '@server/hooks/useLocale';
import { LayoutHeader } from '@components/LayoutHeader';

export const metadata = {
    title: 'Manuel Ruiz',
    description: 'Manuel Ruiz Profile Page',
};

export default function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode,
    params: { locale: string },
}) {
    provideLocale(locale);

    return (
        <html lang={locale}>
            <body className="bg-slate-950">
                {children}
            </body>
        </html>
    );
}
