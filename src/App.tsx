import React, { useEffect, useState } from 'react';
import { fetchData } from '@/utils';
import { common } from '@/queries';
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

export const App = () => {

    const [commonData, setCommonData] = useState({
        profile: {},
        stack: [],
    });

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
            </main>
            <ScrollToTop />
            <Footer />
            <CRT />
        </>
    );

};
