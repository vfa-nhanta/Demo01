/** @format */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import CounterComponent from './components/CounterComponent';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import CounterContainer from './containers/CounterContainer';

import createSagaMiddleWare from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleWare();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));  

export default class App extends Component {
    render(){
        return (
            <Provider store={store}>
            <CounterContainer />
            </Provider>
        )
    };
}

sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent(appName, () => App);
