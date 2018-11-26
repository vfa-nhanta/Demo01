import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, Button,
        TouchableOpacity, FlatList } from 'react-native';
import firebase from 'react-native-firebase';
import Todo from './Todo';

export default class TodoApp extends Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection('todos');
        this.unsubscribe = null;
        this.state = {
            inputText: '',
            loading: true,
            todos: []
        }
    }

    textInputHandler = (text) => {
        this.setState({inputText: text})
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onCollectionUpdate = (querySnapShot) => {
        const todos = [];
        querySnapShot.forEach((doc) => {
            const { title, complete } = doc.data();

            todos.push({
                key: doc.id,
                doc,
                title,
                complete,
            });
        });

        this.setState({
            todos,
            loading: false,
        })
    }

    addTodo() {
        this.ref.add({
            title: this.state.inputText,
            complete: false,
        });

        this.setState({inputText:''})
    }

    render() {
        if(this.state.loading) {
            return null;
        }
        return (
            <View style={{marginTop: 100, alignItems: 'center'}}>
                <FlatList
                    data={this.state.todos}
                    renderItem={({item}) => <Todo {...item} />}    
                />
                <TextInput 
                    placeholder='Input To Do here'
                    style={{borderWidth: 1, height: 50, width: 150, padding: 10}}
                    onChangeText={(text) => this.textInputHandler(text)}
                    value={this.state.inputText}
                    />
                <TouchableOpacity 
                    style={{width: 300, 
                            height: 50, 
                            backgroundColor: 'floralwhite',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                            margin: 10}}
                    disabled={!this.state.inputText.length}    
                    onPress={() => this.addTodo()}>
                    <Text style={{color: 'steelblue'}}>Add Todo</Text> 
                </TouchableOpacity>
            </View>
        )
    }
}