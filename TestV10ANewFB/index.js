import React, { Component } from 'react';
import AuthStack from './routes';
import TodoApp from './TodoApp';

export default class App extends Component {
    render() {
        return (
            <AuthStack />
        )
    }
}