import React, { Component } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import AnimationDemo from './AnimationDemo';

export default class StaggerComponent extends Component {
    constructor(props) {
        super(props);
        var animatedValue = [];
        for (var i = 0; i < 1200; i++) {
            animatedValue.push(new Animated.Value(0));
        }
        this.state = {
            animatedValue: animatedValue
        }
    }
    
    async componentDidMount() {
        await this.staggerAnimate();
    }


    staggerAnimate = () => {
        const animations = this.state.animatedValue.map((animatedValue) => {
            return Animated.timing(animatedValue, {
                toValue: 1,
                duration: 25000,
            })
        });
        Animated.stagger(10, animations).start();
    }

    render() {
        const animatedViews = this.state.animatedValue.map((animatedValue, index) => {
            return (
                <Animated.View 
                    key={index}
                    style={[{height: 10, width: 10, backgroundColor: (index % 2 == 0) ? 'tomato' : 'steelblue', margin: 3, borderRadius: 5}, 
                    {opacity: animatedValue}]} />
            )
        })
        return (
            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', margin: 3, marginTop: 40}}>
                {animatedViews}
            </View>
        )
    }
}