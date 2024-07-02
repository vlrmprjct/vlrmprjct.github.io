import React from 'react';
import { projects } from '../../portfolio';
import { ProjectContainer } from '@/components';

import './Projects.scss';

export const Projects = () => {

    if (!projects.length) return null;

    return (
        <section id="projects" className="section projects">
            <h2 className="section--title">Projects</h2>

            <div className="projects--grid">
                {projects.map((project) => (
                    <ProjectContainer key={project.name} project={project} />
                ))}
            </div>
        </section>
    )
};
