import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ParallaxWrapper from '../components/ParallaxWrapper';
import { vh2px, vw2px } from '../helpers/parsers';
import dame from '../assets/dame.png';
import gentleman from '../assets/gentleman.png';
import angelDivider from '../assets/angel-divider.png';
import angelWing from '../assets/angel-wind.png';
import angel from '../assets/angel.png';

const TextHeader = styled.h2`
    height: 10vh;
    padding: 5% 10% 0;
    width: 100vw;
    margin: 0;
    position: relative;
    z-index: -1;
    text-align: center;
    // font-size: min(30px,10vw);
`;

const Figure = styled.img`
    width: auto;
    height: 40vh;
`;

const AngelWing = styled.img`
    position: relative;
    right: -55px;
    width: 25px;
    height: 25px;
    transform-origin: 100% 100%;
    animation: fly 1s infinite ease-in-out alternate;
`;
 
const PageInvitation = ({ scroll }) => {
    const { t } = useTranslation();

    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            overflowX: 'clip',
        }}>
            <ParallaxWrapper
                start={scroll.top - vh2px(10)} 
                end={scroll.bottom - vh2px(20)}
                animations={[
                    ['translateY', -vh2px(3), vh2px(2)],
                ]}>
                <TextHeader>
                    {t('intro')}
                </TextHeader>
            </ParallaxWrapper>
            <img src={angelDivider} alt="divider" width="auto" height="150px" style={{ filter: 'brightness(0.6)' }} />
            <div style={{ display: 'flex', width: '100vw', fontSize: '2em' }}>
                <ParallaxWrapper
                    start="self"
                    end={scroll.bottom}
                    animations={[
                        ['translateX', vw2px(-20), vw2px(0)],
                    ]}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '50vw' }}>
                        <span style={{ display: 'inline-flex' }}>
                            <AngelWing src={angelWing} />
                            <img src={angel} alt="angel" width="100px" height="auto" />
                            <span>Rita</span>
                        </span>
                        <Figure src={dame} />
                    </div>
                </ParallaxWrapper>
                <ParallaxWrapper
                    start="self"
                    end={scroll.bottom}
                    animations={[
                        ['translateX', vw2px(20), vw2px(0)],
                    ]}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '50vw' }}>
                        <span style={{ height: 55 }}>Manuel</span>
                        <Figure src={gentleman} />
                    </div>
                </ParallaxWrapper>
            </div>
            {/*<ParallaxWrapper*/}
            {/*    start={scroll.bottom - 100}*/}
            {/*    end={scroll.bottom}*/}
            {/*    animations={[*/}
            {/*        ['translateX', vw2px(20), vw2px(0)],*/}
            {/*    ]}>*/}
            {/*    <Angel src={angel} />*/}
            {/*</ParallaxWrapper>*/}
        </div>
    );
};

export default PageInvitation;