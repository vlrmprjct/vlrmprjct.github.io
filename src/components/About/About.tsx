import React, { useEffect, useState } from 'react';
import { fetchData } from '@/utils';
import { Icon } from '@/components';
import { about } from '@/queries';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import './About.scss'

export const About = ({ data }) => {

    const { email, name, role, cv, social } = data;

    const [aboutContent, setAboutContent] = useState('');

    useEffect(() => {
        fetchData(about, ({ data }) => setAboutContent(data.repository.object.text));
    }, []);

    return (
        <div className="about center">
            {name && (
                <h1>
                    Hello, I'm <span className="about--name">{name}.</span>
                </h1>
            )}
            {role && <h2 className="about--role">{role}</h2>}

            <ReactMarkdown className='about--desc'
                remarkPlugins={[remarkGfm]}
            >
                {aboutContent}
            </ReactMarkdown>

            <div className="about--contact center">
                {cv && (
                    <a className="btn btn--outline" download href={cv}>
                        <Icon icon="PDF" className="icon--small" />
                        Get my PDF-CV !
                    </a>
                )}

                {email && (
                    <a className="btn btn--outline" href="mailto:&#109;&#97;&#105;&#108;&#64;&#108;&#111;&#107;&#97;&#108;&#110;&#101;&#116;&#122;&#46;&#99;&#111;&#109;">
                        <Icon icon="Envelop" className="icon--small" />
                        &#69;&#109;&#97;&#105;&#108;
                    </a>
                )}

                {social && (
                    <>
                        {social.github && (
                            <a
                                href={social.github}
                                aria-label="github"
                                className="link link--icon"
                            >
                                <Icon icon="Github" />
                            </a>
                        )}

                        {social.linkedin && (
                            <a
                                href={social.linkedin}
                                aria-label="linkedin"
                                className="link link--icon"
                            >
                                <Icon icon="Linkedin" />
                            </a>
                        )}

                        {social.soundcloud && (
                            <a
                                href={social.soundcloud}
                                aria-label="soundcloud"
                                className="link link--icon"
                            >
                                <Icon icon="Soundcloud" />
                            </a>
                        )}

                        {social.spotify && (
                            <a
                                href={social.spotify}
                                aria-label="spotify"
                                className="link link--icon"
                            >
                                <Icon icon="Spotify" />
                            </a>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}
