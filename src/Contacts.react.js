import * as React from 'react';
import Helmet from 'react-helmet';

import {importAll} from 'mngyuan-lib';
import Topbar from './Topbar.react';
import {SETS} from './Photos.react';

export const CONTACT_SETS = {
  ...SETS,
  'nyc-cinestill': {
    ...SETS['nyc-cinestill'],
    thumbs: importAll(
      require.context(
        './photos/nyc-cinestill/thumbs',
        false,
        /\.(png|jpe?g|svg)$/,
      ),
    ),
    info: {
      setName: '@lumohn at timesquare',
      filmstock: 'CINESTILL800',
      rollNumber: '29 & 30/',
      rollTotal: 'of an ongoing series',
      flavorText: 'art direction by @antoinette.chow',
      location: '纽约',
    },
  },
  'to-matt': {
    ...SETS['to-matt'],
    thumbs: importAll(
      require.context('./photos/to-matt/thumbs', false, /\.(png|jpe?g|svg)$/),
    ),
    info: {
      setName: 'best of',
      filmstock: 'FILM & DIGITAL',
      rollNumber: '00',
      rollTotal: 'of an ongoing series',
      flavorText: 'for matt',
      location: '奥克兰',
    },
  },
  chloe: {
    ...SETS['chloe'],
    thumbs: importAll(
      require.context('./photos/chloe/thumbs', false, /\.(png|jpe?g|svg)$/),
    ),
    info: {
      setName: '@ch1oup',
      filmstock: 'FUJI X',
      rollNumber: '00',
      rollTotal: 'of an ongoing series',
      flavorText: 'bushwick',
      location: '布鲁克林',
    },
  },
};

class ContactSheet extends React.PureComponent<
  {
    photos: Array<string>,
    children: React.Node,
    info?: {
      setName: string,
      filmstock: string,
      rollNumber: string,
      flavorText: string,
      location: string,
    },
  },
  {currentPhotoIndex: number},
> {
  state = {
    currentPhotoIndex: 0,
  };

  render() {
    return (
      <div className="contactSheet">
        <div className="currentPhotoModal">
          <img
            src={this.props.photos[this.state.currentPhotoIndex]}
            width="100%"
          />
        </div>
        <div className="contactSheetHeader">
          {this.props.info ? (
            <React.Fragment>
              <div className="headerInfo">
                {this.props.info.setName}
                <br />/
              </div>
              <div className="headerInfo secondary">
                {this.props.info.filmstock}
              </div>
              <div className="headerInfo">
                {this.props.info.rollNumber}
                <br />
                <span className="small">{this.props.info.rollTotal}</span>
              </div>
              <div className="headerInfo secondary">
                {this.props.info.flavorText}
              </div>
              <div className="headerInfo">{this.props.info.location}</div>
            </React.Fragment>
          ) : null}
        </div>
        <div className="frames">
          {this.props.thumbs.map((src, i) => (
            <div
              className="frame"
              onClick={() => this.setState({currentPhotoIndex: i})}
            >
              <img src={src} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const Contacts = (props: {match: {params: {set: string}}}) => {
  const {set} = props.match.params;
  const humanFriendlySetName = set.replace(/-/g, ' ');
  return (
    <React.Fragment>
      <Helmet title={`${humanFriendlySetName} | contact sheet · Kevin Lee`}>
        <meta property="og:title" content={humanFriendlySetName} />
        <meta
          property="og:image"
          content={
            CONTACT_SETS[set].photos[CONTACT_SETS[set].coverPhotoIndex || 0]
          }
        />
      </Helmet>
      <div className="page black film">
        <ContactSheet
          photos={CONTACT_SETS[set].photos}
          thumbs={CONTACT_SETS[set].thumbs}
          info={CONTACT_SETS[set].info}
        />
      </div>
      <Topbar black />
    </React.Fragment>
  );
};

export default Contacts;
