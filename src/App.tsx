import React, { useContext, useEffect, useState } from 'react';
import { fetchData } from '@/utils';
import { common } from '@/queries';
import GitHubCalendar from 'react-github-calendar';
import { ThemeContext } from '@/contexts/ThemeProvider';
import {
    CRT,
    About,
    Footer,
    Header,
    ScrollToTop,
    Stack,
    Projects,
    Personal,
} from '@/components';

import * as color from './scss/theme.scss';

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
                <GitHubCalendar
                    blockRadius={1}
                    blockSize={10}
                    colorScheme={theme}
                    hideColorLegend={true}
                    username="vlrmprjct"
                    theme={{
                        light: ['hsl(0, 0%, 92%)', color.accent],
                        dark: ['hsl(0, 0%, 2%)', color.accent],
                    }}
                    style={{ margin: '0 auto' }}
                    weekStart={1}
                />
            </main>
            <ScrollToTop />
            <Footer />
            <CRT />
        </>
    );

};
