import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

class UserDropdown extends React.Component {

  render() {
    return (
      <li className="dropdown">
        <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-user" aria-hidden="true">
          </span> {this.props.userSession.userDisplayName} <span className="caret"></span>
        </a>
        { !this.props.userSession.userLoggedIn &&
          <ul className="dropdown-menu">
            <li><a href="/auth/google">Přihlásit se účtem Googlu</a></li>
          </ul>
        }
        { this.props.userSession.userLoggedIn &&
          <ul className="dropdown-menu">
            <li><a href="#" onClick={this.props.actions.logout}>Odhlásit se</a></li>
            {/*<li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li className="dropdown-header">Nav header</li>
            <li><a href="#">Separated link</a></li>
            <li><a href="#">One more separated link</a></li>*/}
          </ul>
        }
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {
    userSession: state.userSession
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);