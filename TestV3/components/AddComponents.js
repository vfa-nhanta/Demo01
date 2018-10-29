import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, Image } from 'react-native';

import { addNewTask } from '../actions/index';

export default class AddComponent extends Component {
    constructor(props){
        super(props);
        this.state = ({
            newTaskName: ''
        });
    }

    render(){
        return (
            <View style={{
                backgroundColor: 'azure',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                height: 64,
            }}>
            <TextInput style={{
                height: 40,
                width: 300,
                padding: 10,
                margin: 5,
                color: 'red',
                borderColor: 'red',
                borderWidth: 1
            }}
            keyboardType='default'
            placeholder='Input something here'
            onChangeText={(text) => {
                this.setState({newTaskName: text});
            }}/>
            <TouchableHighlight style={{ marginRight: 10 }}
            underlayColor='violet'
            onPress={(event) => {
                if(!this.state.newTaskName.trim()) {
                    return;
                }
                this.props.onClickAdd(this.state.newTaskName);
            }}>
            <Image style={{height: 40, width: 40}}
            source={{uri: 'https://banner2.kisspng.com/20180401/sew/kisspng-addition-computer-icons-clip-art-add-to-cart-button-5ac18a1e9c2711.6810101515226332466396.jpg'}}
            ></Image>
            </TouchableHighlight>
            </View>
        )
    }
}