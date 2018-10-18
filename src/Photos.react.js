import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';

import {importAll} from 'mngyuan-lib';
import Topbar from './Topbar.react';

export const SETS = {
  contacts: {
    photos: importAll(
      require.context('./photos/contacts', false, /\.(png|jpe?g|svg)$/),
    ).reverse(),
    preamble: '',
  },
  'kchaooo-for-oliviashihdesign': {
    photos: importAll(
      require.context(
        './photos/kchaooo-for-oliviashihdesign',
        false,
        /\.(png|jpe?g|svg)$/,
      ),
    ),
    preamble: (
      <div className="preamble" key="preamble">
        Fuji GA645i<br />
        Fujicolor Pro 400H<br />
        <br />
        with Kelley<br />
        05.27.18<br />
      </div>
    ),
  },
  'thepigs-for-mcmintea': {
    photos: importAll(
      require.context(
        './photos/thepigs-for-mcmintea',
        false,
        /\.(png|jpe?g|svg)$/,
      ),
    ),
    preamble: (
      <div className="preamble" key="preamble">
        Canon 5DMk4<br />
        24-70L<br />
        <br />
        with @senaponin, @thepigs, for @mcmintea<br />
        07.28.18<br />,
      </div>
    ),
  },
  'lumohn-in-nyc': {
    photos: importAll(
      require.context('./photos/lumohn-in-nyc', false, /\.(png|jpe?g|svg)$/),
    ),
  },
  travel: {
    photos: importAll(
      require.context('./photos/travel', false, /\.(png|jpe?g|svg)$/),
    ),
  },
  'nyc-and-antoinette': {
    photos: importAll(
      require.context(
        './photos/nyc-and-antoinette',
        false,
        /\.(png|jpe?g|svg)$/,
      ),
    ),
    preamble: (
      <div className="preamble" key="preamble">
        Leica CL buddies<br />
        Minolta M-Rokkor 40mm f/2<br />
        <br />
        raw scans from Sammy's <br />
        10.13.18<br />
      </div>
    ),
    coverPhotoIndex: 33,
  },
};

export class Gallery extends React.Component {
  _photowrapperInner;

  _onWheel = e => {
    if (navigator.appVersion.indexOf('Macintosh') === -1) {
      e.preventDefault();
      const node = ReactDOM.findDOMNode(this._photowrapperInner);
      node.scrollLeft += e.deltaY;
    }
  };

  render() {
    return (
      <div className="page">
        <div
          className={`photowrapper ${this.props.vertical ? 'vertical' : ''}`}
        >
          <div
            className="photowrapperInner"
            ref={ref => (this._photowrapperInner = ref)}
            onWheel={this._onWheel}
          >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

const Photos = props => {
  const {set} = props.match.params;
  console.log(set);
  const photoElems = SETS[set].photos.map(src => <img key={src} src={src} />);
  const elems = ([SETS[set].preamble] || []).concat(photoElems);
  const humanFriendlySetName = set.replace(/-/g, ' ');
  return (
    <React.Fragment>
      <Helmet title={`${humanFriendlySetName} | photo · Kevin Lee`}>
        <meta property="og:title" content={humanFriendlySetName} />
        <meta
          property="og:image"
          content={SETS[set].photos[SETS[set].coverPhotoIndex || 0]}
        />
      </Helmet>
      <Gallery>{elems}</Gallery>
      <Topbar />
    </React.Fragment>
  );
};

export default Photos;
