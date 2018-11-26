import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
const Realm = require('realm');

const ObjectSchema = {
    name: 'OBJECT_SCHEMA',
    primaryKey: 'id',
    properties: {
        id: 'int',
        type: 'string',
        color: 'string'
    }
};

const databaseOptions = {
    schema: [ObjectSchema]
}


export default class RealmDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            currendId: 0,
            currentType: null,
            currentColor: null
        };
    }

    realmHandler() {
        Realm.open(databaseOptions).then(realm => {
            realm.write(() => {
                realm.create('OBJECT_SCHEMA', {
                    id: this.state.currendId,
                    type: this.state.currentType,
                    color: this.state.currentColor
                });
            });
        }).catch((error) => {
            console.log("Sumting wong: " + error);
        });
    }

    render() {
        return (
            <View>
                <View style={{textAlign: 'center', justifyContent: 'center'}}>
                    <Text>Current ID: {this.state.currendId}</Text>
                    <Text>Current Type: {this.state.currentType}</Text>
                    <Text>Current Color: {this.state.currentColor}</Text>
                </View>
                <View>
                    <TextInput 
                        placeholder='ID please' 
                        onChangeText={(id) => {
                            this.setState({currentId: id});
                        }}></TextInput>
                    <TextInput 
                        placeholder='Type please' 
                        onChangeText={(type) => {
                            this.setState({currentType: type});
                        }}></TextInput>
                    <TextInput 
                        placeholder='Color please'
                        onChangeText={(color) => {
                            this.setState({currentColor: color});
                        }}></TextInput>
                    <TouchableOpacity
                        style={{height: 50, width: 100, backgroundColor: 'violet'}} 
                        onPress={()=> {this.realmHandler}}
                        >
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}