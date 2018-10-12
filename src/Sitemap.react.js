import React from 'react';
import {Link} from 'react-router-dom';

const Sitemap = () => (
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
);

export default Sitemap;
