import React, { Component } from 'react';
import { Image, Text } from 'react-native';

export default class Logo extends Component {
    render(){
        let imgSource = {uri:'https://www.logolynx.com/images/logolynx/b8/b89ac75795eab1f8862c8b06bc4d0000.jpeg'}

        return (
            <Image source={imgSource }
                    style={{width: 605, height: 251}}
            ></Image>
        )
    }
}