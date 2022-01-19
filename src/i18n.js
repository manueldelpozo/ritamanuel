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
        'end': 'Hopefully we will see you on 3rd September in Murcia. Bye!',
        'download': 'Download all wedding details',
        'gift_intro': 'And if you want to give us a gift',
        'gift_title': 'In the transfer title',
        'thanks_advance': 'Thank You in advance',
        'ryanair_flights_alicante': 'Fligths to Alicante (Ryanair)',
        'ryanair_flights_murcia': 'Fligths to Murcia (Ryanair)',
        'at': 'at',
        'copy': 'Copy',
        'confirm': 'Please confirm you attendance asap',
        'yesGo': 'Yes, I go',
        'iluk': 'I\'ll let you know later',
        'noGo': 'Unfortunately I can\'t go',
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
        'end': 'Esperamos verte el 3 de septiembre en Murcia. Hasta pronto',
        'download': 'Descarga los detalles de la boda',
        'gift_intro': 'Y si deseas obsequiarnos con un regalo',
        'gift_title': 'Con el titulo',
        'thanks_advance': 'Te damos las gracias de antemano',
        'ryanair_flights_alicante': 'Vuelos a Alicante (Ryanair)',
        'ryanair_flights_murcia': 'Vuelos a Murcia (Ryanair)',
        'at': 'a las',
        'copy': 'Copiar',
        'confirm': 'Por favor, confirmarnos tu asistencia',
        'yesGo': 'Si, seguro que voy',
        'iluk': 'Confirmaré más tarde',
        'noGo': 'Me temo que no puedo',
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
        'end': 'Esperamos veros el 3 de septiembre en Murcia. Hasta pronto',
        'download': 'Descarga los detalles de la boda',
        'gift_intro': 'Y si deseais obsequiarnos con un regalo',
        'gift_title': 'Con el titulo',
        'thanks_advance': 'Os damos las gracias de antemano',
        'ryanair_flights_alicante': 'Vuelos a Alicante (Ryanair)',
        'ryanair_flights_murcia': 'Vuelos a Murcia (Ryanair)',
        'at': 'a las',
        'copy': 'Copiar',
        'confirm': 'Por favor, confirmarnos vuestra asistencia',
        'yesGo': 'Si, seguro que vamos',
        'iluk': 'Confirmaremos más tarde',
        'noGo': 'Lo siento, no podemos ir',
    }
  },
  pl: {
    translation: {
        'dear': 'Drodzy',
        'intro': 'Zapraszamy na nasze wesele',
        'journey': 'Jesteśmy na pokładzie w podróży i chcemy, żebyś do nas dołączył.',
        'church': 'Uroczystość odbędzie się w kościele ',
        'church_time': '3 września o godz ',
        'banquet': 'Po ceremonii udamy się na miejsce uroczystości w ',
        'banquet_time': 'A koktajl zaczniemy w patio wejściowym o godz ',
        'end': 'Do zobaczenia 3 września w Murcje.',
        'download': 'Pobierz szczegóły ślubu',
        'gift_intro': 'A jeśli chcieli dać na prezent',
        'gift_title': 'Z tytulem przelewu',
        'thanks_advance': 'Z góry dziękuję',
        'ryanair_flights_alicante': 'Loty do Alicante (Ryanair)',
        'ryanair_flights_murcia': 'Loty do Murcja (Ryanair)',
        'at': 'o',
        'copy': 'Kopiuj',
        'confirm': 'Proszę potwierdzić swoją obecność',
        'yesGo': 'Tak, na pewno będę',
        'iluk': 'Potwierdzimy później',
        'noGo': 'Niestety nie możemy',
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
        'end': 'On se voit le 3 septembre à Murcie. A bien tot!',
        'download': 'Télécharger les détails du mariage',
        'gift_intro': 'Et si vous voulez offrir un cadeau',
        'gift_title': 'Avec motif du virement',
        'thanks_advance': 'Merci d\'avance',
        'ryanair_flights_alicante': 'Vols vers Alacante (Ryanair)',
        'ryanair_flights_murcia': 'Vols vers Murcie (Ryanair)',
        'at': 'à',
        'copy': 'Copier',
        'confirm': 'Veuillez confirmer votre présence',
        'yesGo': 'Oui, on irons',
        'iluk': 'Nous confirmerons plus tard',
        'noGo': 'Nous ne pourrons pas aller',
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'pl', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
