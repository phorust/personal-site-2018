import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import Photos from './Photos.react';
import Landing from './Landing.react';
import PrintPage from './PrintPage.react';
import About from './About.react';
import Topbar from './Topbar.react';
import Blog from './Blog.react';
import Video from './Video.react';
import './App.css';

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
    path: '/video',
    main: Video,
  },
  {
    path: '/mix',
    main: Mix,
  },
  {
    path: '/print/:set',
    main: PrintPage,
  },
  {
    path: '/about',
    main: About,
  },
  {
    path: '/blog/:post',
    main: Blog,
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
    <Topbar
      black={location.pathname === '/' || location.pathname === '/video'}
    />
  </div>
);

export default withRouter(App);
