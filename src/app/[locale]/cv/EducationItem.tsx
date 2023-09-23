import DateRange from '@components/DateRange';
import { joinWith } from '@lib/string';
import { CVEducationInfo } from '@type/cv';

function EducationItem({
    info: { title, school, place, start, end },
}: {
    info: CVEducationInfo;
}) {
    return (
        <div>
            <h4>{joinWith(', ', [title, school, place])}</h4>
            <p>
                <DateRange start={start} end={end} />
            </p>
        </div>
    );
}

export default EducationItem;
