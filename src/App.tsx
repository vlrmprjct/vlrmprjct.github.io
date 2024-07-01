import React from 'react';
import {
    About,
    Contact,
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
                <Contact />
            </main>
            <ScrollToTop />
            <Footer />
        </>
    );

};
