import { readYamlPost } from '@lib/yaml';
import { useTranslator } from '@server/hooks/useTranslator';
import { provideLocale } from '@server/hooks/useLocale';
import { CVData } from '@type/cv';

interface CVPageProps { params: { locale: string } }

export default function CVPage({ params: { locale } }: CVPageProps) {
    provideLocale(locale);
    const t = useTranslator('cv');
    const cvData: CVData = readYamlPost('cv', locale);

    return (
        <article>
            <div>
                <h2>{cvData.name}</h2>
                <h3>{cvData.title}</h3>
            </div>
            <div>
                <div>
                    <h3>{t('profile')}</h3>
                    <p>{cvData.profileDescription}</p>
                </div>
                <div>
                    <h3>{t('experience')}</h3>
                </div>
            </div>
        </article>
    );
}
