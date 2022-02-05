import i18n, { t } from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            'dear': 'Dear',
            'intro': 'You are invited to join our wedding',
            'journey': 'We are onboard on a new journey, and we want you to come with us.',
            'church': 'The ceremony will take place in the Church of ',
            'church_time': 'On 3rd September at ',
            'banquet': 'After ceremony we will head off to banquet place at ',
            'banquet_time': 'And we will start the cocktail in the entrance patio at ',
            'end1': 'Hopefully we will see you',
            'end2': 'on 3rd September',
            'end3': 'in Murcia',
            'end4': 'Bye!',
            'download': 'Download all wedding details',
            'gift_intro': 'Just your presence is already the best gift to us. However, if you desire to give nonetheless',
            'gift_nr_account': 'Account number',
            'gift_title': 'In the transfer title',
            'thanks_advance': 'Thank You in advance',
            'ryanair_flights_alicante': 'Fligths to Alicante (Ryanair)',
            'ryanair_flights_murcia': 'Fligths to Murcia (Ryanair)',
            'train-renfe': 'Go by train (Renfe)',
            'bus-alsa': 'Go by bus (Alsa)',
            'rent-a-car': 'Go by car (Rent-a-Car)',
            'at': 'at',
            'copy': 'Copy',
            'confirm': 'Please confirm you attendance asap',
            'yesGo': 'Yes, I go',
            'iluk': 'I\'ll let you know later',
            'noGo': 'Unfortunately I can\'t go',
            'wedding': 'Rita and Manuel Wedding',
            'banquet_calendar': 'Rita and Manuel Wedding\'s Banquet',
            'transport_banquet': 'Bus service will be available from Murcia',
            'transport_journeys': 'Bus journeys',
            'transport_info': 'Let\'s start the journey',
            'hotel_intro': 'Also included stay at',
            'night': 'Night',
            'breakfast': 'Breakfast',
            'tourism_info': 'If you wanna stay longer, we recommend you these places',
            'murcia': 'Murcia',
            'cartagena': 'Cartagena',
            'rural_house': 'Rural house in Pliego',
            'baths_archena': 'Archena Spa - near wedding celebration',
            'wrong_app_intro': 'If you want to see your wedding invitation, please use another app',
            'download_chrome': 'Here download Chrome',
            'wrong_app_copy': 'Copy this url:',
            'wrong_app_paste': 'Paste the url in Chrome and enjoy the wedding invitation :)',
        }
    },
    es: {
        translation: {
            'dear': 'Querid@',
            'intro': 'Te invitamos a nuestro enlace',
            'journey': 'Nos embarcamos en un viaje, y queremos que nos acompañes.',
            'church': 'La ceremonia tendrá lugar en la Iglesia de ',
            'church_time': 'El 3 de septiembre a las ',
            'banquet': 'Después de la ceremonia nos dirigiremos al lugar de celebración en ',
            'banquet_time': 'Y comenzaremos el cocktail en el patio de entrada a las ',
            'end1': 'Esperamos verte',
            'end2': 'el 3 de septiembre',
            'end3': 'en Murcia',
            'end4': 'Hasta pronto',
            'download': 'Descarga los detalles de la boda',
            'gift_intro': 'Tu presencia ya es un regalo para nosotros. Sin embargo si deseas obsequiarnos con un detalle',
            'gift_nr_account': 'Número de cuenta',
            'gift_title': 'Con el titulo',
            'thanks_advance': 'Te damos las gracias de antemano',
            'ryanair_flights_alicante': 'Vuelos a Alicante (Ryanair)',
            'ryanair_flights_murcia': 'Vuelos a Murcia (Ryanair)',
            'train-renfe': 'Viaja en tren (Renfe)',
            'bus-alsa': 'Viaja en autobus (Alsa)',
            'rent-a-car': 'Viaja en coche (Rent-a-Car)',
            'at': 'a las',
            'copy': 'Copiar',
            'confirm': 'Por favor, confirmanos tu asistencia',
            'yesGo': 'Si, seguro que voy',
            'iluk': 'Confirmaré más tarde',
            'noGo': 'Me temo que no puedo',
            'wedding': 'Ceremonia Rita y Manuel',
            'banquet_calendar': 'El banquete de bodas de Rita y Manuel',
            'transport_banquet': 'Dispondras de servicio de transporte desde Murcia',
            'transport_journeys': 'Trayectos en bus',
            'transport_info': 'Comencemos el viaje',
            'hotel_intro': 'Te pagamos la estancia en',
            'night': 'Noche',
            'breakfast': 'Desayuno',
            'tourism_info': 'Si te quedas más dias, te recomendamos estos sitios',
            'murcia': 'Murcia',
            'cartagena': 'Cartagena',
            'rural_house': 'Casa rural de Pliego',
            'baths_archena': 'Balneario de Archena - cerca banquete de bodas',
            'wrong_app_intro': 'Si quieres ver tu invitación de boda, por favor usa otra app',
            'download_chrome': 'Aquí descárgate Chrome',
            'wrong_app_copy': 'Copia esta url:',
            'wrong_app_paste': 'Pega la url en el navegador Chrome y disfruta de la invitación :)',
        }
    },
    es_pl: {
        translation: {
            'dear': 'Queridos',
            'intro': 'Os invitamos a nuestro enlace',
            'journey': 'Nos embarcamos en un viaje, y queremos que nos acompañes.',
            'church': 'La ceremonia tendrá lugar en la Iglesia de ',
            'church_time': 'El 3 de septiembre a las ',
            'banquet': 'Después de la ceremonia nos dirigiremos al lugar de celebración en ',
            'banquet_time': 'Y comenzaremos el cocktail en el patio de entrada a las ',
            'end1': 'Esperamos veros',
            'end2': 'el 3 de septiembre',
            'end3': 'en Murcia',
            'end4': 'Hasta pronto',
            'download': 'Descarga los detalles de la boda',
            'gift_intro': 'Vuestra presencia ya es un regalo para nosotros. Sin embargo si deseáis obsequiarnos con un detalle',
            'gift_nr_account': 'Número de cuenta',
            'gift_title': 'Con el titulo',
            'thanks_advance': 'Os damos las gracias de antemano',
            'ryanair_flights_alicante': 'Vuelos a Alicante (Ryanair)',
            'ryanair_flights_murcia': 'Vuelos a Murcia (Ryanair)',
            'train-renfe': 'Viajar en tren (Renfe)',
            'bus-alsa': 'Viajar en autobus (Alsa)',
            'rent-a-car': 'Viajar en coche (Rent-a-Car)',
            'at': 'a las',
            'copy': 'Copiar',
            'confirm': 'Por favor, confirmarnos vuestra asistencia',
            'yesGo': 'Si, seguro que vamos',
            'iluk': 'Confirmaremos más tarde',
            'noGo': 'Lo siento, no podemos ir',
            'wedding': 'Ceremonia boda Rita y Manuel',
            'banquet_calendar': 'El banquete de bodas de Rita y Manuel',
            'transport_banquet': 'Dispondreis de servicio de transporte desde Murcia',
            'transport_journeys': 'Trayectos en bus',
            'transport_info': 'Comencemos el viaje',
            'hotel_intro': 'Os pagamos la estancia en',
            'night': 'Noche',
            'breakfast': 'Desayuno',
            'tourism_info': 'Si os quedais más dias, os recomendamos estos sitios',
            'murcia': 'Murcia',
            'cartagena': 'Cartagena',
            'rural_house': 'Casa rural de Pliego',
            'baths_archena': 'Balneario de Archena - cerca banquete de bodas',
            'wrong_app_intro': 'Si queréis ver vuestra invitación de boda, por favor usad otra app',
            'download_chrome': 'Aquí descárgaos Chrome',
            'wrong_app_copy': 'Copiad esta url:',
            'wrong_app_paste': 'Pegad la url en el navegador Chrome y disfrutad de la invitación :)',
        }
    },
    pl: {
        translation: {
            'dear': 'Dla Ciebie',
            'intro': 'Zapraszamy na nasze wesele',
            'journey': 'Jesteśmy na pokładzie w podróży i chcemy, żebyś do nas dołączył.',
            'church': 'Uroczystość odbędzie się w kościele ',
            'church_time': '3 września o godz ',
            'banquet': 'Po ceremonii udamy się na miejsce uroczystości w ',
            'banquet_time': 'A koktajl zaczniemy w patio wejściowym o godz ',
            'end1': 'Mamy nadzieję cię zobaczyć',
            'end2': '3 września',
            'end3': 'w Murcje',
            'end4': 'Do zobaczenia',
            'download': 'Pobierz szczegóły ślubu',
            'gift_intro': 'Wasza obecność jest dla nas najlepszym prezentem. Jednak tradycyjnie w Hiszpanii goście nie przynoszą prezentów, ani kwiatów. Jeśli chcielibyscie pomóc mozecie pszelac dowolną kwotę',
            'gift_nr_account': 'Numer konta',
            'gift_title': 'Z tytulem przelewu',
            'thanks_advance': 'Z góry dziękujemy',
            'ryanair_flights_alicante': 'Loty do Alicante (Ryanair)',
            'ryanair_flights_murcia': 'Loty do Murcja (Ryanair)',
            'train-renfe': 'Podróżować pociągiem (Renfe)',
            'bus-alsa': 'Podróżować autobusem (Alsa)',
            'rent-a-car': 'Podróżować samochodem (Rent-a-Car)',
            'at': 'o',
            'copy': 'Kopiuj',
            'confirm': 'Proszę potwierdzić swoją obecność',
            'yesGo': 'Tak, na pewno będę',
            'iluk': 'Potwierdzimy przed 1 maja',
            'noGo': 'Niestety nie możemy',
            'wedding': 'Ślub Rity i Manuela',
            'banquet_calendar': 'Wesele Rity i Manuela',
            'transport_banquet': 'Autobus będzie dostępny z Murcji',
            'transport_journeys': 'Przejazdy autobusem',
            'transport_info': 'Rozpocznijmy podróż',
            'hotel_intro': 'Obejmuje również pobyt w',
            'night': 'Noc',
            'breakfast': 'Śniadanie',
            'tourism_info': 'Jeśli zostaniesz na więcej dni, polecamy te miejsca',
            'murcia': 'Murcja',
            'cartagena': 'Kartagena',
            'rural_house': 'Dom w Pliego',
            'baths_archena': 'Termy w Archena - blisko wesele',
            'wrong_app_intro': 'Jeśli chcesz zobaczyć twoje zaproszenie na ślub, skorzystaj z innej aplikacji',
            'download_chrome': 'Tutaj pobierz Chrome',
            'wrong_app_copy': 'Skopiuj ten adres url:',
            'wrong_app_paste': 'Wklej adres url w Chrome i ciesz się twoje zaproszenie na ślub :)',
        }
    },
    pl_pl: {
        translation: {
            'dear': 'Dla Was',
            'intro': 'Zapraszamy na nasze wesele',
            'journey': 'Jesteśmy na pokładzie w podróży i chcemy, żebyś do nas dołączył.',
            'church': 'Uroczystość odbędzie się w kościele ',
            'church_time': '3 września o godz ',
            'banquet': 'Po ceremonii udamy się na miejsce uroczystości w ',
            'banquet_time': 'A koktajl zaczniemy w patio wejściowym o godz ',
            'end1': 'Mamy nadzieję cię zobaczyć',
            'end2': '3 września',
            'end3': 'w Murcje',
            'end4': 'Do zobaczenia',
            'download': 'Pobierz szczegóły ślubu',
            'gift_intro': 'Wasza obecność jest dla nas najlepszym prezentem. Jednak tradycyjnie w Hiszpanii goście nie przynoszą prezentów, ani kwiatów. Jeśli chcielibyscie pomóc mozecie pszelac dowolną kwotę',
            'gift_nr_account': 'Numer konta',
            'gift_title': 'Z tytulem przelewu',
            'thanks_advance': 'Z góry dziękujemy',
            'ryanair_flights_alicante': 'Loty do Alicante (Ryanair)',
            'ryanair_flights_murcia': 'Loty do Murcja (Ryanair)',
            'train-renfe': 'Podróżować pociągiem (Renfe)',
            'bus-alsa': 'Podróżować autobusem (Alsa)',
            'rent-a-car': 'Podróżować samochodem (Rent-a-Car)',
            'at': 'o',
            'copy': 'Kopiuj',
            'confirm': 'Proszę potwierdzić wasza obecność',
            'yesGo': 'Tak, na pewno będę',
            'iluk': 'Potwierdzimy przed 1 maja',
            'noGo': 'Niestety nie możemy',
            'wedding': 'Ślub Rity i Manuela',
            'banquet_calendar': 'Wesele Rity i Manuela',
            'transport_banquet': 'Autobus będzie dostępny z Murcji',
            'transport_journeys': 'Przejazdy autobusem',
            'transport_info': 'Rozpocznijmy podróż',
            'hotel_intro': 'Obejmuje również pobyt w',
            'night': 'Noc',
            'breakfast': 'Śniadanie',
            'tourism_info': 'Jeśli zostaniecie na więcej dni, polecamy te miejsca',
            'murcia': 'Murcja',
            'cartagena': 'Kartagena',
            'rural_house': 'Dom w Pliego',
            'baths_archena': 'Termy w Archena - blisko wesele',
            'wrong_app_intro': 'Jeśli chcielibyscie zobaczyć wasza zaproszenie na ślub, skorzystajcie z innej aplikacji',
            'download_chrome': 'Tutaj pobierzcie Chrome',
            'wrong_app_copy': 'Skopiujcie ten adres url:',
            'wrong_app_paste': 'Wklejcie adres url w Chrome i ciesz się wasza zaproszenie na ślub :)',
        }
    },
    fr: {
        translation: {
            'dear': 'Chers',
            'intro': 'Nous vous invitons à notre mariage',
            'journey': 'Nous nous embarquons dans un voyage, et nous voulons que vous vous joigniez à nous.',
            'church': 'La cérémonie aura lieu dans l\'église de ',
            'church_time': 'Le 3 septembre à ',
            'banquet': 'Après la cérémonie, nous irons sur le site de ',
            'banquet_time': 'Et nous commencerons le cocktail dans le patio d\'entrée à ',
            'end1': 'On se voit',
            'end2': 'le 3 septembre',
            'end3': 'à Murcie',
            'end4': 'À bientôt!',
            'download': 'Télécharger les détails du mariage',
            'gift_intro': 'Votre seule présence est le meilleur cadeau pour nous. Cependant, si vous souhaitez aider',
            'gift_nr_account': 'Numéro de compte',
            'gift_title': 'Avec motif du virement',
            'thanks_advance': 'Merci d\'avance',
            'ryanair_flights_alicante': 'Vols vers Alacante (Ryanair)',
            'ryanair_flights_murcia': 'Vols vers Murcie (Ryanair)',
            'train-renfe': 'Voyage en train (Renfe)',
            'bus-alsa': 'Voyage en bus (Alsa)',
            'rent-a-car': 'Voyage en voiture (Rent-a-Car)',
            'at': 'à',
            'copy': 'Copier',
            'confirm': 'Veuillez confirmer votre présence',
            'yesGo': 'Oui, on irons',
            'iluk': 'Nous confirmerons plus tard',
            'noGo': 'Nous ne pourrons pas aller',
            'wedding': 'Le mariage Rita et Manuel',
            'banquet_calendar': 'La noce de Rita et Manuel',
            'transport_banquet': 'Un service de bus sera disponible depuis Murcie',
            'transport_journeys': 'Trajets en bus',
            'transport_info': 'Commençons le voyage',
            'hotel_intro': 'Nous vous invitons à rester au',
            'night': 'Nuit',
            'breakfast': 'Petit-déjeuner',
            'tourism_info': 'Si vous restez plus de jours, nous vous recommandons ces lieux',
            'murcia': 'Murcie',
            'cartagena': 'Cartagene',
            'rural_house': 'La maison rurale à Pliego',
            'baths_archena': 'Les Bains de Archena - près de la noce',
            'wrong_app_intro': 'Si vous voulez voir votre invitation de mariage, veuillez utiliser une autre application',
            'download_chrome': 'Ici télécharger Chrome',
            'wrong_app_copy': 'Copier cette url:',
            'wrong_app_paste': 'Collez l\'url dans le navigateur Chrome et profitez de l\'invitation :)',
        }
    }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'es', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
