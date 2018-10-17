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
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="container">
      <Helmet title="Kevin Lee">
        <meta property="og:image:width" content="279" />
        <meta property="og:image:height" content="279" />
        <meta property="og:description" content="@mngyuan" />
        <meta property="og:url" content="http://mngyuan.com" />
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
      <Route component={Topbar} />
    </div>
  </BrowserRouter>
);

export default App;
