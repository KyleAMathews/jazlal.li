import React from 'react';
import { Link } from 'react-router';
import { rhythm, fontSizeToMS } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'
import Nav from './Nav.jsx'

class Header extends React.Component {

  createNavHeader() {
    const avatar = (
      <Link to={prefixLink('/')}>
        <img
          src="http://www.gravatar.com/avatar/93de315c2b5af80e362e81c62d2d0da9.png?s=300"
          alt="A picture of Jaz Lalli"
          title="Go to homepage"
          className="nav-header__avatar" />
      </Link>
    );

    const siteTitle = (
      <Link
        to={prefixLink('/')}
        className="nav-header__title">
        {this.props.title}
      </Link>
    );

    return (
      <h1 className="nav-header">
        { avatar }
        { siteTitle }
      </h1>
    );
  }

  render() {
    const navHeader = this.createNavHeader();
    return (
      <div className="nav">
        { navHeader }

        <Nav />

        <div className="nav-social">
          <a href="http://github.com/jazlalli" target="_blank" className="nav-social__icon">
            <img alt="GitHub Icon" title="View my GitHub profile" src="/github.svg" />
          </a>

          <a href="http://twitter.com/jazlalli1" target="_blank" className="nav-social__icon">
            <img alt="Twitter Icon" title="View my Twitter profile" src="/twitter.svg"/>
          </a>

          <a href="mailto:jazlalli@hotmail.com" className="nav-social__icon">
            <img alt="Email Icon" title="Email me" src="/email.svg" />
          </a>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  path: React.PropTypes.string.isRequired
};

export default Header;
