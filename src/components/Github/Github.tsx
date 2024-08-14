import React, { cloneElement} from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Tooltip } from "react-tooltip";

import * as color from '@/scss/theme.scss';
import './Github.scss'

export const Github = ({ theme }) => {

    const { accent } = color;

    return (
        <section className="section github">

            <h2 className="section--title">
                Activity
            </h2>

            <GitHubCalendar
                blockRadius={1}
                blockSize={10}
                colorScheme={theme}
                hideColorLegend={true}
                username="vlrmprjct"
                theme={{
                    light: ['hsl(0, 0%, 92%)', accent],
                    dark: ['hsl(0, 0%, 2%)', accent],
                }}
                weekStart={1}
                renderBlock={(block, activity) =>
                    cloneElement(block, {
                        'data-tooltip-id': 'gh-tooltip',
                        'data-tooltip-html': `${activity.count} activities on ${activity.date}`,
                    })
                }
            />
            <Tooltip id="gh-tooltip" />
        </section>
    )
};
