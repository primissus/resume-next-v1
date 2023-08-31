export interface DropdownItemProps {
    children: string;
    href?: string;
    onClick?: () => void;
}

function noop() {}

export function DropdownItem({ children, href, onClick = noop }: DropdownItemProps) {
    return (
        <li><a href={href || '.'} onClick={onClick}><div className="p-2">{children}</div></a></li>
    );
}
