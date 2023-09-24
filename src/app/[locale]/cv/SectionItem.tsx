import { useTranslator } from '@server/hooks/useTranslator';
import { joinWith } from '@lib/string';
import { CVSectionItem } from '@type/cv';
import DateRange from '@components/DateRange';

function ExperienceItem({
    atSeparator,
    info: { title, at, place, start, end, current, description },
}: {
    atSeparator?: string;
    info: CVSectionItem;
}) {
    return (
        <li className="mb-4">
            <div>
                <h4 className="text-lg font-bold">
                    {joinWith(', ', [
                        joinWith(` ${atSeparator || ', '} `, [title, at]),
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
                <p className="text-lg">{description}</p>
            </div>
        </li>
    );
}

export default ExperienceItem;
