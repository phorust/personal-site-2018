import React from 'react';
import {Link} from 'react-router-dom';

import {CONTACT_SETS} from './Contacts.react.js';
import Topbar from './Topbar.react.js';
import {SETS} from './Photos.react.js';
import {STORIES} from './PrintPage.react.js';

const Sitemap = () => (
  <React.Fragment>
    <div className="page">
      <div className="photowrapper">
        <div className="photowrapperInner">
          <ul>
            photo sets
            {Object.keys(SETS).map(setName => (
              <li>
                <Link to={{pathname: `/photos/${setName}`}}>{setName}</Link>
              </li>
            ))}
            <br />
            print sets
            {Object.keys(STORIES).map(setName => (
              <li>
                <Link to={{pathname: `/print/${setName}`}}>{setName}</Link>
              </li>
            ))}
            <br />
            contact sheet sets
            {Object.keys(CONTACT_SETS)
              .filter(setName => CONTACT_SETS[setName].info)
              .map(setName => (
                <li>
                  <Link to={{pathname: `/photos/contacts/${setName}`}}>
                    {setName}
                  </Link>
                </li>
              ))}
            <br />
            <li>
              <Link to={{pathname: '/video'}}>video</Link>
            </li>
            <br />
            <li>
              <Link to={{pathname: '/blog/mttam'}}>blog</Link>
            </li>
            <br />
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
