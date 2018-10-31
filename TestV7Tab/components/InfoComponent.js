import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default  class InfoComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        let tabBarLabel = 'Info';
        let tabBarIcon = () => {
            <Image
            source={require('../media/info.png')}
            style={{width: 30, height: 30}}></Image>
        }
        return {tabBarLabel, tabBarIcon};
    };

    render() {
        return (
            <View
            style={{
                backgroundColor: 'steelblue',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
            >
                <Text style={{fontSize: 40}}>Quests</Text>
            </View>
        )
    }
} 