import React, { useEffect, useState } from 'react';
import { fetchData } from '@/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faSoundcloud, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf, faEnvelope } from '@fortawesome/free-regular-svg-icons';
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
                        <FontAwesomeIcon icon={faFilePdf} />
                        Get my PDF-CV !
                    </a>
                )}

                {email && (
                    <a className="btn btn--outline" href="mailto:&#109;&#97;&#105;&#108;&#64;&#108;&#111;&#107;&#97;&#108;&#110;&#101;&#116;&#122;&#46;&#99;&#111;&#109;">
                        <FontAwesomeIcon icon={faEnvelope} />
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
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                        )}

                        {social.linkedin && (
                            <a
                                href={social.linkedin}
                                aria-label="linkedin"
                                className="link link--icon"
                            >
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                        )}

                        {social.soundcloud && (
                            <a
                                href={social.soundcloud}
                                aria-label="soundcloud"
                                className="link link--icon"
                            >
                                <FontAwesomeIcon icon={faSoundcloud} size="2x" />
                            </a>
                        )}

                        {social.spotify && (
                            <a
                                href={social.spotify}
                                aria-label="spotify"
                                className="link link--icon"
                            >
                                <FontAwesomeIcon icon={faSpotify} size="2x" />
                            </a>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}
