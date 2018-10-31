import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default  class SettingComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        let tabBarLabel = 'Setting';
        let tabBarIcon = () => {
            <Image
            source={require('../media/setting.png')}
            style={{width: 50, height: 50}}></Image>
        }
        return {tabBarLabel, tabBarIcon};
    };

    render() {
        return (
            <View
            style={{
                backgroundColor: 'midnightblue',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
            >
                <Text style={{fontSize: 40, color: 'white'}}>Settings</Text>
            </View>
        )
    }
} 