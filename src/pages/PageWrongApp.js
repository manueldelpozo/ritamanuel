import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import divider from '../assets/divider.svg';
import ButtonFrame from '../components/ButtonFrame';
import CopyContent from '../components/CopyContent';

const TextDetails = styled.div`
    height: 50vh;
    padding: 0 10% 5%;
    width: 100vw;
    margin: 0;
    position: relative;
    z-index: 1;
    text-align: center;
`;

const PageWrongApp = ({ url }) => {
    const { t } = useTranslation();

    return (console.log(url),
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <ButtonFrame href="https://www.google.com/chrome/">
                        <strong>1.</strong> {t('download_chrome')}
                    </ButtonFrame>
                    <div style={{ fontSize: '1.2em' }}>
                        <strong>2.</strong> {t('wrong_app_copy')}:
                        <strong style={{ fontFamily: 'serif' }}><CopyContent content={url} /></strong>
                    </div>
                    <div style={{ fontSize: '1.2em' }}>3. {t('wrong_app_paste')}</div>
                </div>
            </TextDetails>
        </div>
    );
};

export default PageWrongApp;