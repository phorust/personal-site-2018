import React from 'react';
import Helmet from 'react-helmet';

import ME_PHOTO from './photos/me alameda.jpg';
import Topbar from './Topbar.react';

const About = () => (
  <React.Fragment>
    <Helmet title="about · Kevin Lee">
      <meta property="og:image" content={ME_PHOTO} />
    </Helmet>
    <div className="mePhoto">
      <img src={ME_PHOTO} />
    </div>
    <div className="theOne">
      <div className="theOneInner">
        <span>
          Kevin writes code. He takes photos and makes layouts and the
          occasional graphic.
          <br />
          <br />
          He listens to podcasts and adores video essays and indie games, and
          has lots of opinions.
          <br />
          <br />
          He is looking for the next thing he wants to create.
          <br />
          <br />
          <a
            href="http://instagram.com/mngyuan"
            target="_blank"
            rel="noopener noreferrer"
          >
            @mngyuan
          </a>
        </span>
        <br />
        <br />
        <div className="line" />
        <br />
        <a
          href="http://dribbble.com/phorust"
          target="_blank"
          rel="noopener noreferrer"
        >
          dribbble
        </a>
        <a
          href="https://twitter.com/kevinlee324"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
        <a
          href="http://github.com/phorust/"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </div>
    </div>
    <Topbar />
  </React.Fragment>
);

export default About;
