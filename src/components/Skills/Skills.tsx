import React from 'react';
import { skills } from '../../portfolio';

import './Skills.scss'

export const Skills = () => {

    if (!skills.length) return null

    return (
        <section className="section skills" id='skills'>
            <h2 className="section--title">Skills</h2>
            <ul className="skills--list">
                {skills.map((skill, i) => {
                    return (
                        <li key={skill} className="btn btn--outline">
                            {skill}
                        </li>
                    )
                })}
            </ul>
        </section>
    )
};
