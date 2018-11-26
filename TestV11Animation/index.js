/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import AnimationDemo from './AnimationDemo';
import StaggerComponent from './StaggerComponent';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => StaggerComponent);
