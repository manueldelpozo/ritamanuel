import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ParallaxWrapper from '../components/ParallaxWrapper';
import ExternalLink from '../components/ExternalLink';
import createLinkCalendar from '../helpers/createLinkCalendar';
import { vh2px, vw2px } from '../helpers/parsers';
import churchDetails from '../consts/churchDetails';
import iglesia from '../assets/iglesia.png';
import palm from '../assets/palm.png';

const TextHeader = styled.h1`
    height: 20vh;
    padding: 10%;
    width: 100vw;
    margin: 0;
    position: relative;
    z-index: -1;
    text-align: start;
    @media (max-width: 768px) {
        font-size: 1.9em;
    }
`;

const TextDetails = styled.div`
    padding: 0 10%;
    width: 100vw;
    margin: 0;
    position: relative;
    z-index: 1;
    text-align: start;
    font-size: 1.3em;
    font-weight: 700;
    @media (max-width: 768px) {
        font-size: 1.2em;
    }
`;

const Church = styled.div`
    width: 455px;
    height: 70vh;
    background-image: url(${iglesia});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -3;
    @media (max-width: 768px) {
        width: 70vw;
    }
`;

const Palm = styled.img`
    width: auto;
    height: 50vh;
    position: absolute;
    bottom: -15px;
    left: -35vw;
    z-index: -1;
    @media (max-width: 768px) {
        left: -90vw;
    }
`;

const PageChurch = ({ scroll }) => {
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
            borderBottom: '1px solid #ccc',
        }}>
            <ParallaxWrapper
                start={scroll.top - 50} 
                end={scroll.bottom}
                animations={[
                    ['translateY', -vh2px(20), -vh2px(2)],
                ]}>
                <TextHeader>
                    {t('church')} <br /><span style={{ color: '#ac7d3d' }}>{churchDetails.name}</span>
                </TextHeader>
            </ParallaxWrapper>
            <ParallaxWrapper
                start={scroll.top + 200} 
                end={scroll.bottom}
                animations={[
                    ['translateY', vh2px(10), -vh2px(27)],
                ]}>
                <TextDetails>
                    <p>
                        <ExternalLink
                            href={createLinkCalendar({
                                text: t('wedding'),
                                dates: [
                                    `${churchDetails.startDate} ${churchDetails.startTime.split(' ')[0]}`,
                                    `${churchDetails.startDate} ${churchDetails.endTime.split(' ')[0]}`,
                                ],
                                details: churchDetails.name,
                                location: churchDetails.address,
                            })}
                            isBlack
                        >
                            {t('church_time')}{churchDetails.startTime}
                        </ExternalLink>
                    </p>
                    <ExternalLink href={`http://maps.google.com/?q=Iglesia ${churchDetails.name} ${churchDetails.address}`} width={150}>
                        {churchDetails.address}
                    </ExternalLink>
                </TextDetails>
            </ParallaxWrapper>
            <ParallaxWrapper
                start={scroll.top + 200} 
                end={scroll.bottom}
                animations={[
                    ['translateX', vw2px(50), -vw2px(22)],
                ]}>
                <Palm src={palm} />
            </ParallaxWrapper>
            <ParallaxWrapper
                start={scroll.top} 
                end={scroll.bottom}
                animations={[
                    ['translateX', vw2px(30), 0],
                ]}>
                <Church />
            </ParallaxWrapper>
        </div>
    );
};

export default PageChurch;