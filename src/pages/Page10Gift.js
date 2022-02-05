import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import CopyContent from '../components/CopyContent';
import ParallaxWrapper from '../components/ParallaxWrapper';
import bankDetails from '../consts/bankDetails';
import divider from '../assets/divider2.png';
import gift from '../assets/gift.png';
import { vh2px } from '../helpers/parsers';

const PageDetailsGift = styled.div`
    & .page-details__gift__intro {
        font-size: 1.2em;
        height: 10vh;
        width: 100vw;
        margin: 0 auto;
        max-width: 700px;
        text-align: center;
        @media (max-width: 768px) {
            font-size: 1em;
        }
    }
    & .page-details__gift__iban {
        font-family: serif;
        font-weight: bold;
    }
`;

const PageGift = ({ scroll, lang }) => {
    const { t } = useTranslation();

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: 20,
            // borderBottom: '1px solid #ccc',
        }}>
            <ParallaxWrapper
                start={scroll.top}
                end={scroll.bottom}
                animations={[
                    ['scale', 1, 0.8],
                ]}>
                <h1 className="page-details__gift__intro">{t('gift_intro')}</h1>
            </ParallaxWrapper>
            <ParallaxWrapper
                start={scroll.top}
                end={scroll.bottom}
                animations={[
                    ['scale', 0.8, 1.2],
                ]}>
                <img src={gift} height={vh2px(20)} width="auto"/>
            </ParallaxWrapper>
            <PageDetailsGift className="page-details__gift">
                <div>
                    {t('gift_nr_account')}:<br />
                    <div className="page-details__gift__iban">
                        <CopyContent
                            content={lang.startsWith('pl') ? bankDetails.accountPL : bankDetails.iban}
                            noSpaces
                        />
                    </div>
                </div>
                <div className="page-details__gift__title">
                    {t('gift_title')}:<br />
                    <strong>{lang.startsWith('pl') ? bankDetails.titlePL : bankDetails.title}</strong>
                </div>
                <img src={divider} alt="divider" width="30%" height="auto" />
                <h2 style={{ marginTop: 0 }}>{t('thanks_advance')}</h2>
            </PageDetailsGift>
        </div>
    );
};

export default PageGift;