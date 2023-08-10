import { getPostBySlug } from '@lib/api';
import mdToHtml from '@lib/mdToHtml';
import PostBody from '@components/PostBody';
import { locales } from '@/src/i18n';

export default async function AboutThisPage({ params: { locale } }: { params: { locale: string } }) {
    const htmlContent = await mdToHtml(getPostBySlug('about-this-page', locale));

    return (
        <article>
            <PostBody content={htmlContent} />
        </article>
    );
}

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}
