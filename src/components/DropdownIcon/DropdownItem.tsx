export interface DropdownItemProps {
    children: string;
    href: string;
    onClick?: () => void;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

function noop() { }

export function DropdownItem({ children, href, onClick = noop }: DropdownItemProps) {
    return (
        <li><a href={basePath ? `${basePath}${href}` : href} onClick={onClick}><div className="p-2">{children}</div></a></li>
    );
}
