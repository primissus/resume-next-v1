import { readYamlPost } from '@lib/yaml';
import { locales } from '@lib/i18n';
import { provideLocale } from '@server/hooks/useLocale';
import { CVData } from '@type/cv';
import Section from './Section';
import AsideSection from './AsideSection';
import './styles.css';

interface CVPageProps {
    params: { locale: string };
}

export default function CVPage({ params: { locale } }: CVPageProps) {
    provideLocale(locale);
    const cvData: CVData = readYamlPost('cv', locale);

    return (
        <article className='max-w-4xl mx-auto'>
            <div className='mb-8'>
                <h2 className='text-4xl font-bold'>{cvData.name}</h2>
                <h3 className='text-xl'>{cvData.title}</h3>
            </div>
            <div className='flex flex-col md:flex-row gap-x-8 print:flex-row'>
                <div>
                    {cvData.sections.map((section) => (
                        <Section key={section.section} section={section} />
                    ))}
                </div>
                <div>
                    {cvData.asideSections.map((section) => (
                        <AsideSection key={section.section} section={section} />
                    ))}
                </div>
            </div>
        </article>
    );
}

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}
