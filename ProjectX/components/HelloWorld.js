import React, { Component } from 'react';
import { Text, View } from 'react-native';

const greeting = `It's alive!!!`;

export default class HelloWorld extends Component {
    render() {
        return (
        <View>
            <Text style={{margin: 60}}>{greeting}</Text>
        </View>
        )
    }
}