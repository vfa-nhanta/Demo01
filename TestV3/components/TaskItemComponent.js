import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class TaskItemComponent extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
            <TouchableOpacity style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
            }}
            onPress={() => {

            }}>

            </TouchableOpacity>
                <Text style={{
                    fontSize: 20,
                    color: this.props.completed == true ? 'red' : 'black',
                }}>{this.props.taskName}</Text>
            </View>
        )
    }
}