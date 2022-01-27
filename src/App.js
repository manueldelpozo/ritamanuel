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
import PageTravelInterest from './pages/Page7Transport';
import PageHotel from './pages/Page8Hotel';
import PageGift from './pages/Page8Gift';
import PageConfirmation from './pages/Page10Confirmation';
import PageEnd from './pages/Page9End';
import hotelNights from './consts/hotelNights.json';
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

function App() {
  const { search } = useLocation();
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const scrollRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [isBottom, setIsBottom] = useState(false);

  const guest = useMemo(() => {
    if (search.startsWith('?')) {
      return qs.parse(search.split('?')[1]).guest;
    }
    return undefined;
  }, [search]);

  // const hasAccommodation = useMemo(() => (lang && ['en', 'pl', 'fr'].includes(lang)), [lang]);

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang)
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

  return (
    <div className="App">
      <Layout ref={scrollRef}>
        <PageIntro guest={guest} />
        <PageInvitation scroll={getScrollPos(1)} />
        <PageJourney scroll={getScrollPos(2)} />
        <PageChurch scroll={getScrollPos(3)} />
        <PageBanquet scroll={getScrollPos(4)} />
        <PageBusService scroll={getScrollPos(5)} />
        {hotelNights[guest] && (
            <>
              <PageTravelInterest scroll={getScrollPos(6)} />
              <PageHotel scroll={getScrollPos(7)} lang={lang} nights={hotelNights[guest]} />
            </>
        )}
        <PageGift scroll={getScrollPos(hotelNights[guest] ? 8 : 6)} />
        <PageEnd guest={guest} />
        <PageConfirmation lang={lang} guest={guest} />
      </Layout>
      <Footer>
        {!scrolling && !isBottom && <ButtonScroll scrollTop={scrollTop} />}
      </Footer>
    </div>
  );
}

export default App;