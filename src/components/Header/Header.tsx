import React from 'react';
import { Avatar, Navbar } from './..';

import './Header.scss';

export const Header = ({ data }) => {

    const {
        github,
        homepage,
        title,
    } = data;

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
