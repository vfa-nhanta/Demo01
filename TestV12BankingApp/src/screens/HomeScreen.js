import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TextInput,
  Alert
} from "react-native";
import { connect } from "react-redux";
import { moneyCheat } from "../../redux/actions";

export class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    let tabBarIcon = () => (
      <Image
        source={require("../media/home.png")}
        style={{ width: 26, height: 26, alignSelf: "center" }}
      />
    );
    return { tabBarIcon };
  };

  getCurrentUser() {
    return this.props.currentUser;
  }

  navHandler = (page) => {
    return this.props.navigation.navigate(page);
  }

  moneyCheatHandler = () => {
    let payload = {
      money_amount: 200,
      date: Date().toString(),
      money_remain: this.props.currentBalance + 200,
      type: 'receive'
    }
	  this.props.dispatch(moneyCheat(payload));
  }

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../media/background.jpg")}
      >
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.welcomeMsg}>
                Welcome back {this.getCurrentUser()}
              </Text>
              <View style={styles.accBalanceView}>
                <TouchableOpacity 
					style={styles.accBalanceTitle}
					onPress={() => this.moneyCheatHandler()}>
                  <Image
                    source={require("../media/piggybank.png")}
                    style={styles.accBalanceImg}
                  />
                </TouchableOpacity>
                <View style={styles.accBalanceAmt}>
                  <Text style={styles.accBalanceTxt}>Account Balance</Text>
                  <Text style={styles.accBalanceAmtTxt}>
                    ${this.props.currentBalance}
                  </Text>
				  <Text style={{alignItems: 'flex-end'}}>.00</Text>
                </View>
              </View>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.mainItem}>
                <TouchableOpacity
                  style={styles.mainItemBtn}
                  onPress={() => this.navHandler('Transfer')}
                >
                  <View style={styles.mainTitleView}>
                    <Text style={styles.mainTitle}>Transfer & Pay</Text>
                    <Text style={styles.subTitle}>
                      Available Balance: ${this.props.currentBalance}.00
                    </Text>
                  </View>
                  <View style={styles.btnArrowView}>
                    <Image
                      style={styles.btnArrow}
                      source={require("../media/arrow-right.png")}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.mainItem}>
                <TouchableOpacity 
                  style={styles.mainItemBtn}
                  onPress={() => this.navHandler('Transaction')}>
                  <View style={styles.mainTitleView}>
                    <Text style={styles.mainTitle}>History</Text>
                    <Text style={styles.subTitle}>
                      Total Spending: ${this.props.spending}.00
                    </Text>
                  </View>
                  <View style={styles.btnArrowView}>
                    <Image
                      style={styles.btnArrow}
                      source={require("../media/arrow-right.png")}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.mainItem}>
                <TouchableOpacity 
                    style={styles.mainItemBtn}
                    onPress={() => this.navHandler('Services')}>
                  <View style={styles.mainTitleView}>
                    <Text style={styles.mainTitle}>Loan & Services</Text>
                    <Text style={styles.subTitle}>
                      Services by Piggy Bank Corps.
                    </Text>
                  </View>
                  <View style={styles.btnArrowView}>
                    <Image
                      style={styles.btnArrow}
                      source={require("../media/arrow-right.png")}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.mainItem}>
                <TouchableOpacity 
                  style={styles.mainItemBtn}
                    onPress={() => this.navHandler('Maps')}>
                  <View style={styles.mainTitleView}>
                    <Text style={styles.mainTitle}>ATM Near You</Text>
                    <Text style={styles.subTitle}>Find the nearest ATM</Text>
                  </View>
                  <View style={styles.btnArrowView}>
                    <Image
                      style={styles.btnArrow}
                      source={require("../media/arrow-right.png")}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 30,
    width: "100%"
  },
  welcomeMsg: {
    marginTop: 50,
    alignSelf: "center",
    fontSize: 26
  },
  accBalanceView: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row"
  },
  accBalanceTitle: {
    flex: 30,
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  accBalanceImg: {
    width: 60,
    height: 60,
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowColor: "black",
    shadowRadius: 20,
    shadowOpacity: 0.2
  },
  accBalanceTxt: {
    fontSize: 18,
    fontFamily: "Courier New",
    textAlign: "center"
  },
  accBalanceAmt: {
    paddingHorizontal: 20,
    flex: 70,
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  accBalanceAmtTxt: {
    fontSize: 50,
    fontFamily: "Courier New"
  },
  mainContent: {
    flex: 70,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  mainItem: {
    flex: 25,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  mainItemBtn: {
    width: "90%",
    height: "90%",
    flexDirection: "row",
    backgroundColor: "khaki",
    borderRadius: 10,
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowColor: "black",
    shadowRadius: 20,
    shadowOpacity: 0.1
  },
  mainTitleView: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
    flex: 90
  },
  btnArrowView: {
    flex: 10,
    marginRight: 10,
    justifyContent: "center"
  },
  btnArrow: {
    height: 30,
    width: 30
  },
  mainTitle: {
    fontSize: 30,
    fontFamily: "Courier New"
  },
  subTitle: {
    fontFamily: "Courier New",
    marginTop: 10
  }
});
