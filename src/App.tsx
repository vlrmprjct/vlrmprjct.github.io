import React, { useContext } from 'react';
import { common } from '@/data';
import { ThemeContext } from '@/contexts/ThemeProvider';
import {
    CRT,
    About,
    Github,
    Footer,
    Header,
    ScrollToTop,
    Stack,
    Projects,
    Personal,
} from '@/components';

export const App = () => {

    const [{ theme }] = useContext(ThemeContext);

    const { profile, stack } = common;

    return (
        <>
            <Header data={profile} />
            <main>
                <About data={profile} />
                <Projects />
                <Stack data={stack} />
                <Personal />
                <Github theme={theme || 'dark'}/>
            </main>
            <ScrollToTop />
            <Footer />
            <CRT />
        </>
    );

};
