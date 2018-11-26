import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet,
        ScrollView, TouchableOpacity, Image,
        ImageBackground } from 'react-native';
import firebase from 'react-native-firebase'
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';


export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLogin: false,
            typedEmail: '',
            typedPassword: '',
            userInfo: '',
        }
    };

    componentDidMount() {
        GoogleSignin.configure({
            iosClientId: '280479866628-rjo52a7c130f2f1ndtei2q48gb50cves.apps.googleusercontent.com'
        });
    }

    anonymLoginHandler = () => {
        firebase.auth().signInAnonymously()
        .then(()=> {
            this.setState({isLogin: true});
        }).catch((error) => {
            console.log(error);
            alert('yo, ' + error);
        })
    }

    emailRegisterHandler = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.typedEmail, this.state.typedPassword)
        .then((user) => {
            this.setState({userInfo: user, isLogin: true});
        }).catch((error) => {
            alert(`${error}`);
        })
    }

    emailLoginHandler = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.typedEmail, this.state.typedPassword)
        .then((user) => {
            this.setState({userInfo: user, isLogin: true});
        }).catch((error) => {
            alert(`${error}`);
        })
    }

    signIn = async () => {
        try {
            await GoogleSignin.signIn();
            this.setState({userInfo, isLogin: true});
        } catch(error) {
            alert('error is: ' + error)
        }
    }

    loginRenderer = () => {
        if (this.state.isLogin) {
            return 'YES!!!';
        } else {
            return "NEIN!!";
        }
    }

    render() {
        return (
            <ImageBackground 
                style={{width: '100%', height: '100%'}}
                source={{uri: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/EVeDgMMCximbyooji/videoblocks-abstract-background-with-blue-molecule-structure-low-poly-4k-motion-graphics_shwtbi4_thumbnail-full01.png'}}>
                <ScrollView keyboardDismissMode='on-drag' contentContainerStyle={styles.container}>
                <View>
                    <Image
                        style={{width: 175, height: 100, marginBottom: 30}} 
                        source={{uri: 'https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/02/14123835/Graffiti-PNG-Transparent-1024x586.png'}}/>
                </View>
                <TextInput 
                    style={styles.txtInput}
                    placeholder='Please input your email' 
                    onChangeText={(email) => {this.setState({typedEmail: email})}}    
                    />
                <TextInput 
                    style={styles.txtInput}
                    placeholder='Please input your password' 
                    onChangeText={(password) => {this.setState({typedPassword: password})}}   
                    />
                <TouchableOpacity 
                    style={styles.btnAnonym}
                    onPress={this.anonymLoginHandler}>
                    <Text style={{color: 'white'}}>Anonymous Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btnEmailRegister}
                    onPress={this.emailRegisterHandler}>
                    <Text style={{color: 'white'}}>Register with Email</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btnEmailLogin}
                    onPress={this.emailLoginHandler}>
                    <Text style={{color: 'white'}}>Login with Email</Text>
                </TouchableOpacity>
                <GoogleSigninButton
                    style={{width: 200, height: 48, marginVertical: 10,
                        justifyContent: 'center', alignItems: 'center'}}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this.signIn}/>
                <Text>Login Status: {this.loginRenderer()}</Text>
            </ScrollView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    txtInput: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    btnAnonym: {
        width: 190,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'steelblue',
        
    },
    btnEmailLogin: {
        width: 190,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'crimson',
        marginTop: 10,
    },
    btnEmailRegister: {
        width: 190,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkkhaki',
        marginTop: 10,
    },
})