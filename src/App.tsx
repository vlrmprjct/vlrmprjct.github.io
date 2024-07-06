import React from 'react';
import {
    About,
    Footer,
    Header,
    ScrollToTop,
    Skills,
    Projects,
} from '@/components';

export const App = () => {

    return (
        <>
            <Header />
            <main>
                <About />
                <Projects />
                <Skills />
            </main>
            <ScrollToTop />
            <Footer />
        </>
    );

};
