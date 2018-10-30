import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class MainComponent extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'khaki', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 80, textAlign: 'center'}}>Main Screen</Text>
            </View>
        )
    }
}