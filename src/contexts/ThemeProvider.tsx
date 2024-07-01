import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {

    const [themeName, setThemeName] = useState('light');

    useEffect(() => {
        const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        localStorage.getItem('themeName') ?
            setThemeName(localStorage.getItem('themeName')) :
            setThemeName(darkMediaQuery.matches ? 'dark' : 'light');

        darkMediaQuery.addEventListener('change', ({ matches }) => {
            setThemeName(matches ? 'dark' : 'light');
        });
    }, [])

    const toggleTheme = () => {
        const name = themeName === 'dark' ? 'light' : 'dark';
        localStorage.setItem('themeName', name);
        setThemeName(name);
    }

    document.body.classList.add(themeName);
    document.body.classList.remove(themeName === 'dark' ? 'light' : 'dark');

    return (
        <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
            {children}
        </ThemeContext.Provider>
    )
}
