import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ParallaxWrapper from '../components/ParallaxWrapper';
import { vh2px, vw2px } from '../helpers/parsers';
import banquetDetails from '../consts/banquetDetails';
import table from '../assets/table.png';
import divider from '../assets/divider.png';

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
        }}>
            <ParallaxWrapper
                start={scroll.top + 50} 
                end={scroll.bottom}
                animations={[
                    ['translateY', -vh2px(10), vh2px(5)],
                    ['opacity', 0, 1],
                ]}>
                <TextHeader>
                    {t('banquet')} <br /><span style={{ color: '#ac7d3d' }}>{banquetDetails.name}</span>
                </TextHeader>
            </ParallaxWrapper>
            <ParallaxWrapper
                start={scroll.top + 200} 
                end={scroll.bottom}
                animations={[
                    ['translateY', vh2px(35), vh2px(25)],
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
                            // width: 150,
                            display: 'block',
                            textDecoration: 'overline',
                            color: '#ac7d3d',
                        }}
                    >
                        {banquetDetails.address}
                    </a>
                    <img src={divider} alt="divider" width="auto" height="100px" />
                </TextDetails>
                
            </ParallaxWrapper>
            <ParallaxWrapper
                start={scroll.top + 200} 
                end={scroll.bottom}
                animations={[
                    ['translateX', vw2px(-10), vw2px(0)],
                ]}>
                <Table src={table} />
            </ParallaxWrapper>
        </div>
    );
};

export default PageBanquet;