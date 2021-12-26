'use strict';

const fs = require('fs');
const guestsJson = require('./src/consts/guests.json');

const PORT = 3000;
const urlBase = 'https://manueldelpozo.github.io/ritamanuel';
const urlLocal = `http://localhost:${PORT}`

const getInvitationMessage = ({ guest, lang, url, isfromRita }) => {
    const other = isfromRita ? 'Manu' : 'Rita';
    const messages = {
        es: `Hola ${guest} :) ${other} y yo tenemos el gusto de invitarte a nuestra boda 👰🤵. Haz click en el siguente enlace: ${url}`,
        es_pl: `Hola ${guest} :) ${other} y yo tenemos el gusto de invitaros a nuestra boda 👰🤵. Haz click en el siguente enlace: ${url}`,
        pl: `Cześć ${guest} :) ${other} i ja mamy przyjemność zaprosić Państwa na nasz ślub 👰🤵. Kliknij poniższy link: ${url}`,
        en: `Hi ${guest} :) ${other} and I have the pleasure of inviting you to our wedding 👰🤵. Click on the following link: ${url}`,
        fr: `Coucou ${guest} :) ${other} et j'ai le plaisir de vous inviter à notre mariage 👰🤵. Cliquez sur le lien suivant: ${url}`,
    };

    return messages[lang];
};

const getUrlListByLang = (lang, list) => list.map(guest => {
    const url = `${urlBase}/#/${lang}?guest=${encodeURIComponent(guest)}`;

    return {
        guest,
        lang,
        url,
        message: getInvitationMessage({
            lang,
            guest,
            url,
            isfromRita: (lang === 'pl' && guest !== 'Marcin') || (lang === 'en' && guest !== 'Filipa and Bruno'),
        }),
    };
});

const urlLists = Object.entries(guestsJson).map(([lang, list]) => getUrlListByLang(lang, list));

fs.writeFile('public/guestUrls.json', JSON.stringify(urlLists, null, 2), (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

console.log('This is after the write call');