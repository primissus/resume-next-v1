'use client';
import { useState, cloneElement, Children, ReactElement } from 'react';
import { Icon as IconType } from 'react-feather';

export interface DropdownIconProps {
    icon: IconType;
    children?: ReactElement[] | undefined;
}

export default function DropdownIcon({ icon: Icon, children }: DropdownIconProps) {
    const [isOpen, setIsOpen] = useState(false);

    const onItemClick = () => {
        setIsOpen(false);
    }

    return (
        <div className='relative'>
            <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
                <Icon color='white' size={16} />
            </button>
            {isOpen ? (
                <ul className="absolute right-0 z-50">
                    {children && Children.map(children, (child) => cloneElement(child, { onClick: onItemClick }))}
                </ul>
            ) : undefined}
        </div>
    );
}
