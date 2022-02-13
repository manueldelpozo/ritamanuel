import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import addDays from 'date-fns/addDays'
import format from 'date-fns/format'
import { enGB, es, pl, fr } from 'date-fns/locale'
import ParallaxWrapper from '../components/ParallaxWrapper';
import ExternalLink from '../components/ExternalLink';
import hotelDetails from '../consts/hotelDetails';
import hotel from '../assets/hotel.png';
import createLinkCalendar from '../helpers/createLinkCalendar';
import { vh2px } from '../helpers/parsers';

const TextHeader = styled.h2`
    text-align: center;
    // font-size: min(30px,10vw);
`;

const Hotel = styled.img`
    width: min(400px, 70vw);
    height: auto;
`;

const Star = styled.div`
    animation: round 4s infinite;
`;

const NightsText = styled.h2`
    display: flex;
    flex-direction: column;
`;

const getPlural = (lang) => lang === 'pl' ? 'e' : 's';
const langMap = {
    en: enGB,
    es,
    es_pl: es,
    pl,
    pl_pl: pl,
    fr,
};
const formatDateI18n = (date, lang, formatStr = 'EEEE d') => {
    if (!date) return '';
    return format(date, formatStr, {
        locale: langMap[lang],
    })
};

const PageHotel = ({ scroll, lang, nights }) => {
    const { t } = useTranslation();

    const dateCheckIn = React.useMemo(() => {
        return nights === 2 ? new Date(hotelDetails.checkIn) : addDays(new Date(hotelDetails.checkIn), 1);
    },  [nights, lang]);
    const dateCheckMid = React.useMemo(() => {
        return nights === 2 ? addDays(new Date(hotelDetails.checkIn), 1) : null;
    },  [nights, lang]);
    const formattedDatesStay = React.useMemo(() => {
        return `${formatDateI18n(dateCheckIn, lang)}, ${formatDateI18n(dateCheckMid, lang)}`;
    },  [nights, lang, dateCheckIn]);
    console.log(formattedDatesStay)


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
                    ['translateY', vh2px(-5), vh2px(0)],
                ]}>
                <TextHeader>
                    <span>{t('hotel_intro')}</span>
                    <ExternalLink href={`http://maps.google.com/?q=${hotelDetails.name} ${hotelDetails.address}`}>
                        {hotelDetails.name}
                    </ExternalLink>
                </TextHeader>
            </ParallaxWrapper>
            <div style={{ display: 'flex' }}>
                {Array.from(Array(hotelDetails.stars).keys()).map(star => (
                    <Star key={`star${star}`}>
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
                    </Star>
                ))}
            </div>
            <Hotel src={hotel} />
            <ParallaxWrapper
                start={scroll.top + vh2px(70)}
                end={scroll.bottom}
                animations={[
                    ['translateY', vh2px(10), vh2px(0)],
                ]}
            >
                <NightsText>
                    <ExternalLink
                        href={createLinkCalendar({
                            text: t('wedding'),
                            dates: [
                                dateCheckIn,
                                hotelDetails.checkOut,
                            ],
                            details: hotelDetails.name,
                            location: hotelDetails.address,
                        })}
                    >
                        {`${nights} ${t('night')}${nights > 1 ? getPlural(lang) : ''}`}
                        <span style={{ fontSize: 16, marginLeft: 14 }}>{`(${formattedDatesStay})`}</span>
                    </ExternalLink>
                    <span>{`+ ${t('breakfast')}`}</span>
                </NightsText>
            </ParallaxWrapper>
        </div>
    );
};

export default PageHotel;