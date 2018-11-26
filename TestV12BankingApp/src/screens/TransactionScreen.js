import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  FlatList,
  ScrollView,
  ImageBackground
} from "react-native";
import { connect } from "react-redux";

export class TransactionData extends Component {
  statusDecider = () => {
    if (this.props.item.type == "spend") {
      return "Spending";
    } else {
      return "Receiving";
    }
  };

  render() {
    return (
      <View style={styles.flContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateFont}>{this.props.item.date}</Text>
        </View>
        <View style={styles.flatListItem}>
          <View style={styles.flTxtView}>
            <Text
              style={{
                fontFamily: "Courier New",
                fontSize: 24,
                color:
                  (this.statusDecider() == "Spending")
                    ? "indianred"
                    : "mediumseagreen"
              }}
            >
              {this.statusDecider()}:
            </Text>
            <Text style={styles.flRemain}>Remaining Balance: </Text>
          </View>
          <View style={styles.flAMountView}>
            <Text style={{
                fontFamily: "Courier New",
                fontSize: 24,
                color:
                  (this.statusDecider() == "Spending")
                    ? "indianred"
                    : "mediumseagreen"
              }}>
              ${this.props.item.money_amount}.00
            </Text>
            <Text style={styles.flRemain}>
              ${this.props.item.money_remain}.00
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export class TransactionScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    let tabBarIcon = () => (
      <Image
        source={require("../media/transaction.png")}
        style={{ width: 26, height: 26, alignSelf: "center" }}
      />
    );
    return { tabBarIcon };
  };
  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../media/background.jpg")}
      >
        <View style={styles.container}>
          <View style={styles.headerView}>
            <Text style={styles.headerTxt}>TRANSACTION HISTORY</Text>
          </View>
          <ScrollView style={styles.scrollStyle}>
            <FlatList
              data={this.props.transaction}
              keyExtractor={(item, index) => index}
              renderItem={({ item, index }) => {
                return <TransactionData index={index} item={item} />;
              }}
            />
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(TransactionScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    flex: 1
  },
  flContainer: {
    height: 120
  },
  dateContainer: {
    height: 40,
    backgroundColor: "gainsboro",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  dateFont: {
    fontFamily: "Courier New",
    fontSize: 14
  },
  flatListItem: {
    flexDirection: "row",
    height: "100%"
  },
  flTxtView: {
    padding: 10,
    marginLeft: 10,
    flex: 60
  },
  flAMountView: {
    padding: 10,
    marginRight: 10,
    flex: 40,
    alignItems: "flex-end"
  },
  flRemain: {
    fontFamily: "Courier New",
    fontSize: 16,
    color: "slategray"
  }
});
