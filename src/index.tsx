import React, { createElement, useContext } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@/contexts';
import { App } from './App';

import "./scss/index.scss";

const root = document.body.querySelector('[data-root]');

if (!root) {
    throw new Error('Could not find root element!');
}

const rootElement = createElement(() => {
    return (
        <ThemeProvider>
            <App />
        </ThemeProvider>
    );
});

createRoot(root).render(rootElement);
