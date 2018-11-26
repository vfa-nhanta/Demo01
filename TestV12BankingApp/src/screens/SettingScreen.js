import React, { Component } from 'react';
import { View, Text, Image, KeyboardAvoidingView,
        TouchableWithoutFeedback, TouchableOpacity,
        StyleSheet, Keyboard, TextInput, Alert } from 'react-native';
import { userLogOut } from '../../redux/actions/index';
import { connect } from 'react-redux';

export class SettingScreen extends Component {
    static navigationOptions = ({navigation}) => {
        const { params } = navigation.state;
        let tabBarIcon = () => (
            <Image 
                source={require('../media/setting.png')}
                style={{width: 26, height: 26, alignSelf: 'center'}}
            />
        );
        return { tabBarIcon }
    }

    logOutHandler = () => {
        this.props.dispatch(userLogOut());
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hi</Text>
                <TouchableOpacity 
                    style={styles.btnLogOut}
                    onPress={() => this.logOutHandler()}>
                    <Text style={styles.loginTxt}>LOG OUT</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(SettingScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'khaki'
    },
    btnLogOut: {
        width: 300,
        height: 40,
        marginTop: 10,
        backgroundColor: 'blueviolet',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginTxt: {
        color: 'white',
        fontSize: 20,
    }
})