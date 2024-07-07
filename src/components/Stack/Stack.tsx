import React from 'react';

import './Stack.scss'

export const Stack = ({ data }) => {

    if (!data.length) return null

    return (
        <section className="section stack" id='stack'>
            <h2 className="section--title">Stack</h2>
            <ul className="stack--list">
                {data.map((stack) => {
                    return (
                        <li key={stack} className="btn btn--outline">
                            {stack}
                        </li>
                    )
                })}
            </ul>
        </section>
    )
};
