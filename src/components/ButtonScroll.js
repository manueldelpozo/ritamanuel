import React from 'react';
import styled from 'styled-components';
import hand from '../assets/hand.png';
import arrowDown from '../assets/arrow-down.svg';

const Button = styled.button`
    position: relative;
    border: 0;
    padding: 0;
    background: none;
    cursor: pointer;
`;

const AnimatedHand = styled.div`
    position: absolute;
    left: -60px;
    background-image: url(${hand});
    background-size: contain;
    background-repeat: no-repeat;
    width: 80px;
    height: 60px;
    animation: bounceAndRotate 2s infinite ease-in-out alternate;
`;

const ButtonScroll = ({ scrollTop }) => {
    const scrollDownNext = () => {
        const { clientHeight } = document.documentElement;
        window.scroll({
            top: scrollTop + clientHeight,
            behavior: 'smooth'
        });
    };

    return (
        <Button onClick={scrollDownNext}>
            <AnimatedHand />
            <img src={arrowDown} alt="hand" height={80} width="auto" />
        </Button>
    );
}

export default ButtonScroll;