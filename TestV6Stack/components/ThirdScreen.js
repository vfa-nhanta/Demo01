import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-button';
import { DetailScreen, MainScreen } from '../screenNames';

const screen = Dimensions.get('window');

export default class ThirdComponent extends Component {
    render() {
        return (
            <View style={{
                backgroundColor: 'lime', 
                height: screen.height,
                justifyContent: 'center',
                alignItems: 'center'
                }}>
                <Text style={{color: 'white', fontSize: 60, textAlign: 'center'}}>Third Screen</Text>
                <TouchableOpacity
                style={{width: 200, height: 40, borderRadius: 10, backgroundColor: 'floralwhite', justifyContent: 'center'}}
                onPress={() => {
                    this.props.navigation.navigate(MainScreen);
                }}>    
                    <Text style={{textAlign: 'center'}}>To Main</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{width: 200, height: 40, marginTop: 20, borderRadius: 10, backgroundColor: 'midnightblue', justifyContent: 'center'}}
                onPress={() => {
                    this.props.navigation.navigate(DetailScreen);
                }}>    
                    <Text style={{textAlign: 'center', color: 'white'}}>To Detail</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{width: 200, height: 40, marginTop: 20, borderRadius: 10, backgroundColor: 'purple', justifyContent: 'center'}}
                onPress={() => {
                    this.props.navigation.goBack();
                }}>    
                    <Text style={{textAlign: 'center', color: 'white'}}>Go back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}