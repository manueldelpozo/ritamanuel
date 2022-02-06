import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import subMinutes from 'date-fns/subMinutes'
import format from 'date-fns/format'
import ParallaxWrapper from '../components/ParallaxWrapper';
import ExternalLink from '../components/ExternalLink';
import createLinkCalendar from '../helpers/createLinkCalendar';
import { vh2px, vw2px } from '../helpers/parsers';
import bus from '../assets/bus.png';
import wheel from '../assets/wheel.png';
import divider from '../assets/divider.svg';
import divider2 from '../assets/divider2.png';
import hotelDetails from '../consts/hotelDetails';
import banquetDetails from '../consts/banquetDetails';

const TextHeader = styled.h1`
    //height: 12vh;
    padding: 10px 10%;
    width: 100vw;
    margin-top: 0;
    margin-bottom: 15px;
    // position: relative;
    // z-index: -1;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 2em;
    }
    @media (max-width: 450px) {
        padding: 25px 25px 0;
        margin-bottom: 0;
        font-size: 1.7em;
    }
`;

const TextDetails = styled.div`
    padding: 0 10%;
    width: 100vw;
    font-size: 1.3em;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 1.2em;
    }
`;

const Bus = styled.img`
    width: auto;
    height: 230px;
    margin-top: 30px;
`;

const Wheel = styled.img`
    transform-origin: 50% 50%;
    width: auto;
    height: 100px;
    animation: round 2s infinite linear;
`;

const Journey = ({ from, to, departure }) => (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 15, fontSize: 'max(14px, 1.5vw)', marginBottom: 16 }}>
        <ExternalLink
            href={createLinkCalendar({
                text: `Bus ${from.name} - ${to.name}`,
                dates: [
                    subMinutes(new Date(`${banquetDetails.startDate} ${departure.split(' ')[0]}`), 30),
                    `${banquetDetails.startDate} ${departure.split(' ')[0]}`,
                ],
                details: `Bus ${from.name} - ${to.name}`,
                location: from.address,
            })}
            isBlack
        >
            <span style={{ fontSize: 12 }}>
                {format(subMinutes(new Date(`${banquetDetails.startDate} ${departure.split(' ')[0]}`), 30), 'hh:mm a')}
            </span>
        </ExternalLink>
        <ExternalLink href={`http://maps.google.com/?q=${from.name} ${from.address}`}>
            {from.name}
        </ExternalLink>
        <img src={divider2} alt="divider2" width="auto" height="15" />
        <ExternalLink href={`http://maps.google.com/?q=${to.name} ${to.address}`}>
            {to.name}
        </ExternalLink>
    </div>
);

const PageParty = ({ scroll }) => {
    const { t } = useTranslation();

    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap',
            overflowX: 'clip',
            borderBottom: '1px solid #ccc',
        }}>
            <ParallaxWrapper
                start={scroll.top - vh2px(10)}
                end={scroll.bottom - vh2px(20)}
                animations={[
                    ['opacity', 0, 1],
                    ['translateY', -vh2px(3), vh2px(0)],
                ]}>
                <TextHeader>
                    {t('transport_banquet')}
                </TextHeader>
            </ParallaxWrapper>
            <ParallaxWrapper
                start="self"
                end={scroll.bottom}
                animations={[
                    ['translateX', vw2px(-20), vw2px(10)],
                ]}>
                <Bus src={bus} />
                <div style={{
                    position: 'relative',
                    top: '-108px',
                    left: '54px',
                    display: 'flex',
                    gap: '156px'
                }}>
                    <Wheel src={wheel} />
                    <Wheel src={wheel} />
                </div>
            </ParallaxWrapper>
            <ParallaxWrapper
                start="self"
                end={scroll.bottom}
                animations={[
                    ['translateY', vh2px(20), vh2px(-15)],
                ]}>
                <TextDetails>
                    <p style={{ marginBottom: 0 }}>{t('transport_journeys')}</p>
                    <img src={divider} alt="divider" width="auto" height="50" />
                    <Journey from={hotelDetails} to={banquetDetails} departure={banquetDetails.startTime} />
                    <Journey from={banquetDetails} to={hotelDetails} departure={banquetDetails.endTime} />
                    <Journey from={banquetDetails} to={hotelDetails} departure={banquetDetails.endTime2} />
                </TextDetails>
            </ParallaxWrapper>
        </div>
    );
};

export default PageParty;