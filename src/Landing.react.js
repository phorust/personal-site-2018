import React from 'react';

import Topbar from './Topbar.react';

const Landing = () => (
  <React.Fragment>
    <div className="page black">
      <video
        playsinline
        autoPlay
        muted
        onContextMenu={e => e.preventDefault()}
        onClick={e => (e.target.muted = false)}
      >
        <source
          src="https://s3-us-west-2.amazonaws.com/mngyuan-com/00136_4.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <Topbar black />
  </React.Fragment>
);

export default Landing;
