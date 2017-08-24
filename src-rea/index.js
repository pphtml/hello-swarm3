import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import configureStore from './store/configureStore';

import App from './components/App';
import VyberPrikladu from './containers/VyberPrikladu';
import Priklady from './containers/Priklady';
// import Vysledky from './components/Vysledky';
import Statistika from './components/Statistika';
import * as actions from './actions';


//require('file?name=[name].[ext]!./static/index.html');
//require('file?name=[name].[ext]!./index.html');
//require.context("./static/", true, /^\.\/.*\.html/);

// require('!style!css!foundation-sites/dist/foundation.min.css');
// require('!style-loader!css-loader!postcss-loader!less-loader!bootstrap/dist/js/bootstrap.min.js');
// require('!style!css!bootstrap/dist/js/bootstrap.min.js');
/*var foundation = require('foundation-sites');
$(document).foundation();*/
//import './assets/stylesheets/base.scss';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './assets/stylesheets/base.css';
require(['jquery', 'bootstrap'], function($){
});

//import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
//require('!style!css!bootstrap/dist/css/bootstrap.css');

const store = configureStore();
store.dispatch(actions.fetchUserSessionData());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={VyberPrikladu} />
        <Route path="/priklady" component={Priklady} />
        <Route path="/statistika" component={Statistika} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

