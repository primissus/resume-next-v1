import { getPostBySlug } from '@lib/api';
import mdToHtml from '@lib/mdToHtml';
import PostBody from '@components/PostBody';
import { defaultLocale, locales } from '@src/i18n';
import { provideLocale } from '@server/hooks/useLocale';

interface AboutThisPageProps { params: { locale: string } }

export default async function AboutThisPage({ params: { locale } }: AboutThisPageProps) {
    provideLocale(locale);
    const htmlContent = await mdToHtml(getPostBySlug('about-this-page', locale || defaultLocale));

    return (
        <article>
            <PostBody content={htmlContent} />
        </article>
    );
}

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

