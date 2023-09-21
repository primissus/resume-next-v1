import { readYamlPost } from '@lib/yaml';
import { joinWith } from '@lib/string';
import { useTranslator } from '@server/hooks/useTranslator';
import { provideLocale } from '@server/hooks/useLocale';
import { CVData, CVEmployment } from '@type/cv';

interface CVPageProps {
    params: { locale: string };
}

function ExperienceItem({
    item,
    atSeparator,
}: {
    item: CVEmployment;
    atSeparator: string;
}) {
    return (
        <li>
            <div>
                <h4>
                    {joinWith(', ', [
                        joinWith(` ${atSeparator} `, [item.job, item.company]),
                        item.place,
                    ])}
                </h4>
            </div>
            <div>
                <p>
                    {joinWith(' – ', [])}
                </p>
            </div>
            <div>
                <p>
                    {item.description}
                </p>
            </div>
        </li>
    );
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
                            <ExperienceItem
                                key={item.job}
                                item={item}
                                atSeparator={t('atSeparator')}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        </article>
    );
}
