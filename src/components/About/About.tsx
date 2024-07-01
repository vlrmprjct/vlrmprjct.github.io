import React from 'react';
// import GitHubIcon from '@material-ui/icons/GitHub'
// import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio';

import './About.scss'

export const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                G{/* <GitHubIcon /> */}
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                LI{/* <LinkedInIcon /> */}
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}
