import React, { Component } from 'react';
import { View, Text } from 'react-native';
import StudentContainer from '../containers/studentContainer';

export default class MainScreen extends Component {
    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text>Hi</Text>
                <StudentContainer />
            </View>
        )
    }
}