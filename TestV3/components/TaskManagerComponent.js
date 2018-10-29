import React, { Component } from 'react';
import { View, Text } from 'react-native';

import AddContainer from '../containers/AddContainer';
import TaskListContainer from '../containers/TaskListContainer';

export default class TaskManagerComponent extends Component {
    render() {
        return (
            <View style={{flex: 1, marginTop: 34}}>
                <AddContainer />
                <TaskListContainer />
            </View>
        );
    }
};