import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import LoginScreen from './LoginScreen';
import RootNav from './rootNav';

export class Routes extends Component {
    render() { 
        return (
            <View style={{flex: 1}}>
                {(this.props.isLoggedIn) ? <RootNav /> : <LoginScreen />}
            </View>
        )
    }
}

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps)(Routes);