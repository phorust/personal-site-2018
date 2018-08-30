import {createBrowserHistory} from 'history';
import {Router} from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

const history = createBrowserHistory();
// prettier-ignore
const initGA = (history) => {
  /* eslint-disable */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  window.ga('create', 'UA-73943517-3', 'auto');
  window.ga('send', 'pageview');
  console.log("tracking page view: load");
  /* eslint-enable */

  history.listen((location) => {
    console.log("tracking page view: " + location.pathname);
    window.ga('send', 'pageview', location.pathname);
  });
};

initGA(history);

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root'),
);
