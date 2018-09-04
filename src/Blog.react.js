import React from 'react';
import BLURB_PHOTO from './photos2/ice cream/L9997552.jpg';
import COVER_PHOTO_1 from './photos2/ice cream/L9997517.jpg';
import COVER_PHOTO_2 from './photos2/ice cream/L9997541.jpg';
import COVER_PHOTO_3 from './photos2/ice cream/L9997560.jpg';

const Blog = () => (
  <React.Fragment>
    <div className="blogEntry">
      <div className="coverImages">
        <img className="coverImage" src={COVER_PHOTO_1} />
        <img className="coverImage two" src={COVER_PHOTO_2} />
        <img className="coverImage three" src={COVER_PHOTO_3} />
      </div>
      <div className="blogBlurb">
        <h1>Mt Tamalpais</h1>
        <h4>07.15.17</h4>
        <br />
        <div className="line" />
        <br />
        <p>アイスクリーム above the clouds,</p>
        <br />
        <img src={BLURB_PHOTO} />
        <br />
        <br />
        <p>with friends,</p>
      </div>
    </div>
    <div className="blogEntry">test</div>
  </React.Fragment>
);

export default Blog;
