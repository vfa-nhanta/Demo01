/** @format */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import { createTabNavigator } from 'react-navigation';
//Import screens
import HomeComponent from './components/HomeComponent';
import InfoComponent from './components/InfoComponent';
import SettingComponent from './components/SettingComponent';
import UserComponent from './components/UserComponent';
import { Home, Info, User, Setting } from './screenNames';

let routeConfig = {
    Home: {
        screen: HomeComponent,
    },
    Info: {
        screen: InfoComponent,
    },
    User: {
        screen: UserComponent,
    },
    Setting: {
        screen: SettingComponent,
    },
};

let tabNavigatorConfig = {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
};

const App = createTabNavigator(routeConfig, tabNavigatorConfig);
AppRegistry.registerComponent(appName, () => App);
