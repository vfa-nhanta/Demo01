import React, { Component } from 'react';
import { Alert, View, Text, Button } from 'react-native';
import { black } from 'ansi-colors';

export default class ButtonTapTap extends Component {
    _onPressButton= () => 
    {
        Alert.alert("ಠ_ಠ");
    }
    render(){
        return (
            <View style={{alignItems: 'center'}}>
                <Text style={{marginTop: 60}}>Tap the button below</Text>
                <View style={{
                        marginTop: 25,
                        padding: 15,
                        borderRadius: 35,
                        backgroundColor: 'steelblue',
                        shadowRadius: 10,
                        shadowOpacity: 0.2,
                    }}>
                    <Button 
                    title="NOT A BUTTON"
                    onPress={this._onPressButton}
                    color='floralwhite'
                    >

                    </Button>
                </View>

            </View>
        )
    }
}
