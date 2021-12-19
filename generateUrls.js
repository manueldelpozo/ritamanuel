'use strict';

const fs = require('fs');
const guestsJson = require('./src/consts/guests.json');

const PORT = 3000;
const urlBase = 'https://ritamanu.io';
const urlLocal = `http://localhost:${PORT}`

const getUrlListByLang = (lang, list) => list.map(guest => ({
    guest,
    lang,
    url: `${urlLocal}/${lang}?guest=${encodeURIComponent(guest)}`,
}));

const urlLists = Object.entries(guestsJson).map(([lang, list]) => getUrlListByLang(lang, list));

fs.writeFile('public/guestUrls.json', JSON.stringify(urlLists, null, 2), (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

console.log('This is after the write call');