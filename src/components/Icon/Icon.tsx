import React from 'react';
import * as Icons from '@/assets/icons';

import './Icon.scss';

interface IconProps {
    icon: keyof typeof Icons;
    className?: string;
    width?: string;
    height?: string;
}

export const Icon: React.FC<IconProps> = ({
    icon,
    className = '',
}) => {

    const IconComponent = Icons[icon];

    if (!IconComponent) {
        return null;
    }

    return <IconComponent className={`icon ${className}`} width="21" height="21" />;
};
