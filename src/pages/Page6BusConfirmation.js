import { useTranslation } from 'react-i18next';
import format from 'date-fns/format';
import subMinutes from 'date-fns/subMinutes';
import ButtonFrame from '../components/ButtonFrame';
import banquetDetails from '../consts/banquetDetails';
import confirmationDetails from '../consts/confirmationDetails';

const TRAVEL_TIME_MIN = 45;
const FORMAT_TIME = 'HH:mm';

const getBusDeparture = (endDate) => (
    format(subMinutes(new Date(`${banquetDetails.startDate} ${endDate}`), TRAVEL_TIME_MIN), FORMAT_TIME)
);

const PageBusConfirmation = ({ lang, guest }) => {
    const { t } = useTranslation();
    const { email } = confirmationDetails[lang];

    const getHrefWithMessage = (message) => {
        return `mailto:${email}?`
            + `subject=Bus${encodeURIComponent(` ${guest}`)}`
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
                <ButtonFrame href={getHrefWithMessage(`${t('go_by_bus')} ${getBusDeparture(banquetDetails.endTime)}`)}>
                    {`${t('go_by_bus')} ${getBusDeparture(banquetDetails.endTime)}`}
                </ButtonFrame>
                <ButtonFrame href={getHrefWithMessage(`${t('go_by_bus')} ${getBusDeparture(banquetDetails.endTime2)}`)}>
                    {`${t('go_by_bus')} ${getBusDeparture(banquetDetails.endTime2)}`}
                </ButtonFrame>
            </div>
        </div>
    );
};

export default PageBusConfirmation;
