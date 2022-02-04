import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import divider from '../assets/divider.png';
import ButtonFrame from '../components/ButtonFrame';

const TextDetails = styled.div`
    height: 50vh;
    padding: 0 10% 5%;
    width: 100vw;
    margin: 0;
    position: relative;
    z-index: 1;
    text-align: center;
`;

const PageWrongApp = () => {
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
            <TextDetails>
                <h1>{t('wrong_app_intro')}</h1>
                <img src={divider} alt="divider" width="auto" height="100px" />
                <div>
                    <ButtonFrame href="https://www.google.com/chrome/">
                        {t('download_chrome')}
                    </ButtonFrame>
                </div>
            </TextDetails>
        </div>
    );
};

export default PageWrongApp;