import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>     
      <header className="s-header">
        <div className="row s-header__nav-wrap">
          <nav className="s-header__nav">
            <ul>
              <li className="current"><a className="smoothscroll" href="#hero">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#contact">Message me</a></li>
            </ul>
          </nav>
        </div> {/* end row */}
        <a className="s-header__menu-toggle" href="#0" title="Menu">
          <span className="s-header__menu-icon" />
        </a>
      </header> {/* end s-header */}
    );
      <header id="home">
        ....
      </header>
      </React.Fragment>
    );
  }
}