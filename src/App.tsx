import React, { useContext, useEffect, useState } from 'react';
import { fetchData } from '@/utils';
import { common } from '@/queries';
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

    const [commonData, setCommonData] = useState({
        profile: {},
        stack: [],
    });

    const [{ theme }] = useContext(ThemeContext);

    useEffect(() => {
        fetchData(common, ({ data }) => {
            setCommonData(JSON.parse(data.repository.object.text.replace(/^"(.*)"$/, '$1')));
        });
    }, []);

    const { profile, stack } = commonData;

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
