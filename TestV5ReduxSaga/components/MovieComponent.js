import React, { Component } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import Button from 'react-native-button';
import { white } from 'ansi-colors';

export default class MovieComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            movieName: '',
            releaseYear: ''
        }
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'tomato'}}>
                <Text style={{padding: 15, fontSize: 26, color: 'white', marginTop: 30}}>
                    Movie List
                </Text>
                <Text style={{padding: 10, fontSize: 18, color: 'white'}}>
                    Movie Information
                </Text>
                <View style={{height: 100, backgroundColor: 'wheat'}}>
                    <TextInput 
                    style={{padding: 10, borderWidth: 1, borderColor: 'white', marginTop: 10}}
                    placeholder='Movie name goes here'
                    text={this.state.movieName}
                    onChangeText={(text) => this.setState({movieName : text})}
                    ></TextInput>
                    <TextInput 
                    style={{padding: 10, borderWidth: 1, borderColor: 'white', width: 200, marginTop: 5}}
                    placeholder='Release Year goes here'
                    text={this.state.releaseYear}
                    onChangeText={(text) => this.setState({releaseYear : text})}
                    ></TextInput>
                </View>
                <View style={{flex: 1, flexDirection: 'row', height: 70, marginTop: 20, justifyContent: 'space-evenly'}}>
                    <Button
                    containerStyle={{ padding: 10, borderRadius: 10, width: 140, height: 40, backgroundColor: 'darksalmon'}}
                    style={{color: 'white'}}
                    onPress={()=>{
                        this.props.onFetchMovies('asc');
                    }}
                    >Fetch movies</Button>
                    <Button
                    containerStyle={{padding: 10, borderRadius: 10, width: 140, height: 40, backgroundColor: 'darksalmon'}}
                    style={{color: 'white'}}
                    onPress={()=>{
                        
                    }}
                    >Add Movies</Button>
                </View>
                <FlatList
                    data={this.props.movies}
                    keyExtractor={(item) => item.name}
                    renderItem={({item, index}) => {
                        <Text style={{
                            padding: 10, 
                            color: 'white',
                            backgroundColor: (index % 2 == 0 ? 'steelblue' : 'firebrick')
                            }}>
                            {`${item.name}, Release year = ${item.releaseYear}`}
                        </Text>
                    }}
                />
            </View>
        )
    }
}