import { CVSection } from '@type/cv';
import SectionItem from './SectionItem';

function Section({
    section: { section, description, atSeparator, items },
}: {
    section: CVSection;
}) {
    return (
        <div className='mb-8'>
            <h3 className='text-3xl font-medium mb-4'>{section}</h3>
            {description ? <p className='text-lg'>{description}</p> : undefined}
            {items ? (
                <ol>
                    {items.map((item) => (
                        <SectionItem
                            key={item.title}
                            info={item}
                            atSeparator={atSeparator}
                        />
                    ))}
                </ol>
            ) : undefined}
        </div>
    );
}

export default Section;
