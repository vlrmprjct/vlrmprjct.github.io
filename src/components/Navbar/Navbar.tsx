import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeProvider';
import { projects, skills, contact } from '../../portfolio';

import './Navbar.scss';

export const Navbar = () => {

    const [{ themeName, toggleTheme }] = useContext(ThemeContext);
    const [showNavList, setShowNavList] = useState(false);

    const toggleNavList = () => setShowNavList(!showNavList);

    return (
        <nav className='center nav'>
            <ul
                style={{ display: showNavList ? 'flex' : null }}
                className='nav__list'
            >
                {projects.length ? (
                    <li className='nav__list-item'>
                        <a
                            href='#projects'
                            onClick={toggleNavList}
                            className='link link--nav'
                        >
                            Projects
                        </a>
                    </li>
                ) : null}

                {skills.length ? (
                    <li className='nav__list-item'>
                        <a
                            href='#skills'
                            onClick={toggleNavList}
                            className='link link--nav'
                        >
                            Skills
                        </a>
                    </li>
                ) : null}

                {contact.email ? (
                    <li className='nav__list-item'>
                        <a
                            href='#contact'
                            onClick={toggleNavList}
                            className='link link--nav'
                        >
                            Contact
                        </a>
                    </li>
                ) : null}
            </ul>

    <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? 'x' : 'o'}
      </button>

      {/* <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button> */}
        </nav>
    )
}
