import React from 'react';
import { pinnedRepos as repos } from '@/data';
import { ProjectContainer } from '@/components';

import './Projects.scss';

export const Projects = () => {

    return (
        <section id="projects" className="section projects">
            <h2 className="section--title">
                Projects
            </h2>
            <div className="projects--grid">
                {repos.map((project) => {
                    return (
                        <ProjectContainer
                            key={project.name}
                            project={project}
                        />
                )})}
            </div>
        </section>
    )
};
