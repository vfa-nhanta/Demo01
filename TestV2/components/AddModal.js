import React, { Component } from 'react';
import { View, Text, Dimensions, Platform, TextInput } from 'react-native';
import flatListData from '../data/flatListData';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

import { insertDataToServer } from '../networking/server';

var screen = Dimensions.get('window');

export default class AddModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            newBall: '',
            newDescription: ''
        };
        this._onPressRefresh = this._onPressRefresh.bind(this);
    }

    showAddModal = () => {
        this.refs.myModal.open();
    }

    generateKey = (numberOfCharacter) => {
        return require('random-string')({length: numberOfCharacter});
    } 

    _onPressRefresh(val) {
        this.props.parentFlatList.refreshFlatList(val);
    }

    render() {
        return (
            <Modal 
                ref={'myModal'}
                style={{
                    width: screen.width - 80,
                    height: 300,
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowRadius: 30,
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    }}
                position = 'center'
                backdrop = {true}
                onClosed = {() => {
                    // alert("VIRUS DETECTED!!!");
                    
                }}
                >
                <Text style={{textAlign: 'center'}}>Input new balls here</Text>
                <TextInput style={{
                    borderColor: 'indigo',
                    borderWidth: 1,
                    height: 50,
                    width: 200,
                    padding: 15,
                    marginTop: 10,
                    color: 'black'
                }}
                placeholder="Start typing to see suggestions..."
                onChangeText={(text) => this.setState({newBall: text})}
                value={this.state.newBall}
                >
                </TextInput>
                <Text style={{textAlign: 'center', marginTop: 20}}>Input your descriptions</Text>
                <TextInput style={{
                    borderColor: 'indigo',
                    borderWidth: 1,
                    height: 100,
                    width: 200,
                    padding: 15,
                    marginTop: 10,
                    color: 'black'
                }}
                placeholder="Start typing to see suggestions..."
                multiline={true}
                onChangeText={(text) => this.setState({newDescription: text})}
                value={this.state.newDescription}
                >
                </TextInput>
                <Button
                    containerStyle={{
                        padding: 10,
                        height: 40,
                        backgroundColor: 'wheat',
                        borderRadius: 10,
                        marginTop: 10,
                    }}
                    onPress = {() => {
                        if (this.state.newBall.length == 0 || this.state.newDescription.length ==0){
                            alert("Stuff must be filled!!");
                            return;
                        }
                        const newKey = this.generateKey(24);
                        const insertNewBall = {
                            key: newKey,
                            item: this.state.newBall,
                            imageURL: "https://5.imimg.com/data5/NW/CE/MY-28899737/small-plastic-ball-500x500.jpg",
                            description: this.state.newDescription,
                        };
                        flatListData.push(insertNewBall);
                        this._onPressRefresh(newKey);
                        this.refs.myModal.close();
                    }}
                >Save
                </Button>
            </Modal>
        )
    }
}