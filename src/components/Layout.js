import { forwardRef } from 'react';
import styled from 'styled-components';
import cornerUrl from '../assets/corner.svg';

const CornerImage = styled.div`
  background-image: url(${cornerUrl});
  background-position: right bottom;
  background-size: 40%;
  background-repeat: no-repeat;
`;

const MainContent = styled.div`
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  // scroll-padding-top: 10vh;
  // overflow-y: scroll;
  & > * {
    scroll-snap-align: start;
  }
`;

const 
Layout = forwardRef(({ children }, ref) => {
  return (
    <main
      style={{
        margin: `0 auto`,
        maxWidth: '100vw',
        backgroundColor: 'transparent',
        textAlign: 'center',
      }}
    >
      <MainContent ref={ref}>{children}</MainContent>
      <div
        className="layout__bg"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          position: 'fixed',
          zIndex: -1,
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <CornerImage
          className="layout__bg-corner --left-up"
          style={{
            transform: 'scaleX(-1) scaleY(-1)',
          }}
        />
        <CornerImage
          className="layout__bg-corner --right-up"
          style={{
            transform: 'scaleX(1) scaleY(-1)',
          }}
        />
        <CornerImage
          className="layout__bg-corner --left-down"
          style={{
            transform: 'scaleX(-1) scaleY(1)',
          }}
        />
        <CornerImage
          className="layout__bg-corner --right-down"
          style={{
            transform: 'scaleX(1) scaleY(1)',
          }}
        />
      </div>
    </main>
  )
});

export default Layout
