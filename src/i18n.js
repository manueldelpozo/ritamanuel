import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            'dear': 'Dear',
            'intro': 'You are invited to join our wedding',
            'intro_confirmed': 'Thank you for your confirmation',
            'journey': 'We\'re embarking on an exciting journey, and we would like you to come with us',
            'journey_confirmed': 'We\'re glad you are joining us on this journey',
            'church': 'The ceremony will take place in the Church of ',
            'church_time': 'On 3rd September at ',
            'banquet': 'After ceremony we will head to the wedding reception at ',
            'banquet_time': 'And we will start the cocktail in the entrance patio at ',
            'end1': 'We hopefully see you',
            'end2': 'on 3rd September',
            'end3': 'in Murcia',
            'end4': 'Bye!',
            'end_confirmed': 'Get ready for the action!',
            'download': 'Download all wedding details',
            'gift_intro': 'Just your presence is already the best gift to us. However, if you desire to give nonetheless',
            'gift_nr_account': 'Account number',
            'gift_title': 'With the transfer title',
            'gift_name': 'Manuel del Pozo',
            'thanks_advance': 'Thank You in advance',
            'ryanair_flights_alicante': 'Fligths to Alicante (Ryanair)',
            'ryanair_flights_murcia': 'Fligths to Murcia (Ryanair)',
            'train-renfe': 'Go by train (Renfe)',
            'bus-alsa': 'Go by bus (Alsa)',
            'rent-a-car': 'Go by car (Rent-a-Car)',
            'at': 'at',
            'copy': 'Copy',
            'confirm': 'Please confirm your attendance as soon as possible',
            'yesGo': 'Yes, We go',
            'iluk': 'We\'ll let you know later',
            'noGo': 'Unfortunately we can\'t go',
            'wedding': 'Rita and Manuel Wedding',
            'banquet_calendar': 'Rita and Manuel Wedding\'s Banquet',
            'transport_banquet': 'Bus service will be available from Murcia city',
            'transport_journeys': 'Bus schedule',
            'transport_info': 'Let\'s start the journey',
            'hotel_intro': 'We will also pay for your stay at',
            'night': 'Night',
            'breakfast': 'Breakfast after wedding',
            'tourism_info': 'If you wanna stay longer, we recommend you these places',
            'murcia': 'Murcia',
            'cartagena': 'Cartagena',
            'rural_house': 'Rural house in Pliego',
            'baths_archena': 'Archena Spa - near wedding celebration',
            'wrong_app_intro': 'If you want to see your wedding invitation, please use another app',
            'download_chrome': 'Here download Chrome',
            'wrong_app_copy': 'Copy this url:',
            'wrong_app_paste': 'Paste the url in Chrome and enjoy the wedding invitation :)',
            'wrong_app_computer': 'If it does not work yet, please try it on computer',
            'confirm_transport': 'Please confirm if you need to use the bus service',
            'go_by_bus': 'Yes, We go by bus and I return at',
        }
    },
    es: {
        translation: {
            'dear': 'Querid@',
            'intro': 'Te invitamos a nuestro enlace',
            'intro_confirmed': 'Gracias por confirmar tu asistencia a nuestra boda',
            'journey': 'Nos embarcamos en un viaje, y queremos que nos acompañes',
            'journey_confirmed': 'Nos alegramos que nos acompañes en este viaje',
            'church': 'La ceremonia tendrá lugar en la Iglesia de ',
            'church_time': 'El 3 de septiembre a las ',
            'banquet': 'Después de la ceremonia nos dirigiremos al lugar de celebración en ',
            'banquet_time': 'Y comenzaremos el cocktail en el patio de entrada a las ',
            'end1': 'Esperamos verte',
            'end2': 'el 3 de septiembre',
            'end3': 'en Murcia',
            'end4': 'Hasta pronto',
            'end_confirmed': '¡Prepárate para la acción!',
            'download': 'Descarga los detalles de la boda',
            'gift_intro': 'Tu presencia ya es un regalo para nosotros. Sin embargo si deseas obsequiarnos con un detalle',
            'gift_nr_account': 'Número de cuenta',
            'gift_title': 'Con el título',
            'gift_name': 'Manuel del Pozo',
            'thanks_advance': 'Te damos las gracias de antemano',
            'ryanair_flights_alicante': 'Vuelos a Alicante (Ryanair)',
            'ryanair_flights_murcia': 'Vuelos a Murcia (Ryanair)',
            'train-renfe': 'Viaja en tren (Renfe)',
            'bus-alsa': 'Viaja en autobús (Alsa)',
            'rent-a-car': 'Viaja en coche (Rent-a-Car)',
            'at': 'a las',
            'copy': 'Copiar',
            'confirm': 'Por favor, confírmanos tu asistencia',
            'yesGo': 'Sí, seguro que voy',
            'iluk': 'Confirmaré más tarde',
            'noGo': 'Me temo que no puedo',
            'wedding': 'Ceremonia Rita y Manuel',
            'banquet_calendar': 'El banquete de bodas de Rita y Manuel',
            'transport_banquet': 'Dispondrás de servicio de transporte desde Murcia ciudad',
            'transport_journeys': 'Trayectos en bus',
            'transport_info': 'Comencemos el viaje',
            'hotel_intro': 'Te pagamos la estancia en',
            'night': 'Noche',
            'breakfast': 'Desayuno después de boda',
            'tourism_info': 'Si te quedas más dias, te recomendamos estos sitios',
            'murcia': 'Murcia',
            'cartagena': 'Cartagena',
            'rural_house': 'Casa rural de Pliego',
            'baths_archena': 'Balneario de Archena - cerca banquete de bodas',
            'wrong_app_intro': 'Si quieres ver tu invitación de boda, por favor usa otra app',
            'download_chrome': 'Aquí descárgate Chrome',
            'wrong_app_copy': 'Copia esta url:',
            'wrong_app_paste': 'Pega la url en el navegador Chrome y disfruta de la invitación :)',
            'wrong_app_computer': 'Si aún no funciona, por favor prueba en el ordenador',
            'confirm_transport': 'Por favor, confirmanos si necesitas usar el servicio de transporte',
            'go_by_bus': 'Sí, voy en bus y vuelvo a las',
        }
    },
    es_pl: {
        translation: {
            'dear': 'Queridos',
            'intro': 'Os invitamos a nuestro enlace',
            'intro_confirmed': 'Gracias por confirmar vuestra asistencia a nuestra boda',
            'journey': 'Nos embarcamos en un viaje, y queremos que nos acompañéis',
            'journey_confirmed': 'Nos alegramos que nos acompañéis en este viaje',
            'church': 'La ceremonia tendrá lugar en la Iglesia de ',
            'church_time': 'El 3 de septiembre a las ',
            'banquet': 'Después de la ceremonia nos dirigiremos al lugar de celebración en ',
            'banquet_time': 'Y comenzaremos el cocktail en el patio de entrada a las ',
            'end1': 'Esperamos veros',
            'end2': 'el 3 de septiembre',
            'end3': 'en Murcia',
            'end4': 'Hasta pronto',
            'end_confirmed': '¡Preparaos para la acción!',
            'download': 'Descarga los detalles de la boda',
            'gift_intro': 'Vuestra presencia ya es un regalo para nosotros. Sin embargo si deseáis obsequiarnos con un detalle',
            'gift_nr_account': 'Número de cuenta',
            'gift_title': 'Con el título',
            'gift_name': 'Manuel del Pozo',
            'thanks_advance': 'Os damos las gracias de antemano',
            'ryanair_flights_alicante': 'Vuelos a Alicante (Ryanair)',
            'ryanair_flights_murcia': 'Vuelos a Murcia (Ryanair)',
            'train-renfe': 'Viajar en tren (Renfe)',
            'bus-alsa': 'Viajar en autobús (Alsa)',
            'rent-a-car': 'Viajar en coche (Rent-a-Car)',
            'at': 'a las',
            'copy': 'Copiar',
            'confirm': 'Por favor, confirmadnos vuestra asistencia',
            'yesGo': 'Sí, seguro que vamos',
            'iluk': 'Confirmaremos más tarde',
            'noGo': 'Lo siento, no podemos ir',
            'wedding': 'Ceremonia boda Rita y Manuel',
            'banquet_calendar': 'El banquete de bodas de Rita y Manuel',
            'transport_banquet': 'Dispondréis de servicio de transporte desde Murcia ciudad',
            'transport_journeys': 'Trayectos en bus',
            'transport_info': 'Comencemos el viaje',
            'hotel_intro': 'Os pagamos la estancia en',
            'night': 'Noche',
            'breakfast': 'Desayuno después de boda',
            'tourism_info': 'Si os quedáis más dias, os recomendamos estos sitios',
            'murcia': 'Murcia',
            'cartagena': 'Cartagena',
            'rural_house': 'Casa rural de Pliego',
            'baths_archena': 'Balneario de Archena - cerca banquete de bodas',
            'wrong_app_intro': 'Si queréis ver vuestra invitación de boda, por favor usad otra app',
            'download_chrome': 'Aquí descárgaos Chrome',
            'wrong_app_copy': 'Copiad esta url:',
            'wrong_app_paste': 'Pegad la url en el navegador Chrome y disfrutad de la invitación :)',
            'wrong_app_computer': 'Si aún no funciona, por favor probad en el ordenador',
            'confirm_transport': 'Por favor, confirmadnos si necesitáis usar el servicio de transporte',
            'go_by_bus': 'Sí, vamos en bus y volvemos a las',
        }
    },
    pl: {
        translation: {
            'dear': 'Zaproszenie na Ślub',
            'intro': 'Będziemy uradowani Twoją obecnością!',
            'intro_confirmed': 'Dziękujemy za potwierdzenie obecności na naszym weselu',
            'journey': 'Jesteśmy na pokładzie w podróży i chcemy, żebyś do Nas dołączył',
            'journey_confirmed': 'Cieszymy się, że dołączysz do nas w tej podróży',
            'church': 'Uroczystość odbędzie się w kościele ',
            'church_time': '3 września o ',
            'banquet': 'Po ceremonii udamy się na miejsce uroczystości w ',
            'banquet_time': 'A koktajl zaczniemy w patio wejściowym o ',
            'end1': 'Mamy nadzieję Cię zobaczyć',
            'end2': '3 września',
            'end3': 'w Murcje',
            'end4': 'Do zobaczenia',
            'end_confirmed': 'Przygotuj się na akcję!',
            'download': 'Pobierz szczegóły ślubu',
            'gift_intro': 'Wasza obecność jest dla Nas najlepszym prezentem. Jednak tradycyjnie w Hiszpanii Goście nie przynoszą prezentów, ani kwiatów. Jeśli chcielibyscie pomóc, możecie przelać dowolną kwotę',
            'gift_nr_account': 'na numer konta',
            'gift_title': 'Z tytulem przelewu',
            'gift_name': 'Manuel del Pozo',
            'thanks_advance': 'Z góry dziękujemy',
            'ryanair_flights_alicante': 'Loty do Alicante (Ryanair)',
            'ryanair_flights_murcia': 'Loty do Murcji (Ryanair)',
            'train-renfe': 'Podróż pociągiem (Renfe)',
            'bus-alsa': 'Podróż autobusem (Alsa)',
            'rent-a-car': 'Podróż samochodem (Rent-a-Car)',
            'at': 'o',
            'copy': 'Kopiuj',
            'confirm': 'Proszę potwierdzić obecność',
            'yesGo': 'Tak, na pewno będę',
            'iluk': 'Potwierdzę przed 15 lipca',
            'noGo': 'Niestety nie mogę',
            'wedding': 'Ślub Rity i Manuela',
            'banquet_calendar': 'Wesele Rity i Manuela',
            'transport_banquet': 'Autobus będzie dostępny z Murcji centrum miasta',
            'transport_journeys': 'Przejazdy autobusem',
            'transport_info': 'Rozpocznijmy podróż',
            'hotel_intro': 'Zaproszenie obejmuje również pobyt w',
            'night': 'Noc',
            'breakfast': 'Śniadanie po weselu',
            'tourism_info': 'Jeśli zostaniesz na więcej dni, polecamy te miejsca',
            'murcia': 'Murcja',
            'cartagena': 'Kartagena',
            'rural_house': 'Dom w Pliego',
            'baths_archena': 'Termy w Archena - blisko wesele',
            'wrong_app_intro': 'Jeśli chcesz zobaczyć twoje zaproszenie na ślub, skorzystaj z innej aplikacji',
            'download_chrome': 'Tutaj pobierz Chrome',
            'wrong_app_copy': 'Skopiuj ten adres url:',
            'wrong_app_paste': 'Wklej adres url w Chrome i ciesz się zaproszeniem na ślub :)',
            'wrong_app_computer': 'Jeśli to jeszcze nie działa, wypróbuj na komputerze',
            'confirm_transport': 'Potwierdź proszę, jeśli jedziesz na uroczystość autobusem',
            'go_by_bus`': 'Tak, jadę autobusem i wracam o',
        }
    },
    pl_pl: {
        translation: {
            'dear': 'Zaproszenie na Ślub',
            'intro': 'Będziemy uradowani Waszą obecnością!',
            'intro_confirmed': 'Dziękujemy za potwierdzenie obecności na naszym weselu',
            'journey': 'Jesteśmy na pokładzie w podróży i chcemy, żebyście do Nas dołączyli',
            'journey_confirmed': 'Cieszymy się, że dołączycie do nas w tej podróży',
            'church': 'Uroczystość odbędzie się w kościele ',
            'church_time': '3 września o ',
            'banquet': 'Po ceremonii udamy się na miejsce uroczystości w ',
            'banquet_time': 'A koktajl zaczniemy w patio wejściowym o ',
            'end1': 'Mamy nadzieję Was zobaczyć',
            'end2': '3 września',
            'end3': 'w Murcje',
            'end4': 'Do zobaczenia',
            'end_confirmed': 'Przygotujcie się na akcję!',
            'download': 'Pobierz szczegóły ślubu',
            'gift_intro': 'Wasza obecność jest dla Nas najlepszym prezentem. Jednak tradycyjnie w Hiszpanii Goście nie przynoszą prezentów, ani kwiatów. Jeśli chcielibyście pomóc, możecie przelać dowolną kwotę',
            'gift_nr_account': 'na numer konta',
            'gift_title': 'Z tytulem przelewu',
            'gift_name': 'Manuel del Pozo',
            'thanks_advance': 'Z góry dziękujemy',
            'ryanair_flights_alicante': 'Loty do Alicante (Ryanair)',
            'ryanair_flights_murcia': 'Loty do Murcji (Ryanair)',
            'train-renfe': 'Podróż pociągiem (Renfe)',
            'bus-alsa': 'Podróż autobusem (Alsa)',
            'rent-a-car': 'Podróż samochodem (Rent-a-Car)',
            'at': 'o',
            'copy': 'Kopiuj',
            'confirm': 'Proszę potwierdzić obecność',
            'yesGo': 'Tak, na pewno będziemy',
            'iluk': 'Potwierdzimy przed 15 lipca',
            'noGo': 'Niestety nie możemy',
            'wedding': 'Ślub Rity i Manuela',
            'banquet_calendar': 'Wesele Rity i Manuela',
            'transport_banquet': 'Autobus będzie dostępny z Murcji centrum miasta',
            'transport_journeys': 'Przejazdy autobusem',
            'transport_info': 'Rozpocznijmy podróż',
            'hotel_intro': 'Zaproszenie obejmuje również pobyt w',
            'night': 'Noc',
            'breakfast': 'Śniadanie po weselu',
            'tourism_info': 'Jeśli zostaniecie na więcej dni, polecamy te miejsca',
            'murcia': 'Murcja',
            'cartagena': 'Kartagena',
            'rural_house': 'Dom w Pliego',
            'baths_archena': 'Termy w Archena - blisko wesele',
            'wrong_app_intro': 'Jeśli chcielibyscie zobaczyć wasza zaproszenie na ślub, skorzystajcie z innej aplikacji',
            'download_chrome': 'Tutaj pobierzcie Chrome',
            'wrong_app_copy': 'Skopiujcie ten adres url:',
            'wrong_app_paste': 'Wklejcie adres url w Chrome i cieszcie się zaproszeniem na ślub :)',
            'wrong_app_computer': 'Jeśli to jeszcze nie działa, wypróbujcie na komputerze',
            'confirm_transport': 'Potwierdź proszę, jeśli jedziecie na uroczystość autobusem',
            'go_by_bus': 'Tak, jedziemy autobusem i wracamy o',
        }
    },
    fr: {
        translation: {
            'dear': 'Chers',
            'intro': 'Nous vous invitons à notre mariage',
            'journey': 'Nous nous embarquons dans un voyage, et nous voulons que vous vous joigniez à nous',
            'church': 'La cérémonie de mariage aura lieu dans l\'église de ',
            'church_time': 'Le 3 septembre à ',
            'banquet': 'Après la cérémonie, nous irons sur le site de noce ',
            'banquet_time': 'Et nous commencerons le cocktail dans le patio d\'entrée à ',
            'end1': 'On se voit',
            'end2': 'le 3 septembre',
            'end3': 'à Murcie',
            'end4': 'À bientôt!',
            'download': 'Télécharger les détails du mariage',
            'gift_intro': 'Votre seule présence est le meilleur cadeau pour nous. Cependant, si vous souhaitez aider',
            'gift_nr_account': 'Numéro de compte',
            'gift_title': 'Avec motif du virement',
            'gift_name': 'Manuel del Pozo',
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
            'transport_banquet': 'Un service de bus sera disponible depuis Murcie centre ville',
            'transport_journeys': 'Trajets en bus',
            'transport_info': 'Commençons le voyage',
            'hotel_intro': 'Nous avons également réservé votre séjour à l\'',
            'night': 'Nuit',
            'breakfast': 'Petit-déjeuner apres mariage',
            'tourism_info': 'Si vous restez plus de jours, nous vous recommandons ces lieux',
            'murcia': 'Murcie',
            'cartagena': 'Cartagene',
            'rural_house': 'La maison rurale à Pliego',
            'baths_archena': 'Les Bains de Archena - près de la noce',
            'wrong_app_intro': 'Si vous voulez voir votre invitation de mariage, veuillez utiliser une autre application',
            'download_chrome': 'Ici télécharger Chrome',
            'wrong_app_copy': 'Copier cette url:',
            'wrong_app_paste': 'Collez l\'url dans le navigateur Chrome et profitez de l\'invitation :)',
            'wrong_app_computer': 'Si cela ne fonctionne pas encore, essayez sur ordinateur',
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
