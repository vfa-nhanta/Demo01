import React, { Component } from 'react';
import { View , Text } from 'react-native';

class Greeting extends Component {
    render() {
        let textString = `Welcome to the dark realm, ${this.props.name}`;
        return (
            <Text>{textString}</Text>
        );
    }
}

export default class MultipleGreetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center', marginTop: 50}}>
                <Greeting name="Alejandro"></Greeting>
                <Greeting name="Mister Midnight"></Greeting>
            </View>
        );
    }
}