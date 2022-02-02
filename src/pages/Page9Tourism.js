import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ParallaxWrapper from '../components/ParallaxWrapper';
import ExternalLink from '../components/ExternalLink';
import tourismInfo from '../consts/tourismInfo';
import beach from '../assets/beach.png';
import coast from '../assets/coast.png';
import { vh2px, vw2px } from '../helpers/parsers';

const TextHeader = styled.h1`
    text-align: end;
    font-size: 2em;
    padding: 10%;
    align-self: flex-start;
    @media (max-width: 768px) {
        align-self: center;
        // padding: 20px 10%;
    }
`;

const Beach = styled.img`
    width: min(200px, 40vw);
    height: auto;
    align-self: center;
    margin: 0 16px;
    @media (max-width: 768px) {
      align-self: flex-start;
    }
`;

const Coast = styled.div`
    min-width: 412px;
    min-height: 580px;
    background-image: url(${coast});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`;

const PageTourism = ({ scroll, lang }) => {
    const { t } = useTranslation();

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            flexDirection: 'column',
            overflowX: 'clip',
        }}>
            <ParallaxWrapper
                start={scroll.top - vh2px(10)}
                end={scroll.bottom - vh2px(20)}
                animations={[
                    ['opacity', 0, 1],
                    ['translateX', vw2px(-20), vw2px(0)],
                ]}>
                <TextHeader>
                    {t('tourism_info')}
                </TextHeader>
            </ParallaxWrapper>
            {/*<Beach src={beach} />*/}
            <Coast>
                {tourismInfo?.map((town, i) => (
                    <div key={town.label} style={{
                        fontSize: 20,
                        textAlign: 'end',
                        width: 450,
                        position: 'absolute',
                        top: town.position.top,
                        left: -town.position.left,
                    }}>
                        <ParallaxWrapper
                            start={scroll.bottom - 580}
                            end={scroll.bottom}
                            animations={[
                                ['opacity', 0, 1],
                                ['translateX', vw2px(-20 * (i + 1)), vw2px(0)],
                            ]}>
                            <ExternalLink href={town.link(lang)} isBlack>{t(town.label)}</ExternalLink>
                        </ParallaxWrapper>
                    </div>
                ))}
            </Coast>
        </div>
    );
};

export default PageTourism;