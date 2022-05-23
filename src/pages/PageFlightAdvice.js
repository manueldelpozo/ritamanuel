import * as React from 'react';
import styled from 'styled-components';
import divider from '../assets/divider2.png';
import ButtonFrame from '../components/ButtonFrame';
import prices from '../consts/flightPrices';

const PriceBlock = styled.div`
  text-align: start;
  font-family: serif;
  display: flex;
  gap: 14px;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Number = styled.div`
  font-weight: bold;
  border-top: 1px solid black;
  text-align: right;
  min-width: 70px;
`;

const PageFlightAdvice = ({ goToInvitation, isInfoFlightsUrl }) => {
    return (
        <div
            id="advice"
            style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                fontFamily: 'serif',
                width: 'min(100%, 750px)',
                margin: '0 auto',
                padding: 25,
                textAlign: 'start',
            }}
        >
            <div>
                <h3>Ceny mogą ulec zmianie-stan na <mark>{prices.date}r.</mark></h3>
                <p>Przygotowaliśmy również dla Was spis lotów. Cena dotyczy 1 osoby.</p>
                <p>Dziecko powyżej 2 lat niestety liczone jest jako normalny bilet. Dzieci do 2 lat - płaci się 25 Euro.</p>
                {/*<p>Przed lotem wymagane jest aktualne  szczepienie lub  dla niezaszczepionych wykonany PCR 48 h przed lotem(koszt PCR około 300 zł).</p>*/}
                <p>RYANAIR:
                    <span> / Taryfa VALUE</span>
                    <span> / Bez ubezpieczenia lotu</span>
                    <span> / Bez zarezerwowanego miejsca</span>
                    <span> / Mały bagaż</span>
                </p>
            </div>
            <div style={{ width: 'min(100%, 350px)' }}>
                <img src={divider} alt="divider" width="100" height="auto" />
                <PriceBlock>
                    <div>
                        <div>Poznań -> Alicante</div>
                        <div>25 srp.</div>
                    </div>
                    <Number><mark>{prices.ryanair_poznan_alicante.aug25} zł</mark></Number>
                </PriceBlock>
                <PriceBlock>
                    <div>
                        <div>Poznań -> Alicante</div>
                        <div>28 srp.</div>
                    </div>
                    <Number>{prices.ryanair_poznan_alicante.aug28} zł</Number>
                </PriceBlock>
                <PriceBlock>
                    <div>
                        <div>Poznań -> Alicante</div>
                        <div>1 wrz.</div>
                    </div>
                    <Number>{prices.ryanair_poznan_alicante.sep1} zł</Number>
                </PriceBlock>
                <img src={divider} alt="divider" width="100" height="auto" />
                <PriceBlock>
                    <div>
                        <div>Wrocław -> Alicante</div>
                        <div>28 srp.</div>
                    </div>
                    <Number>{prices.ryanair_wroclaw_alicante.aug28} zł</Number>
                </PriceBlock>
                <PriceBlock>
                    <div>
                        <div>Wrocław -> Alicante</div>
                        <div>30 srp.</div>
                    </div>
                    <Number><mark>{prices.ryanair_wroclaw_alicante.aug30} zł</mark></Number>
                </PriceBlock>
                <PriceBlock>
                    <div>
                        <div>Wrocław -> Alicante</div>
                        <div>1 wrz.</div>
                    </div>
                    <Number>{prices.ryanair_wroclaw_alicante.sep1} zł</Number>
                </PriceBlock>
                <img src={divider} alt="divider" width="100" height="auto" />
                <PriceBlock>
                    <div>
                        <div>Alicante -> Poznań</div>
                        <div>4 wrz.</div>
                    </div>
                    <Number>{prices.ryanair_alicante_poznan.sep4} zł</Number>
                </PriceBlock>
                <PriceBlock>
                    <div>
                        <div>Alicante -> Poznań</div>
                        <div>8 wrz.</div>
                    </div>
                    <Number>{prices.ryanair_alicante_poznan.sep8} zł</Number>
                </PriceBlock>
                <PriceBlock>
                    <div>
                        <div>Alicante -> Poznań</div>
                        <div>11 wrz.</div>
                    </div>
                    <Number><mark>{prices.ryanair_alicante_poznan.sep11} zł</mark></Number>
                </PriceBlock>
                <img src={divider} alt="divider" width="100" height="auto" />
                <PriceBlock>
                    <div>
                        <div>Alicante -> Wrocław</div>
                        <div>4 wrz.</div>
                    </div>
                    <Number>{prices.ryanair_alicante_wroclaw.sep4} zł</Number>
                </PriceBlock>
                <PriceBlock>
                    <div>
                        <div>Alicante -> Wrocław</div>
                        <div>6 wrz.</div>
                    </div>
                    <Number><mark>{prices.ryanair_alicante_wroclaw.sep6} zł</mark></Number>
                </PriceBlock>
                <PriceBlock>
                    <div>
                        <div>Alicante -> Wrocław</div>
                        <div>8 wrz.</div>
                    </div>
                    <Number>{prices.ryanair_alicante_wroclaw.sep8} zł</Number>
                </PriceBlock>
                <PriceBlock>
                    <div>
                        <div>Alicante -> Wrocław</div>
                        <div>11 wrz.</div>
                    </div>
                    <Number><mark>{prices.ryanair_alicante_wroclaw.sep11} zł</mark></Number>
                </PriceBlock>
                <img src={divider} alt="divider" width="100" height="auto"/>
            </div>
            <div style={{ marginBottom: 16 }}>
                <p>
                    Temperatura w tym okresie to około <mark>35 stopni</mark>, spada w nocy możliwe że najnizej do 20.
                </p>
                <p>
                    Woda w morzu mega cieplutka. Nie trzeba pakować długich ciuchów, jedynie się ubrać  na wyjazd z Polski i powrót (bo w Pl nigdy nie wiadomo czy będzie 30 stopni czy 15).
                </p>
                <p>
                    Tam deszcz pada bardzo rzadko, ale nawet jak pada to dla nas Polaków to nie deszcz tylko kilka kropel z nieba:p
                </p>
                <p>
                    Krem z filmem 50, osłona na głowę obowiązkowo.
                </p>
                <p>
                    Ceny w supermarketach są porównywalne jak w Polsce. Droższe są restauracje i inne usługi.
                </p>
            </div>
            {!isInfoFlightsUrl && (
                <ButtonFrame onClick={goToInvitation}>
                    Wróć do zaproszenia
                </ButtonFrame>
            )}
        </div>
    );
};

export default PageFlightAdvice;
