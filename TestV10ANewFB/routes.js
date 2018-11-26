import { StackNavigator } from 'react-navigation';
import { HomeScreen, LoginScreen } from './screens';

// const AuthStack = createStackNavigator({
//     Login: LoginScreen
// })
// const AppStack = createStackNavigator({
//     Home: HomeScreen
// })

// export default createAppContainer(createSwitchNavigator(
//     {
//         App: AppStack,
//         Auth: AuthStack
//     },
//     {
//         initialRouteName: 'AuthStack'
//     }
// ))

export const AuthStack = StackNavigator({
    AuthStack: {
        screen: LoginScreen
    }
})