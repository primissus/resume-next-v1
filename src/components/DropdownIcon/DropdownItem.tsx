import Link from 'next/link';

export interface DropdownItemProps {
    children: string;
    href?: string;
    onClick?: () => void;
}

function noop() {}

export function DropdownItem({ children, href, onClick = noop }: DropdownItemProps) {
    return (
        <li><Link href={href || '.'} onClick={onClick}><div className="p-2">{children}</div></Link></li>
    );
}
