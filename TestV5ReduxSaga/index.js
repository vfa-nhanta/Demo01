/** @format */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/index';
import MovieContainer from './containers/MovieContainer';

import MovieComponent from './components/MovieComponent';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';

// const sagaMiddleware = createSagaMiddleware();

// let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
// class App extends Component {
//     render() {
//         return (
//             <Provider store={store}>
//                   <MovieContainer />
//             </Provider>
//         )
//     }
// }
//sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent(appName, () => MovieComponent);
