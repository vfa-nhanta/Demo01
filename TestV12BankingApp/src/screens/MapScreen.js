import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  StyleSheet,
  FlatList
} from "react-native";
import { connect } from 'react-redux';

export class AtmData extends Component {
  render() {
    return (
      <View style={styles.flContainer}>
        <Text style={styles.flBranch}>{this.props.item.name}</Text>
        <Text style={styles.flDetail}>Address: {this.props.item.address}</Text>
        <Text style={styles.flDetail}>Opening Hours: {this.props.item.timings.opensAt} ~ {this.props.item.timings.closesAt}</Text>
      </View>
    )
  }
}

export class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  goBackHandler = () => {
    this.props.navigation.goBack();
  };
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.goBackHandler()}>
            <Image
              style={styles.imgClose}
              source={require("../media/back.png")}
            />
          </TouchableOpacity>
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>ATM FINDER</Text>
          </View>
        </View>
        <ScrollView 
        contentContainerStyle={{alignItems: 'center'}}
        style={{ flex: 1, paddingTop: 30 }}>
          <View style={styles.mainContent}>
            <Image 
              style={styles.mapStyle}
              source={require('../media/maps.png')}  
              />
          </View>
          <View style={styles.atmList}>
            <Text style={styles.listTitle}>~ List of ATMs ~</Text>
            <FlatList
              data={this.props.atmLocation}
              keyExtractor={(item, index) => index}
              renderItem={({ item, index }) => {
                return <AtmData index={index} item={item} />;
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
}

export default connect(mapStateToProps)(MapScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke"
  },
  header: {
    flexDirection: "row",
    height: 30,
    marginTop: 34,
    marginHorizontal: 10,
    marginBottom: 10
  },
  imgClose: {
    width: 30,
    height: 30
  },
  headerTextView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30
  },
  headerText: {
    fontSize: 20
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.2
  },
  mapStyle: {
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: 'white',
  },
  atmList: {
    marginTop: 20,
  },
  listTitle: {
    fontSize: 20, 
    fontFamily: 'Courier New',
    textAlign: 'center'
  },
  flContainer: {
    flex: 1,
    marginTop: 10,
  },
  flBranch: {
    fontSize: 20,
    fontFamily: 'Courier New',
    paddingLeft: 10,
    textAlign: 'center'
  },
  flDetail: {
    fontSize: 14,
    fontFamily: 'Courier New',
    color: 'gray',
    paddingHorizontal: 20,
  }
});
