import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import './i18n';
import App from './App';

const baseName = '/';

ReactDOM.render(
  <React.StrictMode>
      <Router basename={baseName}>
        <Routes>
        <Route exact path={baseName} element={<App />} />
        <Route exact path={`${baseName}/:lang`} element={<App />} />
        </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
