import clsx from 'clsx';

function RankBar({ rank, className }: { rank: number; className?: string }) {
    const percentage = Math.round((rank / 5) * 100);

    return (
        <div className={clsx('relative w-full', className)}>
            <div
                className={`absolute h-[2px] w-full bg-dark-blue print:bg-[#e6ebf4]`}
            />
            <div
                className={`absolute h-[2px] bg-blue`}
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
}

export default RankBar;
