import React, { Component } from 'react';
import { View, Text, Image, KeyboardAvoidingView,
        TouchableWithoutFeedback, TouchableOpacity,
        StyleSheet, Keyboard, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Login } from '../../redux/actions';
import { userLogin } from '../../redux/actions/index';

export class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typedEmail: '',
            typedPassword: ''
        }
    }

    emailChangeHandler = (email) => {
        this.setState({typedEmail: email});
    }

    passwordChangeHandler = (password) => {
        this.setState({typedPassword: password});
    }

    loginHandler = () => {
        // if (this.state.typedEmail.toLowerCase() == 'test') {
            this.props.dispatch(userLogin(this.state.typedEmail));
        // } else {
        //     alert('Failed to login');
        // }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('../media/emblem.jpg')}/>
                        <View style={styles.infoContainer}>
                            <TextInput 
                                style={styles.textInput}
                                placeholder='Enter username/email'
                                onChangeText={(email) => this.emailChangeHandler(email)}
                            />
                            <TextInput 
                                style={styles.textInput}
                                placeholder='Enter your password'
                                secureTextEntry={true}
                                onChangeText={(password) => this.passwordChangeHandler(password)}
                            />
                            <TouchableOpacity 
                                style={styles.btnLogin}
                                onPress={() => this.loginHandler()}>
                                <Text style={styles.loginTxt}>LOGIN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps)(LoginScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 150,
        height: 150
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 180,
        padding: 20,
        alignItems: 'center',
    },
    textInput: {
        width: 300,
        height: 40,
        padding: 5,
        backgroundColor: 'whitesmoke'
    },
    btnLogin: {
        width: 300,
        height: 40,
        marginTop: 10,
        backgroundColor: 'midnightblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginTxt: {
        color: 'white',
        fontSize: 20,
    }
})