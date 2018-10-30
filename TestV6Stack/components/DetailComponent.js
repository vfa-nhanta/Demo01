import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DetailComponent extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'lavender', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 80, textAlign: 'center'}}>Detail Screen</Text>
            </View>
        )
    }
}