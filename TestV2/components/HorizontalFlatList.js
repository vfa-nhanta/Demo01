import React, { Component } from 'react';
import { View, Text, Platform, FlatList, Image } from 'react-native';
import {horizontalStatus} from '../data/horizontalFlatListData';
import {horizontalFlatListData} from '../data/horizontalFlatListData';
import { white } from 'ansi-colors';
import Icon from 'react-native-vector-icons/Ionicons';

class HorizontalFlatListItem extends Component {
    render(){
        return (
            <View>
                <View style={{position: 'absolute',
            top: 0, bottom: 0, left: 0, right: 0}}>
                <Image 
                source={{uri: 'https://image.shutterstock.com/z/stock-vector-black-abstract-weather-map-contour-card-background-meteorological-linear-pattern-vector-428518096.jpg'}}
                style={{flex: 1,
                flexDirection: 'column',
                width: 600, 
                height: 600,
                backgroundColor: 'transparent',
                justifyContent: 'center',
                }}
                />
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                width: 90,
                borderRadius: 10,
                borderWidth: 1,
                backgroundColor: 'gray',
                margin: 4,
                alignItems: 'center',
                opacity: 0.8
            }}>
            
            <Text style={{
                color: 'white',
                fontSize: 16,
                margin: 20,
            }}>
            {this.props.item.hour}
            </Text>
            <Icon 
            name={(Platform.OS === 'ios') ? this.props.item.status.ios : this.props.item.status.android}
            size={30}
            color='white'
             />
            <Text style={{
                color: 'white',
                fontSize: 16,
                margin: 10,
            }}>
            {this.props.item.degree} ℃
            </Text>
            </View>
        </View>
            
        )
    }
}

export default class HorizontalFlatList extends Component {
    render(){
        return (
            <View style={{
                flex: 1, 
                flexDirection: 'column', 
                marginTop: Platform.OS === 'ios' ? 34 : 0
                }}>
                <Text style={{
                    fontSize: 16,
                    margin: 10
                }}>Weather Forecast
                </Text>
                <View style={{ height: 150}}>
                    <FlatList style={{
                        backgroundColor: 'blue',
                        opacity: 0.5,
                        }}
                        horizontal={true}
                        data={horizontalFlatListData}
                        renderItem={({item, index}) => {
                            return (
                            <HorizontalFlatListItem item={item} index={index} parentFlatList={this}>

                            </HorizontalFlatListItem>
                            );
                        }}
                        keyExtractor={(item, index) => item.hour}
                        >

                    </FlatList>
                </View>
            </View>
        )
    }
}