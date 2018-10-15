import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import Home from './../home/Home'
import Forum from './../forum/Forum'


class AppRoute extends Component {
  render() {
    const history = createHistory();
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={'/'} component={Home} ></Route>
          <Route path={'/forum'} component={Forum} ></Route>
        </Switch>
      </Router>
    );
  }
}

export default AppRoute;