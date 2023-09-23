import { useTranslator } from '@server/hooks/useTranslator';
import { joinWith } from '@lib/string';
import { CVEmployment } from '@type/cv';
import DateRange from '@components/DateRange';

function ExperienceItem({
    info: { job, company, start, end, current, description, place },
}: {
    info: CVEmployment;
}) {
    const t = useTranslator('cv');

    return (
        <li>
            <div>
                <h4>
                    {joinWith(', ', [
                        joinWith(` ${t('atSeparator')} `, [job, company]),
                        place,
                    ])}
                </h4>
            </div>
            <div>
                <p>
                    <DateRange start={start} end={end} current={current} />
                </p>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </li>
    );
}

export default ExperienceItem;
