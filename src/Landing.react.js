import React from 'react';
import JAPAN_VIDEO from './static/00136_4.mp4';

const Landing = () => (
  <div className="page black">
    <video autoPlay loop>
      <source src={JAPAN_VIDEO} type="video/mp4" />
    </video>
  </div>
);

export default Landing;
