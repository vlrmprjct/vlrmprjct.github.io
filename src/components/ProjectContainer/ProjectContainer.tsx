import React from 'react';
import { Icon } from '@/components';

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
                    <Icon icon="Github" className="icon--small" />
                </a>
            )}

            {project.homepageUrl && (
                <a
                    href={project.homepageUrl}
                    aria-label="live preview"
                    className="link link--icon"
                >
                    <Icon icon="Notebook" className="icon--small" />
                </a>
            )}
        </p>
    </div>
);
