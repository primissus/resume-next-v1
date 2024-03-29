import { CVAsideSection } from '@type/cv';
import AsideSectionItem from './AsideSectionItem';

function AsideSection({
    section: { section, items },
}: {
    section: CVAsideSection;
}) {
    return (
        <div className='mb-4 print:mb-2'>
            <h3 className='text-3xl font-medium mb-2 print:mb-0'>{section}</h3>
            {items ? (
                <ul>
                    {items.map((item) => (
                        <AsideSectionItem
                            key={item.name || item.text}
                            info={item}
                        />
                    ))}
                </ul>
            ) : undefined}
        </div>
    );
}

export default AsideSection;
