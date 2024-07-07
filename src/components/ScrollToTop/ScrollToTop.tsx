import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

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
                <FontAwesomeIcon icon={faChevronUp} size="xl" />
            </a>
        </div>
    ) : null;
}
