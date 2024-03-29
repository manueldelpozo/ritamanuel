import { useEffect, useMemo, useState, useRef } from 'react';
import { useParams, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import qs from 'qs';
import styled from 'styled-components';
import Layout from './components/Layout';
import ButtonScroll from './components/ButtonScroll'
import PageIntro from './pages/Page0Intro';
import PageInvitation from './pages/Page1bInvitation';
import PageJourney from './pages/Page2Journey';
import PageChurch from './pages/Page3Church';
import PageBanquet from './pages/Page4Banquet';
import PageBusService from './pages/Page5BusService';
import PageBusConfirmation from './pages/Page6BusConfirmation';
import PageTravelInterest from './pages/Page7Transport';
import PageHotel from './pages/Page8Hotel';
import Page9Tourism from './pages/Page9Tourism';
import PageGift from './pages/Page10Gift';
import PageConfirmation from './pages/Page12Confirmation';
import PageEnd from './pages/Page11End';
import PageFlightAdvice from './pages/PageFlightAdvice';
import PageWrongApp from './pages/PageWrongApp';
import hotelNights from './consts/hotelNights.json';
import guestsFromPoznan from './consts/guestsFromPoznan.json';
import confirmedGuests from './consts/confirmedGuests.json';
import './App.css';

const Footer = styled.footer`
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const getScrollPos = (pageNumber) => ({
  top: document.documentElement.clientHeight * (pageNumber - 1),
  bottom: document.documentElement.clientHeight * pageNumber,
});

const App = ({ useChrome, info }) => {
  const { search } = useLocation();
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const scrollRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [isBottom, setIsBottom] = useState(false);
  const [isInfoFlights, setIsInfoFlights] = useState(info);

  const guest = useMemo(() => {
    if (search.startsWith('?')) {
      return qs.parse(search.split('?')[1]).guest;
    }
    return undefined;
  }, [search]);

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [i18n, lang]);

  useEffect(() => {
    const onScroll = e => {
      const { documentElement } = e.target;
      setScrollTop(documentElement.scrollTop);
      setScrolling(documentElement.scrollTop > scrollTop);
      setIsBottom(documentElement.scrollHeight - documentElement.scrollTop === documentElement.clientHeight)
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  const goToInfoFlights = () => {
    setIsInfoFlights(true);
    scrollToTop();
  }
  const goToInvitation = () => {
    setIsInfoFlights(false);
    scrollToTop();
  }

  if (!useChrome) {
    return (
        <div className="App">
          <Layout ref={scrollRef}>
            <PageWrongApp url={window.location.href} />
          </Layout>
        </div>
    )
  }

  if (isInfoFlights) {
    return (
        <div className="App">
          <Layout ref={scrollRef}>
            <PageFlightAdvice goToInvitation={goToInvitation} isInfoFlightsUrl={info} />
          </Layout>
        </div>
    )
  }

  return (
    <div className="App">
      <Layout ref={scrollRef}>
        <PageIntro scroll={getScrollPos(0)} guest={guest} lang={lang} />
        <PageInvitation scroll={getScrollPos(1)} isConfirmed={!!confirmedGuests[guest]} />
        <PageJourney scroll={getScrollPos(2)} isConfirmed={!!confirmedGuests[guest]} />
        <PageChurch scroll={getScrollPos(3)} />
        <PageBanquet scroll={getScrollPos(4)} />
        <PageBusService scroll={getScrollPos(5)} />
        {confirmedGuests[guest] && (
            <PageBusConfirmation scroll={getScrollPos(6)} guest={guest} lang={lang} />
        )}
        {hotelNights[guest] && (
            <>
              <PageTravelInterest scroll={getScrollPos(confirmedGuests[guest] ? 7 : 6)} lang={lang} fromPoznan={guestsFromPoznan[guest]} goToInfoFlights={goToInfoFlights} />
              <PageHotel scroll={getScrollPos(confirmedGuests[guest] ? 8 : 7)} lang={lang} nights={hotelNights[guest]} />
              <Page9Tourism scroll={getScrollPos(confirmedGuests[guest] ? 9 : 8)} lang={lang.replace('_pl', '')} />
            </>
        )}
        <PageGift scroll={getScrollPos(confirmedGuests[guest] ? 10 : (hotelNights[guest] ? 9 : 6))} lang={lang} guest={guest} />
        <PageEnd guest={guest} isConfirmed={!!confirmedGuests[guest]} />
        {!confirmedGuests[guest] && <PageConfirmation lang={lang} guest={guest} />}
      </Layout>
      <Footer>
        {!scrolling && !isBottom && <ButtonScroll scrollTop={scrollTop} />}
      </Footer>
    </div>
  );
}

export default App;
