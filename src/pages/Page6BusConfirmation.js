import { useTranslation } from 'react-i18next';
import ButtonFrame from '../components/ButtonFrame';
import confirmationDetails from '../consts/confirmationDetails';

const PageBusConfirmation = ({ lang, confirmedGuest }) => {
    const { t } = useTranslation();
    const { email } = confirmationDetails[lang];

    const getHrefWithMessage = (message) => {
        return `mailto:${email}?`
            + `subject=Confirmation${encodeURIComponent(` ${confirmedGuest}`)}`
            + `&body=${encodeURIComponent(message)}`;
    };

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
            <h2>{t('confirm_transport')}</h2>
            <div style={{
                display: 'flex',
                gap: 30,
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginTop: 30,
            }}>
                <ButtonFrame href={getHrefWithMessage(t('go_by_bus'))}>
                    {t('go_by_bus')}
                </ButtonFrame>
            </div>
        </div>
    );
};

export default PageBusConfirmation;
