import * as React from 'react';
import { useTranslation } from 'react-i18next';
import infoInterest from '../consts/infoInterest';

const Page7TravelInterest = () => {
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
            <ul style={{ textAlign: 'start' }}>
                {infoInterest?.map(interest => (
                    <li key={interest.label}>
                        <a href={interest.link}>{t(interest.label)}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page7TravelInterest;