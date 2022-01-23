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
import PageTravelInterest from './pages/Page7TravelInterest';
// import PageGift from './pages/Page8Gift';
import PageConfirmation from './pages/Page10Confirmation';
import PageEnd from './pages/Page9End';
import './App.css';

const Footer = styled.footer`
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  z-index: 1000;
`;

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

  const hasAccomodation = useMemo(() => (lang && ['en', 'pl', 'fr'].includes(lang)), [lang]);

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
        <PageInvitation scroll={{ top: 0, bottom: document.documentElement.clientHeight }} />
        <PageJourney scroll={{ top: document.documentElement.clientHeight, bottom: document.documentElement.clientHeight * 2 }} />
        <PageChurch scroll={{ top: document.documentElement.clientHeight * 2, bottom: document.documentElement.clientHeight * 3 }} />
        <PageBanquet scroll={{ top: document.documentElement.clientHeight * 3, bottom: document.documentElement.clientHeight * 4 }} />
        {hasAccomodation && <PageTravelInterest />}
        {/*<PageGift />*/}
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
