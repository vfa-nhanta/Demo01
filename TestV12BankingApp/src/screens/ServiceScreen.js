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
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import Collapsible from "react-native-collapsible";

export class ServiceScreen extends Component {
  constructor() {
    super();
    this.state = {
      isChildCollapsed: true
    };
  }

  collapseHandler = () => {
    this.setState({ isChildCollapsed: !this.state.isChildCollapsed });
  };

  goBackHandler = () => {
    this.props.navigation.goBack();
  };
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
            <Text style={styles.headerText}>LOAN & SERVICES</Text>
          </View>
        </View>
        <ScrollView style={{ flex: 1, paddingTop: 10 }}>
        <View style={styles.mainContent}>
          <TouchableOpacity
            style={styles.mainContent}
            onPress={() => this.collapseHandler()}
          >
            <View style={styles.childView}>
              <Text style={styles.mainTxt}>FINANCIAL SERVICES</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.isChildCollapsed}>
            <View style={styles.grandchildView}>
              <Text style={styles.subTxt}>Credit Card</Text>
            </View>
            <View style={styles.grandchildView}>
              <Text style={styles.subTxt}>Short-term Loan</Text>
            </View>
            <View style={styles.grandchildView}>
              <Text style={styles.subTxt}>Mortgage Loan</Text>
            </View>
          </Collapsible>
          <TouchableOpacity
            style={styles.mainContent}
          >
            <View style={styles.childView}>
              <Text style={styles.mainTxt}>INSURANCE SERVICES</Text>
            </View>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(ServiceScreen);

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
    height: "100%",
    alignItems: "center"
  },
  childView: {
    height: 100,
    width: 300,
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.2,
    borderRadius: 5,
    backgroundColor: "lightcoral",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  mainTxt: {
    fontFamily: 'Courier New',
    textAlign: 'center',
    fontSize: 30,
  },
  grandchildView: {
    height: 40,
    width: 300,
    backgroundColor: "#ED9D9D",
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    alignItems: 'center',
    justifyContent: 'center'
  },
  subTxt: {
    fontFamily: 'Courier New',
    fontSize: 16
  }
});
