import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light');
    const [crt, setCrt] = useState('off');

    useEffect(() => {
        const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        localStorage.getItem('theme') ?
            setTheme(localStorage.getItem('theme')) :
            setTheme(darkMediaQuery.matches ? 'dark' : 'light');

        darkMediaQuery.addEventListener('change', ({ matches }) => {
            setTheme(matches ? 'dark' : 'light');
        });
    }, [])

    const toggleTheme = () => {
        const name = theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', name);
        setTheme(name);
    }

    const toggleCrt = () => {
        const mode = crt === 'on' ? 'off' : 'on';
        localStorage.setItem('crt', mode);
        setCrt(mode);
        document.documentElement.setAttribute('data-crt', mode);
    }

    document.documentElement.setAttribute('data-theme', theme);

    return (
        <ThemeContext.Provider value={[{ theme, toggleTheme, crt, toggleCrt }]}>
            {children}
        </ThemeContext.Provider>
    )
}
