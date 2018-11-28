import React, { Component } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import TransactionScreen from './TransactionScreen';
import AccountScreen from './AccountScreen';
import SettingScreen from './SettingScreen';
import TransferScreen from './TransferScreen';
import ServiceScreen from './ServiceScreen';
import MapScreen from './MapScreen';
import BasketballScreen from './BasketballScreen';

let tabNavigatorConfig = {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey'
    }
}

let stackNavigatorConfig = {
    animationEnabled: true,
    swipeEnabled: true,
    headerMode: 'none',
    mode: 'modal',
}

let settingNavigatorConfig = {
  animationEnabled: true,
  headerMode: 'none',
  mode: 'modal',
}

let homeNavigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    let tabBarIcon = () => (
      <Image
        source={require("../media/home.png")}
        style={{ width: 26, height: 26, alignSelf: "center" }}
      />
    );
    return { tabBarIcon };
  };

  let settingNavigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    let tabBarIcon = () => (
      <Image
        source={require("../media/setting.png")}
        style={{ width: 26, height: 26, alignSelf: "center" }}
      />
    );
    return { tabBarIcon };
  };

const StackNav = createAppContainer(createStackNavigator({
    Home: {screen: HomeScreen},
    Services: { screen: ServiceScreen},
    Transfer: { screen: TransferScreen },
    Maps: {screen: MapScreen}
}, stackNavigatorConfig));

const SettingNav = createAppContainer(createStackNavigator({
    Setting: { screen: SettingScreen },
    Basketball: { screen: BasketballScreen },
}, settingNavigatorConfig));

let routeConfigs = {
    Home: {screen: StackNav, navigationOptions: homeNavigationOptions},
    Transaction: {screen: TransactionScreen},
    Account: {screen: AccountScreen},
    Setting: {screen: SettingNav, navigationOptions: settingNavigationOptions},
}

const TabNav = createAppContainer(createBottomTabNavigator(routeConfigs, tabNavigatorConfig));
export default class RootNav extends Component {
    render() {
        return (<TabNav />)
    }
}