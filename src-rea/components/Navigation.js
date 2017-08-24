import React from 'react';
import { Link } from 'react-router'
import NavLink from './NavLink';
import UserDropdown from '../containers/UserDropdown';

export default React.createClass({
  render() {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">Matematika</Link>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <NavLink to="/" onlyActiveOnIndex>Výběr příkladů</NavLink>
                <NavLink to="/priklady">Příklady</NavLink>
                {/*<NavLink to="/statistika">Statistika</NavLink>*/}
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <UserDropdown/>
              </ul>
            </div>{/*<!--/.nav-collapse -->*/}
          </div>{/*<!--/.container-fluid -->*/}
        </nav>
    )
  }
})

/*      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Matematika</li>
            <li><NavLink to="/" onlyActiveOnIndex>Výběr příkladů</NavLink></li>
            <li><NavLink to="/priklady">Příklady</NavLink></li>
            <li><NavLink to="/statistika">Statistika</NavLink></li>
          </ul>
        </div>
        <div className="top-bar-right">
        </div>
      </div>*/

