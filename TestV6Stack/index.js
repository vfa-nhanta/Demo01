/** @format */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import MainComponent from './components/MainScreen';
import DetailComponent from './components/DetailScreen';
import ThirdComponent from './components/ThirdScreen';

import { MainScreen, DetailScreen,ThirdScreen } from './screenNames';

import { createStackNavigator } from 'react-navigation';

const RootStark = createStackNavigator({
    MainScreen: {
        screen: MainComponent,
    },
    DetailScreen: {
        screen: DetailComponent,
        navigationOptions: {
            headerTitle: 'Detail',
        },
    },
    ThirdScreen: {
        screen: ThirdComponent,
        navigationOptions: {
            headerTitle: 'Third',
        },
    },
});

export default class App extends Component {
    render() {
        return (
            <RootStark />
        )
    }
}

AppRegistry.registerComponent(appName, () => App);
