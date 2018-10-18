import React from 'react';
import Helmet from 'react-helmet';

import Topbar from './Topbar.react';

import BLURB_PHOTO from './blog/tam/L9997552.jpg';
import COVER_PHOTO from './blog/tam/L9997560.jpg';
import PHOTO_1 from './blog/tam/L9997541.jpg';
import PHOTO_2 from './blog/tam/L9997509.jpg';
import PHOTO_3 from './blog/tam/108891AAle072307-R1-032.jpg';
import PHOTO_4 from './blog/tam/108891AAle072307-R1-005.jpg';
import PHOTO_5 from './blog/tam/108891AAle072307-R1-002.jpg';
import PHOTO_6 from './blog/tam/L9997645.jpg';
import PHOTO_7 from './blog/tam/108891AAle072312-R1-014.jpg';
import PHOTO_8 from './blog/tam/108891AAle072312-R1-013.jpg';

const TamPost = () => (
  <React.Fragment>
    <Helmet title="mttam | blog · Kevin Lee">
      <meta property="og:title" content="mttam | blog · Kevin Lee" />
      <meta property="og:description" content="@mngyuan Kevin Lee" />
      <meta property="og:url" content="http://mngyuan.com/blog/mttam" />
      <meta property="og:image" content={`http://mngyuan.com/${COVER_PHOTO}`} />
      <meta property="og:image:width" content="279" />
      <meta property="og:image:height" content="279" />
    </Helmet>
    <div className="blogEntry">
      <div className="blogEntryInner">
        <div
          className="photo"
          style={{
            marginLeft: '27vw',
          }}
        >
          <img src={COVER_PHOTO} />
          <div
            className="columnsText"
            style={{
              left: '30%',
              top: '40%',
            }}
          >
            <p>
              waiting on the sun to set.
              <br />
              <br />
              it's not my first time here, and i'm not sure there'll be a last.
              i've had multiple people tell me, with some surprise in their
              voices, that i go here quite often. That it seems like i'm always
              here.
              <br />
              <br />
              the horizon cracks and gives way to golden, rolling hills, each
              raising and lowering our car alternately, like lazy waves,
              churning slowly.
              <br />
              <br />
              can you blame me?
              <br />
              <br />
              <br />
              <br />
              sometimes i think about leaving the bay
            </p>
          </div>
          <div
            className="columnsText"
            style={{
              left: '60%',
              top: '40%',
            }}
          >
            <p>and sometimes i think how wrong i'd be to do so.</p>
          </div>
        </div>
        <div className="photo">
          <img src={PHOTO_1} />
          <div className="flavorText" style={{left: '70%', top: '25%'}}>
            <h1>the wind eats at me. </h1>
          </div>
          <div
            className="columnsText"
            style={{
              left: '110%',
              top: '40%',
            }}
          >
            <p>
              between breaths i wonder about nothing. the shutter on my camera
              fails and comes back to life in the same moment.
            </p>
          </div>
        </div>
        <div className="photo inset">
          <img src={PHOTO_2} />
        </div>
        <div className="photo inset">
          <img src={PHOTO_3} />
          <div
            className="columnsText"
            style={{
              left: '74%',
              top: '40%',
              backgroundColor: 'black',
              boxSizing: 'border-box',
              padding: 12,
            }}
          >
            <p>
              i think if i'd've left this city sooner, i'd've grown up faster.
              <br /> <br />
              i'd've had to left some people here, leave some things behind.
              i'd've had to plant new seeds, and hope they'd grow, and i'd have
              to check in, and call, just to keep loved ones close, and watch
              less loved ones go,
              <br /> <br />
              the time between calls getting longer, the messages left read
              getting older.
            </p>
          </div>
        </div>
        <div className="photo">
          <img src={PHOTO_4} />
        </div>
        <div className="photo" style={{marginLeft: 400}}>
          <img src={PHOTO_5} />
          <div
            className="columnsText"
            style={{
              left: '80%',
              top: '40%',
              backgroundColor: 'black',
              boxSizing: 'border-box',
              padding: 12,
            }}
          >
            <p>
              instead, i'm watching them rot up close, from neglect, rather than
              space.
            </p>
          </div>
        </div>
        <div className="photo" style={{marginLeft: 600}}>
          <img src={PHOTO_6} />
          <div
            className="columnsText"
            style={{
              left: '-20%',
              top: '40%',
            }}
          >
            <p>
              you live two blocks from here. it's the fourth time i've been by
              and not said hello. it's just, i'm busy, and you're busy, even
              though i think we both have time, just that just because i'd do
              anything with you,
              <br /> <br />
              doesn't mean we will.
            </p>
          </div>
        </div>
        <div className="photo">
          <img src={PHOTO_7} />
        </div>
        <div className="photo">
          <img src={PHOTO_8} />
          <div className="flavorText" style={{left: '70%', top: '25%'}}>
            <h1>the sun flickers</h1>
          </div>
          <div
            className="columnsText"
            style={{
              left: '80%',
              top: '60%',
            }}
          >
            <p>
              from beneath the horizon.
              <br />
              <br />
              if i'd've left this city sooner, i think i'd've grown up faster,
              watching these things change, swirling around me, just new, new,
              new, fighting for meaning, rootless changes dying to be made sense
              of.
              <br />
              <br />
              instead, i'm watching myself change up close, placed somewhere
              between these unmoving hills,
              <br /> <br />
              feeling myself grow into them as the people come and go.
            </p>
          </div>
        </div>
        <div className="blogBlurb">
          <h1>Mt Tamalpais</h1>
          <h4>10.08.18</h4>
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
    </div>
  </React.Fragment>
);

const BlogPage = (props: {
  match: {
    params: {
      post: string,
    },
  },
}) =>
  props.match.params.post === 'mttam' ? (
    <React.Fragment>
      <TamPost />
      <Topbar />
    </React.Fragment>
  ) : null;

export default BlogPage;
