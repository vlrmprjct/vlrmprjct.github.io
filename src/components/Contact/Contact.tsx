import React from 'react';
import { contact } from '../../portfolio';

import './Contact.scss';

export const Contact = () => {

    if (!contact.email) return null

    return (
        <section className='section contact center' id='contact'>
            <h2 className='section__title'>Contact</h2>
            <a href={`mailto:${contact.email}`}>
                <span className='btn btn--outline'>
                    Email me
                </span>
            </a>
        </section>
    )
}