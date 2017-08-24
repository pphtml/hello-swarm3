//import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import Navigation from './Navigation';
import NavLink from './NavLink';

const Hello = React.createClass({
  render() {
    return(
      <div className="container">
        <Navigation/>
        {this.props.children}
      </div>
    )
  }
});

export default Hello;