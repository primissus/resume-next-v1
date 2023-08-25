'use client';
import { useState, ReactNode } from 'react';
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
    children?: ReactNode[] | undefined;
}

export default function DropdownIcon({ icon: Icon, children }: DropdownIconProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='relative'>
            <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
                <Icon color='white' size={16} />
            </button>
            {isOpen ? (
                <ul className="absolute right-0 z-50">
                    {children}
                </ul>
            ) : undefined}
        </div>
    );
}
