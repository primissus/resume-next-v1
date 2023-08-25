import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Icon as IconType } from 'react-feather';

export interface DropdownItemProps {
    children: string;
    href?: string;
}

export function DropdownItem({ children, href }: DropdownItemProps) {
    return (
        <li><Link href={href || '.'}><div className="p-2">{children}</div></Link></li>
    );
}

export interface DropdownIconProps {
    icon: IconType;
    children?: ReactNode[];
}

export default function DropdownIcon({ icon: Icon, children }: DropdownIconProps) {
    return (
        <div className='relative'>
            <button className="p-2">
                <Icon color='white' size={16} />
            </button>
            <ul className="absolute right-0">
                {children}
            </ul>
        </div>
    );
}
