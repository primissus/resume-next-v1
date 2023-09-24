import RankBar from '@components/RankBar';
import { CVAsideSectionItem } from '@type/cv';

function AsideSectionItem({ info: {name, text, link, rank } }: { info: CVAsideSectionItem }) {
    return (
        <li className='mb-3'>
            <p className='text-lg'>
                <span>{name}</span>
                {name && text ?<span>: </span> : undefined}
                {text ? (link ? <a href={link}>{text}</a> : <span>{text}</span>) : undefined}
                {rank !== undefined ? <RankBar className='max-w-xs' rank={rank} /> : undefined}
            </p>
        </li>
    );
}

export default AsideSectionItem;
