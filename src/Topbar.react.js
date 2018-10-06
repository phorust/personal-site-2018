import React from 'react';
import MediaQuery from 'react-responsive';
import {NavLink, Link} from 'react-router-dom';

const Menu = props => (
  <Link to={{pathname: props.menuHref}}>
    {props.children}
    <div className="navMenu">{props.menuContent}</div>
  </Link>
);

const TopbarDesktop = props => (
  <div className={`topbar ${props.black ? 'black' : ''}`}>
    <div className="nameplate">
      <Link to={{pathname: '/'}}>mngyuan 梦远</Link>
    </div>
    <nav>
      <Menu menuHref="/photos/アイスクリーム" menuContent={<React.Fragment />}>
        photo
      </Menu>
      {' · '}
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
        menuHref="/print/oakland just yesterday"
      >
        print
      </Menu>
      {' · '}
      <Link to={{pathname: '/video'}}>video</Link>
      {' · '}
      <Link to={{pathname: '/blog'}}>blog</Link>
      {' · '}
      <Link to={{pathname: '/about'}}>about</Link>
    </nav>
  </div>
);

const TopbarMobile = props => (
  <div className={`topbar mobile ${props.black ? 'black' : ''}`}>
    <div className="nameplate">
      <Link to={{pathname: '/'}}>mngyuan 梦远</Link>
    </div>
    <nav>
      <div>
        <span className="section">photo</span>
        <br />
      </div>
      <div>
        <span className="section">print</span>
        <br />
        <NavLink to={{pathname: `/print/milkfat`}}>milkfat</NavLink>
        <br />
        <NavLink to={{pathname: `/print/oakland just yesterday`}}>
          oakland, just yesterday
        </NavLink>
        <br />
        <NavLink to={{pathname: `/print/ghosts`}}>ghosts</NavLink>
        <br />
      </div>
      <div>
        <span className="section">
          <NavLink to={{pathname: `/video`}}>video</NavLink>
        </span>
        <br />
      </div>
      <div>
        <span className="section">
          <NavLink to={{pathname: `/blog`}}>blog</NavLink>
        </span>
      </div>
    </nav>
  </div>
);

const Topbar = props => (
  <React.Fragment>
    <MediaQuery query="(max-width: 768px)">
      <TopbarMobile {...props} />
    </MediaQuery>
    <MediaQuery query="(min-width: 768px)">
      <TopbarDesktop {...props} />
    </MediaQuery>
  </React.Fragment>
);

export default Topbar;
