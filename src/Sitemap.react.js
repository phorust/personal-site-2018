import React from 'react';
import {Link} from 'react-router-dom';

import Topbar from './Topbar.react.js';

const Sitemap = () => (
  <React.Fragment>
    <div className="page">
      <div className="photowrapper">
        <div className="photowrapperInner">
          <ul>
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
