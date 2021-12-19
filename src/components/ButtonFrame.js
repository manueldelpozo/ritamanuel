import React from 'react';
import styled from 'styled-components';
import hand from '../assets/hand.png';
import buttonFrame from '../assets/buttonFrame.svg';

const ButtonContent = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    border: 0;
    padding: 2em;
    width: auto;
    height: 30vh;
    background: none;
    font-size: 1.2em;
    font-weight: bold;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${buttonFrame});
        background-size: contain;
        background-repeat: no-repeat;
    }

    &:hover {
        color: turquoise;
        cursor: pointer;
    }
`;

const AnimatedHand = styled.div`
    position: absolute;
    left: -60px;
    background-image: url(${hand});
    background-size: contain;
    background-repeat: no-repeat;
    width: 80px;
    height: 60px;
    animation: point 1.5s infinite ease-out;
`;

const ButtonFrame = ({ onClick, download, children }) => {
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