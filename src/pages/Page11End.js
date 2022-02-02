import * as React from 'react';
import { useTranslation } from 'react-i18next';
import divider from '../assets/divider.png';

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
        }}>
            {guest && <h1>{guest}</h1>}
            <img src={divider} alt="divider" width="150" height="auto" />
            <h1>
                <div>{t('end1')}</div>
                <div>{t('end2')}</div>
                <div>{t('end3')}</div>
            </h1>
            <img src={divider} alt="divider" width="150" height="auto" style={{ transform: 'rotate(180deg)' }} />
            <h1>
                {t('end4')}
            </h1>
        </div>
    );
};

export default PageEnd;