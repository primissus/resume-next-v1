import DateRange from '@components/DateRange';
import { joinWith } from '@lib/string';
import { CVProject } from '@type/cv';

function PortfolioItem({
    info: { projectName, place, start, end, description },
}: {
    info: CVProject;
}) {
    return (
        <div>
            <h4>{joinWith(', ', [projectName, place])}</h4>
            <p>
                <DateRange start={start} end={end} />
            </p>
            <p>{description}</p>
        </div>
    );
}

export default PortfolioItem;
