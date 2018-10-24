import React,  { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class DemoStyleSheet extends Component {
    render(){
        return (
            <View style={styles.textContainer}>
                <Text>This is a test</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textContainer = {
        marginTop: 20,
        fontSize: 20,
    }
});