import React from 'react';
import {Link} from 'react-router-dom';

import Topbar from './Topbar.react.js';
import {SETS} from './Photos.react.js';
import {STORIES} from './PrintPage.react.js';

const Sitemap = () => (
  <React.Fragment>
    <div className="page">
      <div className="photowrapper">
        <div className="photowrapperInner">
          <ul>
            {Object.keys(SETS).map(setName => (
              <li>
                <Link to={{pathname: `/photos/${setName}`}}>{setName}</Link>
              </li>
            ))}
            {Object.keys(STORIES).map(setName => (
              <li>
                <Link to={{pathname: `/print/${setName}`}}>{setName}</Link>
              </li>
            ))}
            <li>
              <Link to={{pathname: '/video'}}>video</Link>
            </li>
            <li>
              <Link to={{pathname: '/blog/mttam'}}>blog</Link>
            </li>
            <li>
              <Link to={{pathname: '/about'}}>about</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Topbar />
  </React.Fragment>
);

export default Sitemap;
