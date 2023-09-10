import Header from '@server/components/LayoutHeader'
import './globals.css';
import { LocaleProvider } from '@hooks/useLocale';
import { useLocale } from '@server/hooks/useLocale';

export const metadata = {
    title: 'Manuel Ruiz',
    description: 'Manuel Ruiz Profile Page',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    const locale = useLocale();

    return (
        <html lang={locale} className="h-full">
            <body className="h-full bg-slate-950 text-white">
                <LocaleProvider>
                    <div className="container h-full mx-auto flex flex-col">
                        <Header />
                        {children}
                    </div>
                </LocaleProvider>
            </body>
        </html>
    );
}

