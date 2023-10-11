import RankBar from '@components/RankBar';
import { CVAsideSectionItem } from '@type/cv';

function AsideSectionItem({
    info: { name, text, link, rank },
}: {
    info: CVAsideSectionItem;
}) {
    return (
        <li className='mb-4 print:mb-2'>
            <div className='text-lg'>
                <p>
                    <span>{name}</span>
                    {name && text ? <span>: </span> : undefined}
                    {text ? (
                        link ? (
                            <a href={link}>{text}</a>
                        ) : (
                            <span>{text}</span>
                        )
                    ) : undefined}
                </p>
                {rank !== undefined ? (
                    <RankBar className='max-w-xs' rank={rank} />
                ) : undefined}
            </div>
        </li>
    );
}

export default AsideSectionItem;
