import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';

import {importAll} from 'mngyuan-lib';
import Topbar from './Topbar.react';

const photos = {
  contacts: importAll(
    require.context('./photos/contacts', false, /\.(png|jpe?g|svg)$/),
  ).reverse(),
  'kchaooo for oliviashihdesign': importAll(
    require.context(
      './photos/kchaooo for oliviashihdesign',
      false,
      /\.(png|jpe?g|svg)$/,
    ),
  ),
  'thepigs for mcmintea': importAll(
    require.context(
      './photos/thepigs for mcmintea',
      false,
      /\.(png|jpe?g|svg)$/,
    ),
  ),
  'lumohn in nyc': importAll(
    require.context('./photos/lumohn in nyc', false, /\.(png|jpe?g|svg)$/),
  ),
  travel: importAll(
    require.context('./photos/travel', false, /\.(png|jpe?g|svg)$/),
  ),
};

const PREAMBLES = {
  'kchaooo for oliviashihdesign': (
    <div className="preamble" key="preamble">
      Fuji GA645i<br />
      Fujicolor Pro 400H<br />
      <br />with Kelley
      <br />05.27.18
    </div>
  ),
  'thepigs for mcmintea': (
    <div className="preamble" key="preamble">
      Canon 5DMk4<br />
      24-70L<br />
      <br />
      <br />with @senaponin, @thepigs, for @mcmintea
      <br />07.28.18
    </div>
  ),
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
  const {match} = props;
  console.log(match.params.set);
  const photoElems = photos[match.params.set].map(src => (
    <img key={src} src={src} />
  ));
  const elems = ([PREAMBLES[match.params.set]] || []).concat(photoElems);
  return (
    <React.Fragment>
      <Helmet title="photo · Kevin Lee" />
      <Gallery>{elems}</Gallery>
      <Topbar />
    </React.Fragment>
  );
};

export default Photos;
