import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { profile as readmeContent } from '@/data';

import './Personal.scss'

export const Personal = () => {

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
