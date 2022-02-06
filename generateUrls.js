'use strict';

const fs = require('fs');
const guestsJson = require('./src/consts/guests.json');

const PORT = 3000;
const urlBase = 'https://manueldelpozo.github.io/ritamanuel';
const urlLocal = `http://localhost:${PORT}`

const getInvitationMessage = ({ guest, lang, url, isFromRita }) => {
    const other = isFromRita ? 'Manu' : 'Rita';
    const messages = {
        es: `Hola ${guest} :) ${other} y yo tenemos el gusto de invitarte a nuestra boda 👰🤵. Haz click en el siguente enlace: ${url}`,
        es_pl: `Hola ${guest} :) ${other} y yo tenemos el gusto de invitaros a nuestra boda 👰🤵. Haz click en el siguente enlace: ${url}`,
        pl: `Cześć ${guest} :) ${other} i ja mamy przyjemność zaprosić ciebe na nasz ślub 👰🤵. Kliknij poniższy link: ${url}`,
        pl_pl: `Cześć ${guest} :) ${other} i ja mamy przyjemność zaprosić was na nasz ślub 👰🤵. Kliknij poniższy link: ${url}`,
        en: `Hi ${guest} :) ${other} and I have the pleasure of inviting you to our wedding 👰🤵. Click on the following link: ${url}`,
        fr: `Coucou ${guest} :) ${other} et moi avons le plaisir de vous inviter à notre mariage 👰🤵. Cliquez sur le lien suivant: ${url}`,
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
            isFromRita: (['pl', 'pl_pl'].includes(lang) && guest !== 'Marcin') || (lang === 'en' && guest !== 'Filipa and Bruno'),
        }),
    };
});

const urlLists = Object.entries(guestsJson).map(([lang, list]) => getUrlListByLang(lang, list));

fs.writeFile('public/invitations.json', JSON.stringify(urlLists, null, 2), (err) => {
    if (err) throw err;
    console.log('Invitations written to file');
});

console.log('This is after the write call');