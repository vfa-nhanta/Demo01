import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default  class HomeComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        let tabBarLabel = 'Home';
        let tabBarIcon = () => {
            <Image
            source={require('../media/home.png')}
            style={{width: 30, height: 30}}></Image>
        }
        return {tabBarLabel, tabBarIcon};
    };

    render() {
        return (
            <View
            style={{
                backgroundColor: 'orange',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
            >
                <Text style={{fontSize: 40}}>Homestead</Text>
            </View>
        )
    }
} 