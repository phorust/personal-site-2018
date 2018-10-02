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
      <Menu
        menuHref="/photos/アイスクリーム"
        menuContent={
          <div>
            <NavLink to={{pathname: `/photos/アイスクリーム`}}>
              アイスクリーム
            </NavLink>
            <br />
            <NavLink to={{pathname: `/photos/before`}}>before </NavLink>
            <br />
            <NavLink to={{pathname: `/photos/family`}}>family </NavLink>
            <br />
            <NavLink to={{pathname: `/photos/but you`}}>but you </NavLink>
          </div>
        }
      >
        people
      </Menu>
      {' · '}
      <Menu
        menuHref="/photos/asian"
        menuContent={
          <div>
            <NavLink to={{pathname: `/photos/asian`}}>asia</NavLink>
            <br />
            <NavLink to={{pathname: `/photos/americana`}}>americana</NavLink>
            <br />
            <NavLink to={{pathname: `/photos/the drive home`}}>
              the drive home
            </NavLink>
            <br />
            <NavLink to={{pathname: `/photos/iceland`}}>iceland</NavLink>
          </div>
        }
      >
        places
      </Menu>
      {' · '}
      <Menu
        menuContent={
          <div>
            <NavLink to={{pathname: `/print/milkfat`}}>milkfat</NavLink>
            <br />
            <NavLink to={{pathname: `/print/oakland just yesterday`}}>
              oakland, just yesterday
            </NavLink>
            <br />
            <NavLink to={{pathname: `/print/ghosts`}}>ghosts</NavLink>
            <br />
          </div>
        }
        menuHref="/print/oakland just yesterday"
      >
        print
      </Menu>
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
        <span className="section">people</span>
        <br />
        <NavLink to={{pathname: `/photos/アイスクリーム`}}>
          アイスクリーム
        </NavLink>
        <br />
        <NavLink to={{pathname: `/photos/before`}}>before </NavLink>
        <br />
        <NavLink to={{pathname: `/photos/family`}}>family </NavLink>
        <br />
        <NavLink to={{pathname: `/photos/but you`}}>but you </NavLink>
      </div>
      <div>
        <span className="section">places</span>
        <br />
        <NavLink to={{pathname: `/photos/asian`}}>asia</NavLink>
        <br />
        <NavLink to={{pathname: `/photos/americana`}}>americana</NavLink>
        <br />
        <NavLink to={{pathname: `/photos/the drive home`}}>
          the drive home
        </NavLink>
        <br />
        <NavLink to={{pathname: `/photos/iceland`}}>iceland</NavLink>
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
