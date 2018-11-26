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

const StackNav = createAppContainer(createStackNavigator({
    Home: {screen: HomeScreen},
    Services: { screen: ServiceScreen},
    Transfer: { screen: TransferScreen },
    Maps: {screen: MapScreen}
}, stackNavigatorConfig));

let routeConfigs = {
    Home: {screen: StackNav, navigationOptions: homeNavigationOptions},
    Transaction: {screen: TransactionScreen},
    Account: {screen: AccountScreen},
    Setting: {screen: SettingScreen},
}

const TabNav = createAppContainer(createBottomTabNavigator(routeConfigs, tabNavigatorConfig));
export default class RootNav extends Component {
    render() {
        return (<TabNav />)
    }
}