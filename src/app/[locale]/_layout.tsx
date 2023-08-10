import { provideLocale } from '@server/hooks/useLocale';

export default function HomeLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode,
    params: { locale: string },
}) {
    provideLocale(locale, true);

    return children;
}
