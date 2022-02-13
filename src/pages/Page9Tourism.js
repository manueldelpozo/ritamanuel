import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ParallaxWrapper from '../components/ParallaxWrapper';
import ExternalLink from '../components/ExternalLink';
import tourismInfo from '../consts/tourismInfo';
import palm from '../assets/palm.png';
import boat from '../assets/boat.png';
import coast from '../assets/coast.png';
import { vh2px, vw2px } from '../helpers/parsers';

const TextHeader = styled.h2`
    text-align: end;
    padding: 10% 20%;
    align-self: flex-start;
    // font-size: min(30px,10vw);
    @media (max-width: 768px) {
        text-align: center;
        align-self: center;
        padding: 25px;
        margin-bottom: 0;
    }
    @media (max-width: 450px) {
        padding: 0 25px;
    }
`;

const Beach = styled.img`
    position: absolute;
    top: 0;
    left: 20px;
    width: min(200px, 40vw);
    height: auto;
    margin: 0 16px;
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

const Boat = styled.img`
    height: 70px;
    width: auto;
    position: absolute;
    bottom: 30px;
    right: 20px;
    animation: fly 5s infinite ease-in-out alternate
`;

const PageTourism = ({ scroll, lang }) => {
    const { t } = useTranslation();

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexDirection: 'column',
            overflowX: 'clip',
            borderBottom: '1px solid #ccc',
        }}>
            <ParallaxWrapper
                start={scroll.top - vh2px(10)}
                end={scroll.bottom - vh2px(20)}
                animations={[
                    ['translateX', vw2px(-20), vw2px(0)],
                ]}>
                <TextHeader>
                    {t('tourism_info')}
                </TextHeader>
            </ParallaxWrapper>
            <Coast>
                <Beach src={palm} />
                {tourismInfo?.map((town, i) => (
                    <div key={town.label} style={{
                        fontSize: 18,
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
                                ['translateX', vw2px(-20 * (i + 1)), vw2px(0)],
                            ]}>
                            <ExternalLink href={town.link(lang)} isBlack>{t(town.label)}</ExternalLink>
                        </ParallaxWrapper>
                    </div>
                ))}
                <Boat src={boat} />
            </Coast>
        </div>
    );
};

export default PageTourism;