import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import addDays from 'date-fns/addDays'
import ParallaxWrapper from '../components/ParallaxWrapper';
import ExternalLink from '../components/ExternalLink';
import hotelDetails from '../consts/hotelDetails';
import hotel from '../assets/hotel.png';
import createLinkCalendar from '../helpers/createLinkCalendar';
import { vh2px } from '../helpers/parsers';

const TextHeader = styled.h1`
    text-align: center;
    font-size: 2em;
`;

const Hotel = styled.img`
    width: min(400px, 70vw);
    height: auto;
`;

const getPlural = (lang) => lang === 'pl' ? 'e' : 's';

const PageHotel = ({ scroll, lang, nights }) => {
    const { t } = useTranslation();

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '10%',
            borderBottom: '1px solid #ccc',
        }}>
            <ParallaxWrapper
                start="self"
                end={scroll.bottom - vh2px(20)}
                animations={[
                    ['opacity', 0, 1],
                    ['translateY', vh2px(-5), vh2px(0)],
                ]}>
                <TextHeader>
                    <span style={{ fontSize: '0.7em' }}>{t('hotel_intro')}</span>
                    <ExternalLink href={`http://maps.google.com/?q=${hotelDetails.name} ${hotelDetails.address}`}>
                        {hotelDetails.name}
                    </ExternalLink>
                </TextHeader>
            </ParallaxWrapper>
            <div style={{ display: 'flex' }}>
                {Array.from(Array(hotelDetails.stars).keys()).map(star => (
                    <div key={`star${star}`}>
                        <ParallaxWrapper
                            start={scroll.top + 100 * star}
                            end={scroll.bottom}
                            animations={[
                                ['rotate', -360, 0],
                                ['scale', 0, 1],
                            ]}
                        >
                            &#9733;
                        </ParallaxWrapper>
                    </div>
                ))}
            </div>
            <Hotel src={hotel} />
            <ParallaxWrapper
                start={scroll.top + vh2px(70)}
                end={scroll.bottom}
                animations={[
                    ['opacity', 0, 1],
                    ['translateY', vh2px(10), vh2px(0)],
                ]}
            >
                <h1 style={{ display: 'flex', gap: 10 }}>
                    <ExternalLink
                        href={createLinkCalendar({
                            text: t('wedding'),
                            dates: [
                                addDays(new Date(hotelDetails.checkIn), 2 - nights),
                                hotelDetails.checkOut,
                            ],
                            details: hotelDetails.name,
                            location: hotelDetails.address,
                        })}
                    >
                        {`${nights} ${t('night')}${nights > 1 ? getPlural(lang) : ''}`}
                    </ExternalLink>
                    <span>{`+ ${t('breakfast')}`}</span>
                </h1>
            </ParallaxWrapper>
        </div>
    );
};

export default PageHotel;