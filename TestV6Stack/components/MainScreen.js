import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import { DetailScreen, ThirdScreen } from '../screenNames';

const screen = Dimensions.get('window');
let dataToDetail = {
    item: "spoons",
    usage: "eat stuff"
};

export default class MainComponent extends Component {
    static navigationOptions = ({ navigation}) => {
        const { params } = navigation.state
        let headerTitle = 'Main';
        let headerTitleStyle = {
            color: '#007AFF',
        };
        let headerRight = (
            <TouchableOpacity 
            style={{width: 50, height: 40, borderRadius: 10, backgroundColor: 'grey', marginRight: 10, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => {
                params.onSave();
            }}>
                <Text style={{color: 'white'}}>Save</Text>
            </TouchableOpacity>
        );
        return { headerTitle, headerTitleStyle, headerRight }
    }

    _onSave() {
    // setInterval(() => {<ActivityIndicator />}, 3000);
        alert("What a save!!!");
    }

    componentDidMount() {
        this.props.navigation.setParams({onSave: this._onSave.bind(this)});
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={{
                backgroundColor: 'tomato', 
                height: screen.height,
                justifyContent: 'center',
                alignItems: 'center'
                }}>
                <Text style={{color: 'white', fontSize: 60, textAlign: 'center'}}>Main Screen</Text>
                <TouchableOpacity
                style={{width: 200, height: 40, borderRadius: 10, backgroundColor: 'floralwhite', justifyContent: 'center'}}
                onPress={() => {
                    this.props.navigation.navigate(DetailScreen, dataToDetail);
                }}>    
                    <Text style={{textAlign: 'center'}}>To Detail</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{width: 200, height: 40, marginTop: 20, borderRadius: 10, backgroundColor: 'midnightblue', justifyContent: 'center'}}
                onPress={() => {
                    this.props.navigation.navigate(ThirdScreen);
                }}>    
                    <Text style={{textAlign: 'center', color: 'white'}}>To Third</Text>
                </TouchableOpacity>
            </View>
        );
    }
}