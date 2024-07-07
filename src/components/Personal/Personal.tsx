import React, { useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { profile } from '@/queries';
import { fetchData } from '@/utils';

import './Personal.scss'

export const Personal = () => {

    const [readmeContent, setReadmeContent] = useState('');

    useEffect(() => {
        fetchData(profile, ({ data }) => setReadmeContent(data.repository.object.text));
    }, []);

    return (
        <section id="personal" className="section personal">
            <h2 className="section--title">
                Things about me
            </h2>
            <div className="personal center">
                <ReactMarkdown className='personal--desc'
                    remarkPlugins={[remarkGfm]}
                >
                    {readmeContent}
                </ReactMarkdown>
            </div>
        </section>
    )
};
