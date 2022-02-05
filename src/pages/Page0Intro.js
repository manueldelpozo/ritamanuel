import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import rm from '../assets/rm.svg';

const TextDetails = styled.div`
    height: 50vh;
    padding: 0 10% 5%;
    width: 100vw;
    margin: 0;
    position: relative;
    z-index: 1;
    text-align: center;
`;

const Guest = styled.h1`
    font-size: 2.6em;
    margin-bottom: 0;
`;

const Page0Intro = ({ guest, lang }) => {
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
            <img src={rm} alt="divider" width="auto" height="200px" />
            {!lang.startsWith('pl') ? (
                <TextDetails>
                    <h2>{t('dear')}</h2>
                    {guest && <Guest>{guest}</Guest>}
                </TextDetails>
            ) : (
                <TextDetails>
                    {guest && <Guest>{guest}</Guest>}
                    <h2>{t('dear')}</h2>
                </TextDetails>
            )}
        </div>
    );
};

export default Page0Intro;