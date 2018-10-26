/** @format */

import {AppRegistry} from 'react-native';
import App from './components/App';
import {name as appName} from './app.json';
/*
import TextBlink from './components/TextBlink';
import FlexDimension from './components/FlexDimension';
import TextBox from './components/TextBox';
import ButtonTapTap from './components/ButtonTapTap';
import VerticalScrollView from './components/VerticalScrollView';
import Touchable from './components/Touchable';
import LifeCycleComponent from './components/LifeCycleComponent';
import BasicFlatList from './components/BasicFlatList';
import HorizontalFlatList from './components/HorizontalFlatList';
*/
import BasicSectionList from './components/BasicSectionList';

AppRegistry.registerComponent(appName, () => BasicSectionList);
