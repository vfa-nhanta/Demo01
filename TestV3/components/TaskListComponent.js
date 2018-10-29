import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import TaskListContainer from '../containers/TaskListContainer';

export default class TaskListComponent extends Component {
    render() {
        return (
            <FlatList data={this.props.tasks}
            renderItem={({item, index}) => { 
                return (
                    <TaskListContainer {...item}>

                    </TaskListContainer>
                );
            }}
            keyExtractor={(item, index) => item.taskName}
            >

            </FlatList>
        );
    }
};