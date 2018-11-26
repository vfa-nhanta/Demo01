import {AppRegistry} from 'react-native';
import MainScreen from './components/MainScreen';
import {name as appName} from './app.json';
import { allReducers } from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(allReducers);
const App = () => {
    <Provider store={store}>
        <MainScreen />
    </Provider>
}

AppRegistry.registerComponent(appName, () => App);
