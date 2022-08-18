import * as React from 'react';
import { useTranslation } from 'react-i18next';
import divider from '../assets/divider.svg';

const PageEnd = ({ guest, isConfirmed }) => {
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
            {!isConfirmed
                ? (
                    <h3>
                        <div>{t('end1')}</div>
                        <div>{t('end2')}</div>
                        <div>{t('end3')}</div>
                    </h3>
                )
                : (
                    <iframe
                        height="50%"
                        src="https://www.youtube.com/embed/uf4u7gHSPIA"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ width: "100vw" }}
                    >
                    </iframe>
                )
            }
            <img src={divider} alt="divider" width="150" height="auto" style={{ transform: 'rotate(180deg)' }} />
            <h2>
                {isConfirmed ? t('end_confirmed') : t('end4')}
            </h2>
        </div>
    );
};

export default PageEnd;
