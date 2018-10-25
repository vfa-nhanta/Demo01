import React, { Component } from 'react';
import { Text, View, TextInput, Keyboard} from 'react-native';
import { gray } from 'ansi-colors';

export default class TextBox extends Component {
constructor(props){
    super(props);
    this.state = {
        typedText: 'Dude WTF',
        typedDes: 'ehehehe'
    }
}
componentWillMount(){
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => this.setState(() => {return {typedText: 'Keyboard freaking showed!!!!'}}));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => this.setState(() => {return {typedText: 'Keyboard freaking hid!!!'}}));
}

ComponentDidMount(){
    this.keyboardDidShowListener.remove()
}

    render(){
        return (
            <View style={{alignItems: 'center', marginTop: 30}}>
                <Text style={{fontSize: 26, marginTop: 30}}>{this.state.typedText}</Text>
                <TextInput 
                style={{
                    width: 250,
                    height: 30,
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginTop: 50
                }}
                keyboardType='email-address'
                placeholder="Type your email here"
                onChangeText = {
                    (text) => {
                        this.setState((previousState) => {
                            return {
                                typedText: text
                            };
                        }
                    );
                }
            }
            />
                <TextInput 
                style={{
                    width: 250,
                    height: 30,
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginTop: 50
                }}
                keyboardType='default'
                placeholder="Tell me a secret story"
                secureTextEntry={true}
            />
            <TextInput 
                style={{
                    width: 250,
                    height: 100,
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginTop: 50
                }}
                keyboardType='default'
                placeholder="AAAAHHHHHH!!!!"
                secureTextEntry={true}
                multiline={true}
                borderBottomColor='purple'
                borderBottomWidth={3}
                editable={true}
                autoFocus={true}
                returnKeyType='done'
                onSubmitEditing={Keyboard.dismiss}
                onChangeText={(text) => {this.setState(() => {
                    return {
                        typedDes: text
                    }
                } 
                )}}
            />
            <Text style={{marginTop: 30}}>{this.state.typedDes}</Text>
            </View>
        )
    }
}