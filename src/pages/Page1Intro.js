import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import divider from '../assets/divider.png';

const TextDetails = styled.div`
    height: 50vh;
    padding: 0 10% 5%;
    width: 100vw;
    margin: 0;
    position: relative;
    z-index: 1;
    text-align: center;
`;

const Page1Intro = ({ guest }) => {
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
            {guest && <h1>{guest}</h1>}  
            <TextDetails>
                <img src={divider} alt="divider" width="auto" height="100px" />
                <h1>{t('intro')}</h1>              
            </TextDetails>
        </div>
    );
};

export default Page1Intro;