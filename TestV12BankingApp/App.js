import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './redux/reducers/index';
import Routes from './src/screens/Routes';
import { Login } from './redux/actions';
import { connect } from 'react-redux';

const store = createStore(RootReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}
