import React, { useEffect, useState } from 'react';

import './ScrollToTop.scss';

export const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () =>
            window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [])

    return isVisible ? (
        <div className="scroll--top">
            <a href="#top">
                top
            </a>
        </div>
    ) : null;
}
