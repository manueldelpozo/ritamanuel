import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ParallaxWrapper from '../components/ParallaxWrapper';
import { vh2px, vw2px } from '../helpers/parsers';
import banquetDetails from '../consts/banquetDetails';
import table from '../assets/table.png';
import palm from '../assets/palm.png';

const TextHeader = styled.h1`
    height: 20vh;
    padding: 10%;
    width: 100vw;
    margin: 0;
    position: relative;
    z-index: -1;
    text-align: start;
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
 
const PageBanquet = ({ scroll }) => {
    const { t } = useTranslation();

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '10%',
        }}>
            <ParallaxWrapper
                start={scroll.top} 
                end={scroll.bottom}
                animations={[
                    ['translateY', -vh2px(20), 0],
                    ['opacity', 0, 1],
                ]}>
                <TextHeader>
                    {t('banquet')} <span style={{ color: '#ac7d3d' }}>{banquetDetails.name}</span>
                </TextHeader>
            </ParallaxWrapper>
            <ParallaxWrapper
                start={scroll.top + 200} 
                end={scroll.bottom}
                animations={[
                    ['translateY', vh2px(10), -vh2px(33)],
                    ['opacity', 0, 1],
                ]}>
                <TextDetails>
                    <p>{t('church_time')}{banquetDetails.startTime}</p>
                    <a
                        href={`http://maps.google.com/?q=${banquetDetails.name} ${banquetDetails.address}`}
                        target="_blank"
                        without rel="noreferrer"
                        style={{ 
                            cursor: 'pointer',
                            width: 150,
                            display: 'block',
                            textDecoration: 'overline',
                            color: '#ac7d3d',
                        }}
                    >
                        {banquetDetails.address}
                    </a>
                </TextDetails>
            </ParallaxWrapper>
        </div>
    );
};

export default PageBanquet;