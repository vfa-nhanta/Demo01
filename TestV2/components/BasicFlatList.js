import React, { Component } from 'react';
import { Alert, View, Text, FlatList, Image, Platform, TouchableOpacity } from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';
import AddModal from './AddModal';
import EditModal from './EditModal';

class FlatListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeRowKey: null,
            numberOfRefresh: 0
        };
    }
    refreshFlatListItem = () => {
        this.setState((prevState) => {
            numberOfRefresh = prevState.numberOfRefresh + 1;
        });
    }

    render(){
        const swipeSetting = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey != null){
                    this.setState({activeRowKey: null});
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({activeRowKey: this.props.item.key});

            },
            right: [
                {
                    onPress: () => {
                        this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
                    },
                    text: 'Edit', type: 'primary'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            "Stuff gonna get deleted!!",
                            "Sure you wanna continue bro?",
                            [
                                {text: 'Nah', onPress: () => Alert.alert("Crisis adverted!")},
                                {text: 'Sure bro', onPress: () => { 
                                    flatListData.splice(this.props.index, 1);
                                    //Refresh Flatlist
                                    this.props.parentFlatList.refreshFlatList(deletingRow);
                                }},
                            ],
                            {cancelable: true}
                            )
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1,
        };
        return (
            <Swipeout {...swipeSetting}>
                <View>
                <View style={{
                    flex: 1, 
                    backgroundColor: 'steelblue',
                    flexDirection: 'row'
                    }}>
                    <Image
                    source={{uri: this.props.item.imageURL}}
                    style={{width: 100, height: 100, margin: 5}}
                    >
                    </Image>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <Text style={{
                            padding: 10,
                            fontSize: 20,
                            textTransform: 'uppercase'
                        }}>{this.props.item.item}</Text>
                        <Text style={{
                            padding: 10,
                            fontSize: 20,
                        }}>{this.props.item.description}</Text>
                    </View>

                </View>
                <View style={{
                    backgroundColor: 'white',
                    height: 1,
                }}>

                </View>
                </View>
            </Swipeout>
            
        )
    }
}

export default class BasicFlatList extends Component {
    constructor(props){
        super(props);
        this.state = ({
            deleteRowKey: null,
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    
    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deleteRowKey: activeKey
            };
        });
        this.refs.flatList.scrollToEnd();
    }

    _onPressAdd() {
        this.refs.addModal.showAddModal();
    }

    render(){
        return (
            <View style={{flex: 1, backgroundColor:'violet'}}>
                <View style={{
                    height: 60,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'tomato', 
                    marginTop: Platform.OS === 'ios' ? 30 : 0 }}>
                    <TouchableOpacity 
                    style={{marginRight: 10}}
                    onPress={this._onPressAdd}
                    >
                        <Image style={{width: 35, height: 35}}
                        source={{uri: 'https://cdn4.iconfinder.com/data/icons/material-design-content-icons/512/add-circle-512.png'}}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <FlatList 
                ref={"flatList"}
                data={flatListData}
                renderItem={({item, index})=>{
                    // console.log(`item: ${JSON.stringify(item)}, index: ${index}`)
                    return (
                        <FlatListItem item={item} index={index} parentFlatList={this}>

                        </FlatListItem>
                    )
                }}
                >
                </FlatList>
                <AddModal ref={'addModal'} parentFlatList={this}>

                </AddModal>
                <EditModal ref={'editModal'} parentFlatList={this}>

                </EditModal>
            </View>
        )
    }
}