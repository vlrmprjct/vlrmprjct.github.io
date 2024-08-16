import React, { useEffect, useState } from 'react';
import { Icon } from '@/components';

import './ScrollToTop.scss';

export const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () =>
            window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [])

    return isVisible ? (
        <div className="scroll--top">
            <a href="#top">
                <Icon icon="AngleTop" />
            </a>
        </div>
    ) : null;
}
