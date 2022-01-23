import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ParallaxWrapper from '../components/ParallaxWrapper';
import { vh2px, vw2px } from '../helpers/parsers';
import mapEurope from '../assets/mapEurope.jpg';
import plane from '../assets/plane.png';

const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-color');

const TextHeader = styled.h1`
    height: 70vh;
    background-image: linear-gradient(180deg, ${bgColor}, transparent);
    padding: 10%;
    width: 100vw;
    margin: -10vh 0;
    position: relative;
    z-index: -1;
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
    @media (max-width: 768px) {
        background-position: -90px center;
    }
    &:before {
        content: "";
        position: absolute;
        top: -2px;
        left: 0;
        width: 100vw;
        height: 35vh;
        background-image: linear-gradient(180deg, ${bgColor}, transparent);
    }
`;

const Plane = styled.img`
    width: 150px;
    height: auto;
    position: absolute;
    right: -200px;
    z-index: 10;
    -webkit-filter: drop-shadow(7px 7px 4px #222);
    filter: drop-shadow(7px 7px 4px #222);
`;
 
const PageJourney = ({ scroll }) => {
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
                    ['translateY', 0, vh2px(10)],
                    ['opacity', 0, 1],
                ]}>
                <TextHeader>{t('journey')}</TextHeader>
            </ParallaxWrapper>
            <ParallaxWrapper
                start={scroll.top + 200} 
                end={scroll.bottom}
                animations={[
                    ['translateX', vw2px(3), -vw2px(90)],
                    ['translateY', -vh2px(20), vh2px(55)],
                    ['scale', 1.3, 0.8],
                    ['rotate', 0, 15],
                ]}>
                <Plane src={plane} />
            </ParallaxWrapper>
            <MapEurope className="page-journey__map" />
        </div>
    );
};

export default PageJourney;