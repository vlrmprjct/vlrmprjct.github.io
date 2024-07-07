import React, { useContext, useState } from 'react';
import { ThemeContext } from '@/contexts/ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

import './Navbar.scss';

export const Navbar = () => {

    const [{ themeName, toggleTheme }] = useContext(ThemeContext);
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
                {themeName === 'dark' ?
                    <FontAwesomeIcon icon={faSun} size="xl" /> :
                    <FontAwesomeIcon icon={faMoon} size="xl" />
                }
            </button>

            <button
                type="button"
                onClick={toggleNavList}
                className="btn btn--icon nav--menu"
                aria-label="toggle navigation"
            >
                {showNavList ?
                    <FontAwesomeIcon icon={faClose} size="xl" /> :
                    <FontAwesomeIcon icon={faBars} size="xl" />
                }
            </button>
        </nav>
    )
}
