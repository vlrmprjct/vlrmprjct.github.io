import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

import './ProjectContainer.scss'

export const ProjectContainer = ({ project }) => (

    <div className="project">
        <h3>{project.name.replace(/[,\-._]/g, ' ')}</h3>

        <p className="project--description">
            {project.description}
        </p>

        {project.languages && (
            <ul className="project--stack">
                {project.languages.edges.map(edge => edge.node.name).map((item) => (
                    <li key={item} className="project--stack-item">
                        <small>{item}</small>
                    </li>
                ))}
            </ul>
        )}

        <p className="project--lang">
            {project.url && (
                <a
                    href={project.url}
                    aria-label="source code"
                    className="link link--icon"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            )}

            {project.homepageUrl && (
                <a
                    href={project.homepageUrl}
                    aria-label="live preview"
                    className="link link--icon"
                >
                    <FontAwesomeIcon icon={faLaptop} />
                </a>
            )}
        </p>
    </div>
);
