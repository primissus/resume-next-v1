import Header from '@server/components/LayoutHeader'
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
            <body className="bg-slate-950 text-white">
                <div className="container h-screen mx-auto ">
                    <Header/>
                    {children}
                </div>
            </body>
        </html>
    );
}

