import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ParallaxWrapper from '../components/ParallaxWrapper';
import ExternalLink from '../components/ExternalLink';
import transportInfo from '../consts/transportInfo';
import plane from '../assets/plane.png';
import { vh2px, vw2px } from '../helpers/parsers';

const TextHeader = styled.h1`
    text-align: end;
    font-size: 2em;
`;

const Plane = styled.img`
    width: min(400px, 80vw);
    height: auto;
    -webkit-filter: drop-shadow(7px 7px 4px #222);
    filter: drop-shadow(7px 7px 4px #222);
    animation: fly 3s infinite ease-in-out alternate
`;

const PageTransport = ({ scroll }) => {
    const { t } = useTranslation();

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            flexDirection: 'column',
            padding: '10%',
            marginBottom: 30,
        }}>
            <ParallaxWrapper
                start="self"
                end={scroll.bottom - vh2px(20)}
                animations={[
                    ['opacity', 0, 1],
                    ['translateX', vw2px(-20), vw2px(0)],
                ]}>
                <TextHeader>
                    {t('transport_info')}
                </TextHeader>
            </ParallaxWrapper>
            <Plane src={plane} />
            {transportInfo?.map((interest, i) => (
                <div key={interest.label} style={{ fontSize: 20 }}>
                    <ParallaxWrapper
                        start="self"
                        end={scroll.bottom}
                        animations={[
                            ['translateX', vw2px(-10 * i), vw2px(0)],
                        ]}
                    >
                        <ExternalLink href={interest.link}>{t(interest.label)}</ExternalLink>
                    </ParallaxWrapper>
                </div>
            ))}
        </div>
    );
};

export default PageTransport;