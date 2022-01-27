import React from 'react';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../consts/colors';

const ExternalLink = ({ children, href, width, isBlack }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{ 
            width: width ?? 'auto',
            cursor: 'pointer',
            display: 'block',
            textDecoration: 'overline',
            color: isBlack ? COLOR_PRIMARY : COLOR_SECONDARY,
            position: 'relative',
        }}
        without="true"
    >
        {children}
    </a>
);

export default ExternalLink;
