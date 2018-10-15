import 'carbon-components/scss/globals/scss/styles.scss';

import React, { Component } from 'react';
import AppRoute from './Router';
import {Provider} from 'react-redux';
import store from './../../store';
import './style.scss'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoute></AppRoute>
      </Provider>
    );
  }
}

export default App;
