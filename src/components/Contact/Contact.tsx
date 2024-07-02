import React from 'react';
import { contact } from '@/portfolio';

import './Contact.scss';

export const Contact = () => {

    if (!contact.email) return null

    return (
        <section className="section contact center" id="contact">
            <h2 className="section--title">Contact</h2>
            <a className="btn btn--outline" href={`mailto:${contact.email}`}>
                Email me
            </a>
        </section>
    )
}
