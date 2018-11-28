import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TextInput,
  ScrollView
} from "react-native";
import { userLogOut } from "../../redux/actions/index";
import { connect } from "react-redux";

export class SettingScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    let tabBarIcon = () => (
      <Image
        source={require("../media/setting.png")}
        style={{ width: 26, height: 26, alignSelf: "center" }}
      />
    );
    return { tabBarIcon };
  };

  logOutHandler = () => {
    this.props.dispatch(userLogOut());
  };

  basketBallhander = () => {
    this.props.navigation.navigate("Basketball");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerTxt}>SETTING & EXTRAS</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollStyle}>
          <TouchableOpacity
            style={styles.btnBasketBall}
            onPress={() => this.basketBallhander()}
          >
            <Text style={styles.loginTxt}>BASKETBALL GAME!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnLogOut}
            onPress={() => this.logOutHandler()}
          >
            <Text style={styles.loginTxt}>LOG OUT</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SettingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "khaki"
  },
  btnLogOut: {
    width: 300,
    height: 40,
    marginTop: 20,
    backgroundColor: "blueviolet",
    alignItems: "center",
    justifyContent: "center"
  },
  loginTxt: {
    color: "white",
    fontSize: 20
  },
  btnBasketBall: {
    width: 300,
    height: 40,
    marginTop: 10,
    backgroundColor: "darkmagenta",
    alignItems: "center",
    justifyContent: "center"
  },
  headerView: {
    marginTop: 34,
    height: 50,
    alignItems: "center",
    marginHorizontal: 10,
    borderBottomColor: "silver",
    borderBottomWidth: 1,
    justifyContent: "center"
  },
  headerTxt: {
    fontSize: 20
  },
  scrollStyle: {
    flex: 1,
    justifyContent: 'center'
  },
});
