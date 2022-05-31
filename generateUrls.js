'use strict';

const fs = require('fs');
const createHTML = require('create-html');
const guestsJson = require('./src/consts/guests.json');
const hotelNightsJson = require('./src/consts/hotelNights.json');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const PORT = 3000;
const urlBase = 'https://manueldelpozo.github.io/ritamanuel';
const urlLocal = `http://localhost:${PORT}`

const getInvitationMessage = ({ guest, lang, url, isFromRita }) => {
    const other = isFromRita ? 'Manu' : 'Rita';
    const messages = {
        es: `Hola ${guest}! 🙂 ${other} y yo tenemos el gusto de invitarte a nuestra boda 👰🤵 Haz click en el siguente enlace: ${url} Avísame si tienes dificultad para ver la invitación. Saludos 👋`,
        es_pl: `Hola ${guest}! 🙂 ${other} y yo tenemos el gusto de invitaros a nuestra boda 👰🤵 Haz click en el siguente enlace: ${url} Avisadme si tenéis dificultad para ver la invitación. Saludos 👋`,
        pl: `Cześć ${guest}! 🙂 ${other} i ja mamy przyjemność zaprosić Ciebe na Nasz ślub 👰🤵 Kliknij poniższy link: ${url}`,
        pl_pl: `Cześć ${guest}! 🙂 ${other} i ja mamy przyjemność zaprosić Was na Nasz ślub 👰🤵 Kliknij poniższy link: ${url}`,
        en: `Hi ${guest}! 🙂 ${other} and I have the pleasure of inviting you to our wedding 👰🤵 Click on the following link: ${url}`,
        fr: `Coucou ${guest}! 🙂 ${other} et moi avons le plaisir de vous inviter à notre mariage 👰🤵 Cliquez sur le lien suivant: ${url}`,
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
            isFromRita: (['pl', 'pl_pl'].includes(lang) && guest !== 'Marcin')
                || (lang === 'en' && !['Filipa and Bruno', 'Gabriela and Slavko'].includes(guest)),
        }),
    };
});

const urlLists = Object.entries(guestsJson).map(([lang, list]) => getUrlListByLang(lang, list));
const hotelNightsList = Object.entries(hotelNightsJson).map(([guest, nights]) => ({ guest, nights }));
const nightPrice = {
    1: 57,
    2: 114,
};
const breakfastPrice = 10;

const generateBodyContent = (invitations, hotelNights) => {
    const html = `<!DOCTYPE html>`;
    const { document } = new JSDOM(html).window;
    const tmp = document.createElement('div');
    const list = document.createElement('ul');
    const listNights = document.createElement('ul');

    invitations.flat().forEach(({ guest, lang, url, message }) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        const copyBtn = document.createElement('button');
        const guestText = document.createTextNode(`${guest} // ${lang} // `);
        link.href = url;
        link.target = "_blank";
        link.innerHTML =  '-> link to test <- ';
        copyBtn.setAttribute("onclick",`copy('${message}')`);
        copyBtn.style.fontSize = '32px';
        copyBtn.style.padding = '10px';
        copyBtn.style.margin = '20px 10px 30px';
        copyBtn.innerHTML = `Copy message for ${guest}`;
        listItem.appendChild(guestText);
        listItem.appendChild(link);
        listItem.appendChild(copyBtn);
        list.appendChild(listItem);
    });

    hotelNights.flat().forEach(({ guest, nights }) => {
        const listItem = document.createElement('li');
        const total = document.createElement('strong');
        const guestNumber = guest.split(' ').some(word => [' y ', ' i ', ' et ', ' and '].includes(word)) ? 2 : 1;
        const guestText = document.createTextNode(`${guest} // ${nights} nights // ${nightPrice[nights]} + breakfast(${breakfastPrice * guestNumber}) `);
        const totalText = document.createTextNode(`Total // ${nightPrice[nights] + breakfastPrice * guestNumber} EUR`);
        listItem.appendChild(guestText);
        total.appendChild(totalText);
        listItem.appendChild(total);
        listNights.appendChild(listItem);
    });

    tmp.appendChild(list);
    tmp.appendChild(listNights);

    return tmp.innerHTML;
}

const html = createHTML({
    title: 'Invitations',
    head: `<meta name="description" content="Invitations">
           <script type="text/javascript">
               function copy(message) {
                    console.log(navigator)
                    if ('clipboard' in navigator) {
                        navigator.clipboard.writeText(message);
                    } else {
                        document.execCommand('copy', true, message);
                    }
                }
            </script>
    `,
    body: generateBodyContent(urlLists, hotelNightsList),
});

fs.writeFile('public/invitations.html', html, function (err) {
    if (err) throw err;
    console.log('Invitations page created');
});

fs.writeFile('public/invitations.json', JSON.stringify(urlLists, null, 2), (err) => {
    if (err) throw err;
    console.log('Invitations written to file');
});

console.log('This is after the write call');
