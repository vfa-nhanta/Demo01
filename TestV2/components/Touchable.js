import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';

export default class Touchable extends Component {
    _onPressButton = () => {
        alert("Woof Woof");
    }

    render(){
        return (
            <View style={{alignItems: 'center', marginTop: 30}}>
                <TouchableHighlight
                    onPress={this._onPressButton}
                    underlayColor="red"
                    
                    // onShowUnderlay={() => {alert("Meow meow");}}
                >
                <View style={{backgroundColor: 'yellow', padding: 30, marginTop: 40, borderRadius: 25}}>
                    <Text>YAY OR NAY???</Text>
                </View>
                </TouchableHighlight>
                <TouchableOpacity
                    onPress={this._onPressButton}
                    underlayColor="red"

                >
                <View style={{backgroundColor: 'steelblue', padding: 30, marginTop: 40, borderRadius: 25}}>
                    <Text>YES!!!</Text>
                </View>
                </TouchableOpacity>
                <TouchableWithoutFeedback
                    onPress={this._onPressButton}
                    underlayColor="red"
                    onLongPress={() => {alert("*blush*");}}
                    // onShowUnderlay={() => {alert("Meow meow");}}
                >
                <View style={{backgroundColor: 'purple', padding: 30, marginTop: 40, borderRadius: 25}}>
                    <Text style={{color: 'white'}}>NO!!!</Text>
                </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}