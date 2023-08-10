import { provideLocale } from '@server/hooks/useLocale';

export default function HomeLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode,
    params: { locale: string },
}) {
    return children;
}
