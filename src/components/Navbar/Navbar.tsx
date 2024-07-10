import React, { useContext, useState } from 'react';
import {
    Icon,
} from '@/components/';
import { ThemeContext } from '@/contexts/ThemeProvider';

import './Navbar.scss';

export const Navbar = () => {

    const [{ theme, crt, toggleCrt, toggleTheme }] = useContext(ThemeContext);
    const [showNavList, setShowNavList] = useState(false);

    const toggleNavList = () => setShowNavList(!showNavList);

    return (
        <nav className="center nav">
            <ul
                style={{ display: showNavList ? 'flex' : null }}
                className="nav--list"
            >
                <li className="nav--list-item">
                    <a
                        href="#projects"
                        onClick={toggleNavList}
                        className="link link--nav"
                    >
                        Projects
                    </a>
                </li>

                <li className="nav--list-item">
                    <a
                        href="#stack"
                        onClick={toggleNavList}
                        className="link link--nav"
                    >
                        Stack
                    </a>
                </li>

                <li className="nav--list-item">
                    <a
                        href="#personal"
                        onClick={toggleNavList}
                        className="link link--nav"
                    >
                        About
                    </a>
                </li>

            </ul>

            <button
                type="button"
                onClick={toggleTheme}
                className="btn btn--icon"
                aria-label="toggle theme"
            >
                {theme === 'dark' ?
                    <Icon icon="Sun" /> :
                    <Icon icon="Moon" />
                }
            </button>

            <button
                type="button"
                onClick={toggleCrt}
                className="btn btn--icon"
                aria-label="toggle CRT"
                title="Simulate vintage CRT monitor"
            >
                {crt === 'off' ?
                    <Icon icon="CRT" /> :
                    <Icon icon="CRT_ON" />
                }
            </button>

            <button
                type="button"
                onClick={toggleNavList}
                className="btn btn--icon nav--menu"
                aria-label="toggle navigation"
            >
                {showNavList ?
                    <Icon icon="Close" /> :
                    <Icon icon="Menu" />
                }
            </button>
        </nav>
    )
}
