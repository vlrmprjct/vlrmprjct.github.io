import React from 'react';
import { Avatar, Navbar } from './..';
import { header } from '../../portfolio';

import './Header.scss';

export const Header = () => {
    const { homepage, title } = header

    return (
        <header className='header center'>
            <h3>
                <a href={homepage}>
                    <Avatar username='vlrmprjct' alt={title} />
                </a>
            </h3>
            <Navbar />
        </header>
    )
}
