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
            <img src={divider} alt="divider" width="30%" height="auto" />
            <h1>{t('end')}</h1>
        </div>
    );
};

export default PageEnd;