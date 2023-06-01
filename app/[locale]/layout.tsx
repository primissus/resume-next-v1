import './globals.css';
import { useRouter } from 'next/router';
import { } from '@/src/hooks/useLocale';

export const metadata = {
    title: 'Manuel Ruiz',
    description: 'Manuel Ruiz Profile Page',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    const router = useRouter();
    const { locale } = router.query;

    console.log('locale', locale);

    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
