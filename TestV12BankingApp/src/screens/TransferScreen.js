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
  Alert,
  ScrollView,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import { spendMoney } from "../../redux/actions";


let screen = Dimensions.get("window");

export class TransferScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputMoney: 0,
        }
    }

  goBackHandler = () => {
    this.props.navigation.goBack();
  };

moneyChangeHandler = (money) => {
    this.setState({
      inputMoney: money,
    })
}

  transferHandler = () => {
      let payload = {
          money_amount: this.state.inputMoney,
        date: Date().toString(),
        money_remain: this.props.currentBalance - this.state.inputMoney,
        type: 'spend'
      }
      console.log(payload);
      if (this.state.inputMoney <= this.props.currentBalance && this.state.inputMoney != 0) {
        this.props.dispatch(spendMoney(payload));
        alert("Transfer Successfully!");
        this.goBackHandler();
      } else {
        alert('Insufficient funds');
      }
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
            <Text style={styles.headerText}>NEW TRANSACTION</Text>
          </View>
        </View>
        <ScrollView 
            style={{ flex: 1 }}
            keyboardDismissMode='on-drag'>
            <KeyboardAvoidingView behavior='position'>
          <View style={styles.accBalanceView}>
            <Text style={styles.accBalanceTxt}>
              Available Balance: ${this.props.currentBalance}.00
            </Text>
          </View>
          <View style={styles.mainContent}>
            <View style={styles.receiverHeaderView}>
              <Text style={styles.receiverHeaderTxt}>
                RECEIVER'S BANK ACCOUNT
              </Text>
            </View>
            <TextInput 
                style={styles.moneyInput} 
                placeholder ="Amount (USD)"
                returnKeyType='next'
                keyboardType='number-pad'
                onChangeText={(money) => this.moneyChangeHandler(money)} />
            <TextInput style={styles.txtInput} placeholder="Bank Name" />
            <TextInput style={styles.txtInput} placeholder="Account Number" />
            <TextInput style={styles.txtInput} placeholder="Receiver's Name" />
            <TextInput 
                style={styles.txtComment} 
                placeholder="Payment Detail" 
                multiline={true}
                />
          </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <View style={styles.btnSubmitView}>
          <TouchableOpacity
            style={styles.btnSubmit}
            onPress={() => this.transferHandler()}
          >
            <Text style={styles.btnSubmitTxt}>TRANSFER</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(TransferScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 36,
    marginHorizontal: 10
  },
  header: {
    flexDirection: "row",
    height: 30
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
  accBalanceView: {
    alignItems: "center",
    padding: 10,
    marginTop: 10,
    borderTopWidth: 1
  },
  accBalanceTxt: {
    fontSize: 16,
    fontFamily: "Courier New"
  },
  mainContent: {
    height: screen.height - 300,
    margin: 10,
    backgroundColor: "#FDFFE0",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.2
  },
  receiverHeaderView: {
    height: 30,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
  },
  receiverHeaderTxt: {
    fontFamily: 'Courier New',
    fontWeight: 'bold'
  },
  moneyInput: {
    margin: 10,
    height: 40,
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: 'silver'
  },
  txtInput: {
    margin: 10,
    height: 40,
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: 'silver'
  },
  txtComment: {
    margin: 10,
    height: 180,
    padding: 10,
  },
  btnSubmitView: {
    height: 100,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  btnSubmit: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "firebrick",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowRadius: 10,
    shadowOpacity: 0.3
  },
  btnSubmitTxt: {
    color: "white",
    fontWeight: "bold",
  }
});
