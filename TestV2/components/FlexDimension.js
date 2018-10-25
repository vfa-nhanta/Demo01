import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FlexDimension extends Component {
    render(){
        return (
            <View style={{
                flex: 1, 
                flexDirection: 'row', 
                backgroundColor: 'yellow',
                justifyContent: 'space-around'
                }}>
                <View style={{flex: 40, marginRight: 10, backgroundColor: 'floralwhite'}}></View>
                <View style={{flex: 60, backgroundColor: 'steelblue'}}></View>
                <View style={{width: 30}}></View>
            </View>
        )
    }
}