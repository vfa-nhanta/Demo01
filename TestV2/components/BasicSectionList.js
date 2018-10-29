import React, { Component } from 'react';
import { View, Text, SectionList, Platform, RefreshControl } from 'react-native';
import { sectionListData } from '../data/sectionListData';


class SectionListItem extends Component {
    render(){
        return (
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'tomato'}}>
                <Text style={{fontSize: 16, marginLeft: 20, marginRight: 20, marginTop: 8}}>{this.props.item.name}</Text>
                <Text style={{fontSize: 16, marginLeft: 20, marginRight: 20, marginTop: 5}}>{this.props.item.phone}</Text>
                <View style={{height: 1, backgroundColor: 'white'}}></View>
            </View>
        )
    }
}

class SectionHeader extends Component {
    render(){
        return (
            <View style={{flex: 1, backgroundColor: 'lightskyblue'}}>
                <Text style={{padding: 10}}>{this.props.section.title}</Text>
            </View>
        )
    }
}

export default class BasicSectionList extends Component {
    constructor(props){
        super(props);
        this.state = ({
            refreshing: false,
        });
    }
    render(){
        return (
            <View style={{
                flex: 1,
                marginTop: Platform.OS === 'ios' ? 34 : 0,
            }}>
            <SectionList 
                renderItem={({item, index}) => {
                    return (
                        <SectionListItem item={item} index={index}>

                        </SectionListItem>
                    );
                }}
                renderSectionHeader={({section}) => {
                    return (<SectionHeader section={section} />);
                }}
                sections={sectionListData}
                keyExtractor={(item, index) => item.name}
                >

            </SectionList>

            </View>
        )
    }
}