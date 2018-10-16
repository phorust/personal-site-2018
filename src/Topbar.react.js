import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Menu = props => (
  <div className="section">
    <Link to={{pathname: props.menuHref}} className="sectionLink">
      {props.children}
    </Link>
    <div className="navMenu">{props.menuContent}</div>
  </div>
);

const Topbar = ({location}) => (
  <div
    className={`topbar ${
      location.pathname === '/' || location.pathname === '/video' ? 'black' : ''
    }`}
  >
    <div className="nameplate">
      <Link to={{pathname: '/'}}>mngyuan 梦远</Link>
    </div>
    <nav>
      <Menu
        menuHref="/photos/thepigs for mcmintea"
        menuContent={
          <React.Fragment>
            <NavLink to={{pathname: `/photos/thepigs for mcmintea`}}>
              @thepigs for @mcmintea
            </NavLink>
            <br />
            <NavLink to={{pathname: `/photos/kchaooo for oliviashihdesign`}}>
              @kchaooo for @oliviashihdesign
            </NavLink>
            <br />
            <NavLink to={{pathname: `/photos/lumohn in nyc`}}>
              @lumohn in nyc
            </NavLink>
            <br />
            <NavLink to={{pathname: `/photos/travel`}}>travel</NavLink>
            <br />
          </React.Fragment>
        }
      >
        photo
      </Menu>
      <span className="divider">{' · '}</span>
      <Menu
        menuContent={
          <React.Fragment>
            <NavLink to={{pathname: `/print/milkfat`}}>milkfat</NavLink>
            <br />
            <NavLink to={{pathname: `/print/oakland just yesterday`}}>
              oakland, just yesterday
            </NavLink>
            <br />
            <NavLink to={{pathname: `/print/ghosts`}}>ghosts</NavLink>
            <br />
          </React.Fragment>
        }
        menuHref="/print/milkfat"
      >
        print
      </Menu>
      <span className="divider">{' · '}</span>
      <div className="section">
        <Link to={{pathname: '/video'}} className="sectionLink">
          video
        </Link>
      </div>
      <span className="divider">{' · '}</span>
      <div className="section">
        <Link to={{pathname: '/blog/mttam'}} className="sectionLink">
          blog
        </Link>
      </div>
      <span className="divider">{' · '}</span>
      <div className="section desktopOnly">
        <Link to={{pathname: '/about'}} className="sectionLink">
          about
        </Link>
      </div>
    </nav>
  </div>
);

export default Topbar;
