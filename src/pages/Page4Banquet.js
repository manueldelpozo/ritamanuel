import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ParallaxWrapper from '../components/ParallaxWrapper';
import ExternalLink from '../components/ExternalLink';
import createLinkCalendar from '../helpers/createLinkCalendar';
import { vh2px } from '../helpers/parsers';
import table from '../assets/table.png';
import divider from '../assets/divider.svg';
import banquetDetails from '../consts/banquetDetails';

const TextHeader = styled.h1`
    height: 10vh;
    padding: 5% 10% 0;
    width: 100vw;
    margin: 0;
    position: relative;
    z-index: -1;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 1.9em;
    }
`;

const TextDetails = styled.div`
    height: 50vh;
    padding: 0 10% 5%;
    width: 100vw;
    margin: 0;
    position: relative;
    z-index: 1;
    font-size: 1.3em;
    font-weight: 700;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 1.2em;
    }
`;

const Table = styled.img`
    width: auto;
    height: 40vh;
    @media (max-width: 768px) {
        width: 100vw;
        height: auto;
    }
`;
 
const PageBanquet = ({ scroll }) => {
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
                start={scroll.top - vh2px(10)} 
                end={scroll.bottom - vh2px(20)}
                animations={[
                    ['opacity', 0, 1],
                    ['translateY', -vh2px(5), vh2px(5)],
                ]}>
                <TextHeader>
                    {t('banquet')} <br /><span style={{ color: '#ac7d3d' }}>{banquetDetails.name}</span>
                </TextHeader>
            </ParallaxWrapper>
            <ParallaxWrapper
                start={scroll.top + vh2px(30)} 
                end={scroll.bottom}
                animations={[
                    ['translateY', vh2px(35), vh2px(20)],
                    ['opacity', 0, 1],
                ]}>
                <TextDetails>
                    <p>
                        <ExternalLink
                            href={createLinkCalendar({
                                text: t('banquet_calendar'),
                                dates: [
                                    `${banquetDetails.startDate} ${banquetDetails.startTime.split(' ')[0]}`,
                                    `${banquetDetails.startDate} ${banquetDetails.endTime.split(' ')[0]}`,
                                ],
                                details: banquetDetails.name,
                                location: banquetDetails.address,
                            })}
                            isBlack
                        >
                            {t('church_time')}{banquetDetails.startTime}
                        </ExternalLink>
                    </p>
                    <ExternalLink
                        href={`http://maps.google.com/?q=${banquetDetails.name} ${banquetDetails.address}`}
                    >
                        {banquetDetails.address}
                    </ExternalLink>
                    <img src={divider} alt="divider" width="auto" height="100px" />
                </TextDetails>
            </ParallaxWrapper>
            <ParallaxWrapper
                start="self"
                end={scroll.bottom}
                animations={[
                    ['scale', 0.8, 1],
                ]}>
                <Table src={table} />
            </ParallaxWrapper>
        </div>
    );
};

export default PageBanquet;