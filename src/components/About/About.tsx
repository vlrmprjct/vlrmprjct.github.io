import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { about } from '@/portfolio';

import './About.scss'

export const About = () => {
    const { name, role, description, resume, social } = about

    return (
        <div className="about center">
            {name && (
                <h1>
                    Hello, I am <span className="about--name">{name}.</span>
                </h1>
            )}

            {role && <h2 className="about--role">{role}</h2>}
            <p className='about--desc'>{description && description}</p>

            <div className="about--contact center">
                {resume && (
                    <a className="btn btn--outline" href={resume}>
                        Resume
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
                    </>
                )}
            </div>
        </div>
    )
}
