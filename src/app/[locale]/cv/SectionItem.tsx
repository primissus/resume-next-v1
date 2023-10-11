import { joinWith } from '@lib/string';
import { CVSectionItem } from '@type/cv';
import DateRange from '@components/DateRange';

function ExperienceItem({
    atSeparator,
    info: { title, at, place, start, end, dateFormat, current, description },
}: {
    atSeparator?: string;
    info: CVSectionItem;
}) {
    return (
        <li className='mb-4 break-inside-avoid print:mb-3'>
            <div>
                <h4 className='text-lg font-bold'>
                    {joinWith(', ', [
                        joinWith(` ${atSeparator || ', '} `, [title, at]),
                        place,
                    ])}
                </h4>
            </div>
            <div>
                <p className='date-range'>
                    <DateRange
                        start={start}
                        end={end}
                        current={current}
                        dateFormat={dateFormat}
                    />
                </p>
            </div>
            <div>
                <p className='text-lg'>{description}</p>
            </div>
        </li>
    );
}

export default ExperienceItem;
