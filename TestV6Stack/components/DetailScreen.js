import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { MainScreen, ThirdScreen } from '../screenNames';

const screen = Dimensions.get('window');


export default class DetailComponent extends Component {
    render() {
        const itemName = this.props.navigation.getParam('item', 'itemDefault');
        const itemUsage = this.props.navigation.getParam('usage', 'heh');
        return (
            <View style={{
                backgroundColor: 'steelblue', 
                height: screen.height,
                justifyContent: 'center',
                alignItems: 'center'
                }}>
                <Text style={{color: 'white', fontSize: 60, textAlign: 'center'}}>Detail Screen</Text>
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
                    this.props.navigation.navigate(ThirdScreen);
                }}>    
                    <Text style={{textAlign: 'center', color: 'white'}}>To Third</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{width: 200, height: 40, marginTop: 20, borderRadius: 10, backgroundColor: 'purple', justifyContent: 'center'}}
                onPress={() => {
                    this.props.navigation.goBack();
                }}>    
                    <Text style={{textAlign: 'center', color: 'white'}}>Go back</Text>
                </TouchableOpacity>
                <Text style={{marginTop: 20}}>Item: {itemName}</Text>
                <Text style={{marginTop: 20}}>Function: {itemUsage}</Text>
            </View>
        )
    }
}