import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-button';

export default class CounterComponent extends Component {
    render(){ 
        console.log(this.props);
        return (
            <View style={{flex: 1, marginTop: 30}}>
                <Text style={{marginRight: 20, fontSize: 40, color: 'crimson'}}>App To Count Stuff</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', height: 50, margin: 10}}>
                    <Button
                        containerStyle={{height: 40, margin: 20, borderRadius: 10, backgroundColor: 'indianred'}}
                        style={{fontSize: 15, color: 'white', padding: 10}}
                        onPress={() => {
                            this.props.onDecrement(1);
                        }}>
                        Decrease by ONE
                    </Button>
                    <Button
                        containerStyle={{height: 40, borderRadius: 10, backgroundColor: 'lawngreen'}}
                        style={{fontSize: 15, color: 'white', padding: 10}}
                        onPress={() => {
                            this.props.onIncrement(1);
                        }}>
                        Increase by ONE
                    </Button>
                </View>
                <Text style={{fontSize: 30, color: 'violet'}}>Here to count: {this.props.times}</Text>
            </View>
        );
    }
}