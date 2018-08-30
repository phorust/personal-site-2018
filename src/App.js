import {createBrowserHistory} from 'history';
import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import Photos from './Photos.react';
import Landing from './Landing.react';
import Story from './Story.react';
import About from './About.react';
import Topbar from './Topbar.react';
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

const routes = [
  {
    path: '/',
    exact: true,
    main: Landing,
  },
  {
    path: '/photos/:set',
    main: Photos,
  },
  {
    path: '/mix',
    main: Mix,
  },
  {
    path: '/stories/:set',
    main: Story,
  },
  {
    path: '/about',
    main: About,
  },
];

const App = ({location}) => (
  // const unused = (
  // <div>
  // <div className="kevin">Kevin</div>
  // <div className="mngyuan">梦远</div>
  // <div className="lee">Lee</div>
  // </div>
  // );
  <div className="container">
    {routes.map(route => (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        component={route.main}
      />
    ))}
    <Topbar black={location.pathname === '/'} />
  </div>
);

export default withRouter(App);
