import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import './i18n';
import App from './App';

const baseName = '/';
const root = document.getElementById('root');
const useChrome = root.getAttribute('data-use-chrome');

ReactDOM.render(
    <React.StrictMode>
        <Router basename={baseName}>
            <Routes>
                <Route exact path={baseName} element={<App useChrome={useChrome} />} />
                <Route exact path={`${baseName}/:lang`} element={<App useChrome={useChrome} />} />
                <Route exact path={`${baseName}/info`} element={<App useChrome={useChrome} info />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    root
);
