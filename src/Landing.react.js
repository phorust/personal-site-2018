import React from 'react';

const Landing = () => (
  <div className="page black">
    <video autoPlay loop onContextMenu={e => e.preventDefault()}>
      <source
        src="https://s3-us-west-2.amazonaws.com/mngyuan-com/00136_4.mp4"
        type="video/mp4"
      />
    </video>
  </div>
);

export default Landing;
