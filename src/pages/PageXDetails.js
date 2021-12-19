import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ButtonFrame from '../components/ButtonFrame';
import CopyContent from '../components/CopyContent';
import bankDetails from '../consts/bankDetails';
import divider from '../assets/divider2.png';

const PageDetailsGift = styled.div`
    & > * {
        margin: .7em;
    }
    & .page-details__gift__intro {
        font-size: 1em;
    }
    & .page-details__gift__iban {
        font-family: auto;
        font-weight: bold;
    }
`;

const PageDetails = () => {
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
            <PageDetailsGift className="page-details__gift">
                <div className="page-details__gift__intro">{t('gift_intro')}</div>
                <div className="page-details__gift__iban">
                    <CopyContent content={bankDetails.iban} noSpaces />
                </div>
                <div className="page-details__gift__title">
                    {t('gift_title')}: <strong>{bankDetails.title}</strong>
                </div>
                <img src={divider} alt="divider" width="30%" height="auto" />
                <h3>{t('thanks_advance')}</h3>
            </PageDetailsGift>
            <ButtonFrame download="../assets/Rita&Manu.pdf">
                {t('download')}
            </ButtonFrame>
        </div>
    );
};

export default PageDetails;