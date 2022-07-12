import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import CopyContent from '../components/CopyContent';
import ParallaxWrapper from '../components/ParallaxWrapper';
import bankDetails from '../consts/bankDetails';
import divider from '../assets/divider2.png';
import gift from '../assets/gift.png';
import { vh2px, vw2px } from '../helpers/parsers';

const TextIntro = styled.h2`
    width: min(100vw, 750px);
    margin: 0 auto;
    text-align: center;
    // font-size: min(30px,10vw);
`;

const PageDetailsGift = styled.div`
    & .page-details__gift__iban {
        font-family: serif;
        font-weight: bold;
    }
`;

const Gift = styled.img`
    animation: scaling 3s infinite ease-in-out;
`;

const getAccountNumber = ({ iban, accountPL, accountPL2, list2 }, guest, isPl) => {
    if (!isPl) return iban;
    if (list2.includes(guest)) return accountPL2;
    return accountPL;
}

const PageGift = ({ scroll, lang, guest }) => {
    const { t } = useTranslation();

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: 20,
            borderBottom: '1px solid #ccc',
        }}>
            <ParallaxWrapper
                start={scroll.top}
                end={scroll.bottom}
                animations={[
                    ['scale', 1, 0.8],
                    ['translateY', 0, vw2px(5)],
                ]}>
                <TextIntro>{t('gift_intro')}</TextIntro>
            </ParallaxWrapper>
            <ParallaxWrapper
                start={scroll.top}
                end={scroll.bottom}
                animations={[
                    ['scale', 0.8, 1.2],
                ]}>
                <Gift src={gift} height={vh2px(20)} width="auto"/>
            </ParallaxWrapper>
            <PageDetailsGift className="page-details__gift">
                <div>
                    {t('gift_nr_account')}:<br />
                    <div className="page-details__gift__iban">
                        <CopyContent
                            content={getAccountNumber(bankDetails, guest, lang.startsWith('pl'))}
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
