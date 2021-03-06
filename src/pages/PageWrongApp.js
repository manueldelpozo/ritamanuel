import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import divider from '../assets/divider.svg';
import ButtonFrame from '../components/ButtonFrame';
import CopyContent from '../components/CopyContent';

const TextDetails = styled.div`
    padding: 0 10% 5%;
    width: 100vw;
    margin: 0;
    position: relative;
    z-index: 1;
    text-align: center;
`;

const TextInstructions = styled.div`
    font-size: min(14px, 5vw);
`;

const PageWrongApp = ({ url }) => {
    const { t } = useTranslation();

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 10,
            padding: '10%',
        }}>
            <TextDetails>
                <h2 style={{ margin: '0 auto', maxWidth: 700 }}>{t('wrong_app_intro')}</h2>
            </TextDetails>
            <img src={divider} alt="divider" width="auto" height="100px" />
            <ButtonFrame href="https://www.google.com/chrome/">
                <strong>1.</strong> {t('download_chrome')}
            </ButtonFrame>
            <TextInstructions>
                <strong>2.</strong> {t('wrong_app_copy')}:
                <strong style={{ fontFamily: 'serif', fontSize: 12 }}><CopyContent content={url} /></strong>
            </TextInstructions>
            <TextInstructions>
                <strong>3.</strong> {t('wrong_app_paste')}
            </TextInstructions>
            <TextInstructions>
                <strong>4.</strong> {t('wrong_app_computer')}
            </TextInstructions>
        </div>
    );
};

export default PageWrongApp;