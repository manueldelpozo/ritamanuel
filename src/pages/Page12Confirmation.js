import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ButtonFrame from '../components/ButtonFrame';
import detectWhatsapp from '../helpers/detectWhatsapp';
import confirmationDetails from '../consts/confirmationDetails';

const PageConfirmation = ({ lang, guest }) => {
    const { t } = useTranslation();
    const { email, whatsapp } = confirmationDetails[lang];
    const [hasWhatsapp, setHasWhatsapp] = useState(false);

    // useEffect(() => {
    //     detectWhatsapp(whatsapp, 'test')
    //         .then((result) => setHasWhatsapp(result))
    //         .catch(() => setHasWhatsapp(false));
    // }, [whatsapp]);

    const getHrefWithMessage = (message, isWhatsapp) => {
        // return detectWhatsapp(whatsapp, encodeURIComponent(message))
        //     .then(() => `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`)
        //     .catch(() => `mailto:${email}?
        //         subject=Confirmation${encodeURIComponent(` ${guest}`)}
        //         &body=${encodeURIComponent(message)}`);
        return isWhatsapp
            ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`
            : `mailto:${email}?`
                + `subject=Confirmation${encodeURIComponent(` ${guest}`)}`
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
        }}>
            <h2>{t('confirm')}</h2>
            <div style={{
                display: 'flex',
                gap: 30,
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginTop: 30,
            }}>
                <ButtonFrame href={getHrefWithMessage(t('yesGo'), hasWhatsapp)}>
                    {t('yesGo')}
                </ButtonFrame>
                <ButtonFrame href={getHrefWithMessage(t('iluk'), hasWhatsapp)}>
                    {t('iluk')}
                </ButtonFrame>
                <ButtonFrame href={getHrefWithMessage(t('noGo'), hasWhatsapp)}>
                    {t('noGo')}
                </ButtonFrame>
            </div>
        </div>
    );
};

export default PageConfirmation;