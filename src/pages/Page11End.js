import * as React from 'react';
import { useTranslation } from 'react-i18next';
import divider from '../assets/divider.svg';

const PageEnd = ({ guest }) => {
    const { t } = useTranslation();

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '10%',
            borderBottom: '1px solid #ccc',
        }}>
            {guest && <h2>{guest}</h2>}
            <img src={divider} alt="divider" width="150" height="auto" />
            <h3>
                <div>{t('end1')}</div>
                <div>{t('end2')}</div>
                <div>{t('end3')}</div>
            </h3>
            <img src={divider} alt="divider" width="150" height="auto" style={{ transform: 'rotate(180deg)' }} />
            <h2>
                {t('end4')}
            </h2>
        </div>
    );
};

export default PageEnd;