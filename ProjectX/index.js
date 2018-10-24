/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App'; //default của React-Native
import HelloWorld from './components/HelloWorld'; //In dòng chữ Hello World (bài 2)
import Logo from './components/Logo'; //Hiển thị hình ảnh (bài 3)
import MultipleGreetings from './components/MultipleGreetings'; //Sử dụng props (bài 4)
import TextBlink from './components/TextBlink'; //Sử dụng state (bài 5)
// import DemoStyleSheet from './components/DemoStyleSheet';

AppRegistry.registerComponent(appName, () => TextBlink);
