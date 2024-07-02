import React from 'react';
import { Avatar, Navbar } from './..';
import { header } from '../../portfolio';

import './Header.scss';

export const Header = () => {

    const {
        github,
        homepage,
        title,
    } = header;

    return (
        <header>
            <h3>
                <a href={homepage}>
                    <Avatar username={github} alt={title} />
                </a>
            </h3>
            <Navbar />
        </header>
    )
}
