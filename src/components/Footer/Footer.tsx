import React from 'react';

import './Footer.scss';

export const Footer = () => (
    <footer className='footer'>
        {new Date().getFullYear()}
        {' '}
        Dresden, Germany
    </footer>
)
