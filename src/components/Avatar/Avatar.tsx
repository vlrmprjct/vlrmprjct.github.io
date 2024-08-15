import React from 'react';

import './Avatar.scss';

export const Avatar = ({
    alt,
    username,
}) => {
    const avatarUrl = `https://github.com/${username}.png`;

    return !username ? null : (
        <img
            alt={alt}
            className="avatar"
            src={avatarUrl}
            width="200"
        />
    );
};
