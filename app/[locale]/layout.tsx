import './globals.css';

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
    return (
        <html lang={locale}>
            <body>
                {children}
            </body>
        </html>
    );
}
