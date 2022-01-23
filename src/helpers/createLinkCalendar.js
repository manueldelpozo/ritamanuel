const parseToISOString = dateTime => (
    (new Date(dateTime)).toISOString().replace(/-|:|\.\d\d\d/g,'')
);

const createLinkCalendar = ({
    text, dates, details, location,
}) => `http://www.google.com/calendar/render?action=TEMPLATE`
    + `&text=${text.split(' ').join('+')}`
    + `&dates=${parseToISOString(dates[0])}/${parseToISOString(dates[1])}`
    + `&details=${details.split(' ').join('+')}`
    + `&location=${location.split(' ').join('+')}`
    + `&sf=true&output=xml`;

export default createLinkCalendar;