import mdStyles from './md-styles.module.css';

interface Props {
    content: string;
}

export default function PostBody({ content }: Props) {
    return (
        <div className="max-w-3xl mx-auto">
            <div
                className={mdStyles.markdown}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
}
