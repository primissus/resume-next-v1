import { readYamlPost } from '@lib/yaml';
import { locales } from '@lib/i18n';
import { useTranslator } from '@server/hooks/useTranslator';
import { provideLocale } from '@server/hooks/useLocale';
import { CVData } from '@type/cv';
import ExperienceItem from './ExperienceItem';
import EducationItem from './EducationItem';
import PortfolioItem from './PortfolioItem';

interface CVPageProps {
    params: { locale: string };
}

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
                    <p></p>
                </div>
                <div>
                    <h3>{t('experience')}</h3>
                    <ol>
                        {cvData.employmentHistory.map((item) => (
                            <ExperienceItem key={item.job} info={item} />
                        ))}
                    </ol>
                </div>
                <div>
                    <h3>{t('education')}</h3>
                    <ol>
                        {cvData.education.map((item) => (
                            <EducationItem key={item.school} info={item} />
                        ))}
                    </ol>
                </div>
                <div>
                    <h3>{t('portfolio')}</h3>
                    <ol>
                        {cvData.portfolio.map((item) => (
                            <PortfolioItem key={item.projectName} info={item} />
                        ))}
                    </ol>
                </div>
            </div>
        </article>
    );
}

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}
