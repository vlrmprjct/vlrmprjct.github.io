import React, { useState, useEffect } from 'react';
import { pinnedRepos } from '@/queries';
import { fetchData } from '@/utils';
import { ProjectContainer } from '@/components';

import './Projects.scss';

export const Projects = () => {

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetchData(pinnedRepos, ({ data }) => setRepos(data.user.pinnedItems.nodes));
    }, []);

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
