import React from 'react';
import styled from 'styled-components';
import { COLOR_SECONDARY } from '../consts/colors';
import hand from '../assets/hand.png';
import buttonFrame from '../assets/buttonFrame.svg';

const ButtonContent = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    padding: 2em;
    width: 210px;
    height: 140px;
    background: none;
    font-size: 1.3em;
    line-height: 1.1em;
    font-weight: bold;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${buttonFrame});
        background-size: cover;
        background-repeat: no-repeat;
    }

    &:hover {
        color: ${COLOR_SECONDARY};
        cursor: pointer;
    }
`;

const AnimatedHand = styled.div`
    position: absolute;
    left: -60px;
    background-image: url(${hand});
    background-size: contain;
    background-repeat: no-repeat;
    width: 60px;
    height: 60px;
    animation: point 1.5s infinite ease-out;
`;

const ButtonFrame = ({ onClick, download, href, children }) => {
    if (onClick) {
        return (
            <button onClick={onClick} style={{ border: 'none', background: 'none', margin: 0, padding: 0 }}>
                <ButtonContent>             
                    <AnimatedHand />
                    {children}
                </ButtonContent>
            </button>
        );
    }

    if (href) {
        return (
            <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ButtonContent>
                    <AnimatedHand />
                    {children}
                </ButtonContent>
            </a>
        );
    }
    
    if (download) {
        return (
            <a href={download} download style={{ textDecoration: 'none', color: 'inherit' }}>
                <ButtonContent>
                    <AnimatedHand />
                    {children}
                </ButtonContent>
            </a>
        );
    }
};

export default ButtonFrame;