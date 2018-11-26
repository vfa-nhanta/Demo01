import React, { Component } from "react";
import { View, Text, Animated, TouchableOpacity, Easing } from 'react-native';

export default class AnimationDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeValue: new Animated.Value(0),
            xValue: new Animated.Value(0),
            springValue: new Animated.Value(0.3)
        }
    }

    animationHandler = () => {
        Animated.timing(this.state.fadeValue, {
            toValue: 1,
            duration: 1000,
        }).start();
    }

    moveLeftHandler = () => {
        Animated.timing(this.state.xValue, {
            toValue: -200,
            duration: 1000,
            asing: Easing.bounce,
        }).start(() => this.moveRightHandler());
    }

    moveRightHandler = () => {
        Animated.timing(this.state.xValue, {
            toValue: 200,
            duration: 1000,
            asing: Easing.elastic,
        }).start(() => this.moveLeftHandler());
    }

    springHandler = () => {
        Animated.spring(this.state.springValue, {
            toValue: 3,
            friction: 1,
        }).start();
    }

    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 300}}>
                <Animated.View 
                    style={[{width: 100, height: 100, marginBottom: 10,
                            backgroundColor: 'steelblue'}, 
                            {opacity: this.state.fadeValue},
                            {left: this.state.xValue},
                            {transfrom: [{scale: this.state.springValue, alignSelf: 'center'}]}
                            ]}>
                </Animated.View>
                <TouchableOpacity 
                    style={{width: 200, height: 50, borderRadius: 10,
                            padding: 10,backgroundColor: 'tomato',
                            alignItems: 'center', justifyContent: 'center',
                            marginBottom: 20,}}
                    onPress={() => this.animationHandler()}>
                    <Text style={{color: 'white'}}>World Destruction</Text>
                </TouchableOpacity>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <TouchableOpacity 
                        style={{flex: 1, width: 100, height: 50, backgroundColor: 'green',
                        alignItems: 'center', justifyContent: 'center'}}
                        onPress={() => this.moveLeftHandler()}>
                        <Text style={{color: 'white'}}>To the left</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{flex: 1, width: 100, height: 50, backgroundColor: 'midnightblue',
                        alignItems: 'center', justifyContent: 'center'}}
                        onPress={() => this.moveRightHandler()}>
                        <Text style={{color: 'white'}}>To the right</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    style={{width: 200, height: 50, borderRadius: 10,
                            padding: 10,backgroundColor: 'lime',
                            alignItems: 'center', justifyContent: 'center',
                            marginTop: 100,}}
                    onPress={() => this.animationHandler()}>
                    <Text style={{color: 'white'}}>Bouncy bounce</Text>
                </TouchableOpacity>
            </View>
        )
    }
}