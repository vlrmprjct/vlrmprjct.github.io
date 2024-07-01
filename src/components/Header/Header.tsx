import React from 'react';
import { Navbar } from '../Navbar/Navbar'
import { header } from '../../portfolio'
import './Header.scss'

export const Header = () => {
    const { homepage, title } = header

    return (
        <header className='header center'>
            <h3>
                {homepage ? (
                    <a href={homepage} className='link'>
                        {title}
                    </a>
                ) : (
                    title
                )}
            </h3>
            <Navbar />
        </header>
    )
}
