import React from 'react';
import styled from 'styled-components';
import hand from '../assets/hand.png';

const AnimatedHand = styled.div`
    position: absolute;
    background-image: url(${hand});
    background-size: contain;
    background-repeat: no-repeat;
    width: 30px;
    height: 60px;
    animation: point 1.5s infinite ease-out;
`;

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
            color: isBlack ? 'black' : '#ac7d3d',
            position: 'relative',
        }}
        without="true"
    >
        {children}
    </a>
);

export default ExternalLink;
