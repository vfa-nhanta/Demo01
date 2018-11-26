import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Todo extends Component {
    toggleComplete() {
        this.props.doc.ref.update({
            complete: !this.props.complete,
        });
    }

    render() {
        return (
            <TouchableOpacity
                style={{width: 300, height: 50}}
                onPress={() => this.toggleComplete()}
            >
                <View style={{flex: 1, flexDirection: 'row', height: 50, alignItems: 'center'}}>
                    <View style={{flex: 60}}>
                        <Text>{this.props.title}</Text>
                    </View>
                    <View style={{flex: 40}}>
                        {this.props.complete && (<Text>COMPLETED</Text>)}
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}