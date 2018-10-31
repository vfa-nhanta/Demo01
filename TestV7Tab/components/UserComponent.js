import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default  class UserComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        let tabBarLabel = 'User';
        let tabBarIcon = () => {
            <Image
            source={require('../media/user.png')}
            style={{width: 30, height: 30}}></Image>
        }
        return {tabBarLabel, tabBarIcon};
    };

    render() {
        return (
            <View
            style={{
                backgroundColor: 'tomato',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
            >
                <Text style={{fontSize: 40}}>Players</Text>
            </View>
        )
    }
} 