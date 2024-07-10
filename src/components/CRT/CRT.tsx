import React from 'react';

import './CRT.scss';

export const CRT = () => (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="0" height="0">
            <defs>
                <filter id="crt-glow" x="-50%" y="-50%" width="21" height="21">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"></feGaussianBlur>
                    <feMerge>
                        <feMergeNode in="coloredBlur"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                </filter>
            </defs>
        </svg>
        <div className="scanlines"></div>
    </>
)
