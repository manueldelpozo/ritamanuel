import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ParallaxWrapper from '../components/ParallaxWrapper';
import { vh2px, vw2px } from '../helpers/parsers';
import mapEurope from '../assets/mapEurope.jpeg';
import plane from '../assets/plane.png';
import windRose from '../assets/windRose.png';

const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-color');

const TextHeader = styled.h2`
    height: 70vh;
    // background-image: linear-gradient(${bgColor}, ${`${bgColor}00`});
    padding: 10%;
    width: 100vw;
    margin: -10vh 0;
    position: relative;
    z-index: -1;
    // font-size: min(30px,10vw);
`;

const MapEurope = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${mapEurope});
    background-position: 45% center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    z-index: -2;
    filter: brightness(0.95);
    @media (max-width: 768px) {
        background-position: -90px center;
    }
    &:before {
        content: "";
        position: absolute;
        top: -2px;
        left: 0;
        width: 100vw;
        height: 45vh;
        background-image: linear-gradient(${bgColor}, ${`${bgColor}00`});
    }
`;

const Plane = styled.img`
    width: 150px;
    height: auto;
    position: absolute;
    right: -200px;
    z-index: 10;
    -webkit-filter: drop-shadow(30px 20px 4px #00000099);;
    filter: drop-shadow(30px 20px 4px #00000099);;
`;

const WindRose = styled.img`
    transform-origin: 50% 50%;
    width: 100px;
    height: auto;
    position: absolute;
    left: -88vw;
    bottom: 55vh;
    z-index: 10;
    animation: fly 2s infinite ease-in-out alternate
`;

const Murcia = styled.span`
    color: #f9e6aa;
    font-weight: bolder;
    font-size: 2.5em;
    position: absolute;
    left: -77vw;
    bottom: 18vh;
    transform: rotate(7deg);
    z-index: 9;
    text-shadow:
        -2px -2px 0 #000,
        2px -2px 0 #000,
        -2px 2px 0 #000,
        2px 2px 0 #000;
    @media (max-width: 760px) {
        left: -66vw;
        font-size: 2.4em;
    }
    @media (max-width: 450px) {  
      left: -55vw;
      font-size: 2.3em;
    }
`;

const PageJourney = ({ scroll, isConfirmed }) => {
    const { t } = useTranslation();

    return (
        <div style={{
            position: 'relative',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            overflowX: 'clip',
            zIndex: -1,
        }}>
            <ParallaxWrapper
                start={scroll.top - 100}
                end={scroll.bottom - 100}
                animations={[
                    ['translateY', 0, vh2px(8)],
                ]}>
                <TextHeader>{isConfirmed ? t('journey_confirmed') : t('journey')}</TextHeader>
            </ParallaxWrapper>
            <ParallaxWrapper
                start={scroll.top + 200}
                end={scroll.bottom - vh2px(20)}
                animations={[
                    ['scale', 0, 1],
                ]}>
                <WindRose src={windRose} />
            </ParallaxWrapper>
            <ParallaxWrapper
                start="self"
                end={scroll.bottom}
                animations={[
                    ['translateX', vw2px(1), -vw2px(90)],
                    ['translateY', -vh2px(100), vh2px(53)],
                    ['scale', 1.5, 0.8],
                    ['rotate', 0, 15],
                ]}>
                <Plane src={plane} />
            </ParallaxWrapper>
            <ParallaxWrapper
                start="self"
                end={scroll.bottom}
                animations={[
                    ['translateY', -200, 0],
                ]}>
                <Murcia>{t('murcia')}</Murcia>
            </ParallaxWrapper>
            <MapEurope className="page-journey__map" />
        </div>
    );
};

export default PageJourney;
