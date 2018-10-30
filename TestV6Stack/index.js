/** @format */

import {AppRegistry} from 'react-native';
import { StackNavigatior } from 'react-navigation';
// import App from './App';
import {name as appName} from './app.json';
import MainComponent from './components/MainComponent';
import DetailComponent from './components/DetailComponent';
import ThirdComponent from './components/ThirdComponent';
import { MainScreen, DetailScreen, ThirdScreen } from './screenName';

const App = StackNavigatior({
    MainScreen: {
        screen: MainComponent,
        navigatorOptions: {
            headerTitle: 'Main',
        },
    }
    MainScreen: {
        screen: DetailComponent,
        navigatorOptions: {
            headerTitle: 'Detail',
        },
    }
    MainScreen: {
        screen: ThirdComponent,
        navigatorOptions: {
            headerTitle: 'Third Screen',
        },
    }
    }
});

AppRegistry.registerComponent(appName, () => MainComponent);
