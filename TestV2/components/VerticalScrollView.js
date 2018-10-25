import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, Image, Dimensions } from 'react-native';

export default class VerticalScrollView extends Component {
    render() {
        let screenWidth  = Dimensions.get('window').width;
        let imageURL = {uri: 'https://vignette.wikia.nocookie.net/blogclan-2/images/b/b9/Random-image-15.jpg/revision/latest?cb=20160706220047'}
        return (
            <ScrollView 
                keyboardDismissMode='on-drag'
                maximumZoomScale={3}
                minimumZoomScale={0.2}
            >
                <Image
                    source={imageURL}
                    style={{width: screenWidth, height: screenWidth * 390/320, marginTop: 40}}
                ></Image>
                <Text style={{
                    padding: 15,
                    backgroundColor: 'midnightblue',
                    color: 'white',
                    textAlign: 'center'
                }}>
                    Oh hello there!
                </Text>
                <TextInput
                    style={{
                        width: screenWidth,
                        padding: 10,
                        borderColor: 'black',
                        borderWidth: 1,
                        marginTop: 5,
                    }}
                    placeholder='Go ahead, type something'
                >
                </TextInput>
            </ScrollView>
        )
    }
}