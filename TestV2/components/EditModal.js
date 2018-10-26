import React, { Component } from 'react';
import { View, Text, Dimensions, Platform, TextInput } from 'react-native';
import flatListData from '../data/flatListData';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

var screen = Dimensions.get('window');

export default class EditModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            ball: '',
            description: ''
        };
        // this._onPressRefresh = this._onPressRefresh.bind(this);
    }

    showEditModal = (editingBall, flatListItem) => {
        // console.log(`aaa ${JSON.stringify(editingBall)}`);
        this.setState({
            key: editingBall.key,
            ball: editingBall.item,
            description: editingBall.description,
            flatListItem: flatListItem
        });
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
                <Text style={{textAlign: 'center'}}>Input balls here</Text>
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
                onChangeText={(text) => this.setState({ball: text})}
                value={this.state.ball}
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
                onChangeText={(text) => this.setState({description: text})}
                value={this.state.description}
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
                        if (this.state.ball.length == 0 || this.state.description.length ==0){
                            alert("Stuff must be filled!!");
                            return;
                        }
                        var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                        if (foundIndex < 0) {
                            return;
                        }
                        flatListData[foundIndex].item = this.state.ball;
                        flatListData[foundIndex].description = this.state.description;
                        this.state.flatListItem.refreshFlatListItem();
                        this.refs.myModal.close();
                    }}
                >Save
                </Button>
            </Modal>
        )
    }
}