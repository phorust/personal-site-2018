import React from 'react';
import Helmet from 'react-helmet';

const Video = () => (
  <React.Fragment>
    <Helmet title="video · Kevin Lee" />
    <div className="page black">
      <div className="videowrapper">
        <iframe
          src="https://player.vimeo.com/video/292051680"
          width="640"
          height="360"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
        <iframe
          src="https://player.vimeo.com/video/291332507"
          width="863"
          height="360"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
        <iframe
          src="https://player.vimeo.com/video/287009901"
          width="480"
          height="360"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
        <iframe
          src="https://player.vimeo.com/video/277013545"
          width="640"
          height="360"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
        <iframe
          src="https://player.vimeo.com/video/237516760"
          width="640"
          height="360"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
        <iframe
          src="https://player.vimeo.com/video/213032482"
          width="640"
          height="360"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
      </div>
    </div>
  </React.Fragment>
);

export default Video;
