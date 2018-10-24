import * as React from 'react';
import Helmet from 'react-helmet';

import Topbar from './Topbar.react';
import {SETS} from './Photos.react';

const CONTACT_SETS = {
  ...SETS,
  'nyc-cinestill': {
    ...SETS['nyc-cinestill'],
    info: {
      setName: '@lumohn at timesquare',
      filmstock: 'CINESTILL800',
      rollNumber: '29 & 30/',
      rollTotal: 'of an ongoing series',
      flavorText: 'art direction by @antoinette.chow',
      location: '纽约',
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
  {currentPhoto: ?string},
> {
  state = {
    currentPhoto: this.props.photos[0],
  };

  render() {
    const currentPhotoModal = this.state.currentPhoto ? (
      <div className="currentPhotoModal">
        <img src={this.state.currentPhoto} width="100%" />
      </div>
    ) : null;

    return (
      <div className="contactSheet">
        {currentPhotoModal}
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
                <span class="small">{this.props.info.rollTotal}</span>
              </div>
              <div className="headerInfo secondary">
                {this.props.info.flavorText}
              </div>
              <div className="headerInfo">{this.props.info.location}</div>
            </React.Fragment>
          ) : null}
        </div>
        <div className="frames">
          {this.props.photos.map(src => (
            <div
              className="frame"
              onClick={() => this.setState({currentPhoto: src})}
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
      <div className="page black">
        <ContactSheet
          photos={CONTACT_SETS[set].photos}
          info={CONTACT_SETS[set].info}
        />
      </div>
      <Topbar black />
    </React.Fragment>
  );
};

export default Contacts;
