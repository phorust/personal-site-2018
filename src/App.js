import {createBrowserHistory} from 'history';
import React from 'react';
import Helmet from 'react-helmet';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Photos from './Photos.react';
import Landing from './Landing.react';
import PrintPage from './PrintPage.react';
import About from './About.react';
import Topbar from './Topbar.react';
import Blog from './Blog.react';
import Video from './Video.react';
import Sitemap from './Sitemap.react';
import './App.css';

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

const Mix = () => (
  <div className="page">
    <div className="photowrapper">
      <div className="photowrapperInner">todo</div>
    </div>
  </div>
);

const App = () => (
  // const unused = (
  // <div>
  // <div className="kevin">Kevin</div>
  // <div className="mngyuan">梦远</div>
  // <div className="lee">Lee</div>
  // </div>
  // );
  <BrowserRouter basename={process.env.PUBLIC_URL} history={history}>
    <div className="container">
      <Helmet title="Kevin Lee">
        <meta property="og:image:width" content="279" />
        <meta property="og:image:height" content="279" />
        <meta property="og:description" content="@mngyuan" />
        <meta
          property="og:image"
          content="http://mngyuan.com/og/og-image.jpg"
        />
        <meta property="og:title" content="Kevin Lee" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/photos/:set" component={Photos} />
        <Route path="/video" component={Video} />
        <Route path="/mix" component={Mix} />
        <Route path="/print/:set" component={PrintPage} />
        <Route path="/about" component={About} />
        <Route path="/blog/:post" component={Blog} />
        <Route path="/sitemap" component={Sitemap} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
