import React, { Component } from 'react';
import { View, Text } from 'react-native';

class LifeCycle extends Component {
    constructor(props){
        super(props);
        console.log(`${Date.now()}. Constructor Yo!`);
        this.state = {
            numberOfRefresh: 0
        };
        setInterval(() => {
            this.setState(previousState => {
                return {numberOfRefresh: previousState.numberOfRefresh + 1};
            });
        }, 2000);
    }
componentWillMount(){
    console.log(`${Date.now()}. componentWillMount Yo!`);
}
componentDidMount(){
    console.log(`${Date.now()}. componentDidMount Yo!`);
}

shouldComponentUpdate(){
    console.log("shouldComponentUpdate????");
    return true;
}

componentWillUpdate(){
    console.log("will Component update????");
}

componentDidUpdate(){
    console.log("that's it!!!");
}

    render(){
        console.log("Me now renders!");
        let textInThis = `Counting:... ${this.state.numberOfRefresh}`;
        return (
            <View style={{flex: 1, backgroundColor: 'steelblue', alignItems: 'center'}}>
                <Text style={{marginTop: 100, color: 'black', fontSize: 40}}>{textInThis}</Text>
            </View>
        )
    }
}
export default class LifeCycleComponent extends Component {
    constructor(props){
        super(props);
    }
    render(){
        var lifeCycle = <LifeCycle propA="aaa"></LifeCycle>;
        return (
            <View>
                {lifeCycle}
            </View>
        )
    }
}