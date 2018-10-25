import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {
    constructor(props){
        super(props);
        this.state = {
            showText: true
        };
        var blinkText = () => {
            this.setState(previousState => {
                return {
                    showText: !previousState.showText 
                };              
            });
        };
        const blinkingInterval = 1500;
        setInterval(blinkText(), blinkingInterval);
    }
    render() {
        let displayText = this.state.showText ? this.props.inputText : ' ';
        return (
            <Text>{displayText}</Text>
        );
    }
}

export default class TextBlink extends Component {
    render(){
        return (
            <View>
                <Blink inputText="Meow meow" />
            </View>
        );
    }
}