import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Keyboard,
  TextInput,
  Animated,
  Dimensions,
  Switch
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";

export class AccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
      hiddenText: new Animated.Value(0),
      kidney: true,
      heart: true,
      limb: true,
      eyes: true
    };
  }
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    let tabBarIcon = () => (
      <Image
        source={require("../media/account.png")}
        style={{ width: 26, height: 26, alignSelf: "center" }}
      />
    );
    return { tabBarIcon };
  };

  pandaGenerator() {
    var panda = [];
    for (var i = 0; i < 20; i++) {
      panda.push(
        <Image
          style={styles.profilePic}
          source={require("../media/profile-picture.png")}
        />
      );
    }
    return <View>{panda}</View>;
  }

  switchValueChangeHandler = (value, name) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: "clamp"
    });
    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: "clamp"
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -50],
      extrapolate: "clamp"
    });
    const profileImgTranslateX = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [-180, -220],
      extrapolate: "clamp"
    });
    const profileImgTranslateY = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 3],
      extrapolate: "clamp"
    });
    const imageScale = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0.3, 0.6],
      extrapolate: "clamp"
    });
    const subTitleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 0, 0],
      extrapolate: "clamp"
    });
    const titleTranslateY = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 20],
      extrapolate: "clamp"
    });

    return (
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../media/title.jpg")}
      >
        <View style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={styles.container}
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
            ])}
          >
            <View style={styles.scrollViewContent}>
              <ImageBackground
                style={styles.accSetting}
                source={require("../media/color2.jpg")}
              >
                <Text style={styles.secTitle}>Account Setting</Text>
                <TextInput style={styles.txtBox} placeholder="Name" />
                <TextInput style={styles.txtBox} placeholder="Age" />
                <TextInput style={styles.txtBox} placeholder="Net worth" />
                <TextInput style={styles.txtBox} placeholder="Biography" />
              </ImageBackground>
              <ImageBackground
                style={styles.sysCon}
                source={require("../media/color3.jpg")}
              >
                <Text style={styles.secTitle}>Services Configuration</Text>
                <Text style={{ alignSelf: "center", marginHorizontal: 10, fontFamily: 'Courier New', fontStyle: 'italic' }}>
                  Please specify the body parts to be sold.
                </Text>
                <View>
                  <View style={{ flexDirection: "row",  marginHorizontal: 30, marginVertical: 10 }}>
                    <View style={{flex: 60}}>
                      <Text style={{fontSize: 18, fontFamily: 'Courier New'}}>Kidney</Text>
                    </View>
                    <View style={{flex: 40, alignItems: 'flex-end'}}>
                      <Switch
                        value={this.state.kidney}
                        onValueChange={(event, name = "kidney") =>
                          this.switchValueChangeHandler(event, name)
                        }
                      />
                    </View>
                  </View>
                  <View style={{ flexDirection: "row",  marginHorizontal: 30, marginVertical: 10 }}>
                    <View style={{flex: 60}}>
                      <Text style={{fontSize: 18, fontFamily: 'Courier New'}}>Heart</Text>
                    </View>
                    <View style={{flex: 40, alignItems: 'flex-end'}}>
                      <Switch
                        value={this.state.heart}
                        onValueChange={(event, name = "heart") =>
                          this.switchValueChangeHandler(event, name)
                        }
                      />
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", marginHorizontal: 30, marginVertical: 10 }}>
                    <View style={{flex: 60}}>
                      <Text style={{fontSize: 18, fontFamily: 'Courier New'}}>Limb</Text>
                    </View>
                    <View style={{flex: 40, alignItems: 'flex-end'}}>
                      <Switch
                        value={this.state.limb}
                        onValueChange={(event, name = "limb") =>
                          this.switchValueChangeHandler(event, name)
                        }
                      />
                    </View>
                  </View>
                  <View style={{ flexDirection: "row",  marginHorizontal: 30, marginVertical: 10 }}>
                    <View style={{flex: 60}}>
                      <Text style={{fontSize: 18, fontFamily: 'Courier New'}}>Eyes</Text>
                    </View>
                    <View style={{flex: 40, alignItems: 'flex-end'}}>
                      <Switch
                        value={this.state.eyes}
                        onValueChange={(event, name = "eyes") =>
                          this.switchValueChangeHandler(event, name)
                        }
                      />
                    </View>
                  </View>
                </View>
              </ImageBackground>
              <ImageBackground
                style={styles.news}
                source={require("../media/color1.jpg")}
              >
                <Text style={styles.secTitle}>News</Text>
              </ImageBackground>
            </View>
          </ScrollView>
        </View>
        <Animated.View style={[styles.header, { height: headerHeight }]}>
          <Animated.Image
            source={require("../media/title.jpg")}
            style={[
              styles.imgTitleBackground,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }]
              }
            ]}
          />
          <View style={styles.bar}>
            <View style={{ flex: 2 }}>
              <Animated.Image
                source={require("../media/profile-picture.png")}
                resizeMode="contain"
                style={{
                  transform: [
                    { translateY: profileImgTranslateY },
                    { translateX: profileImgTranslateX },
                    { scaleX: imageScale },
                    { scaleY: imageScale }
                  ],
                  flex: 1,
                  minHeight: 30,
                  minWidth: 30
                }}
              />
            </View>
            <View style={{ flex: 3 }}>
              <Animated.View
                style={{ transform: [{ translateY: titleTranslateY }] }}
              >
                <Text style={styles.title}>Mr. {this.props.currentUser}</Text>
                <Text style={styles.subTitle}>Account Number: xxxxxx090</Text>
              </Animated.View>
              <Animated.View style={{ opacity: subTitleOpacity }}>
                <Text style={styles.suppText}>Date of birth: 2008/10/11</Text>
                <Text style={styles.suppText}>
                  Ocupation: King of the world
                </Text>
              </Animated.View>
            </View>
          </View>
        </Animated.View>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(AccountScreen);

const HEADER_MAX_HEIGHT = 350;
const HEADER_MIN_HEIGHT = 100;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#009EBD",
    overflow: "hidden"
  },
  bar: {
    marginTop: 28,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flex: 1
  },
  title: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 18,
    fontFamily: "Courier New",
    fontWeight: "bold"
  },
  subTitle: {
    color: "white",
    fontFamily: "Courier New",
    fontWeight: "bold"
  },
  suppText: {
    marginTop: 5
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT
  },
  imgTitleBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: "cover"
  },
  accSetting: {
    marginTop: 20,
    width: screen.width,
    height: 300,
    alignItems: "center",
    backgroundColor: "#BE45A6",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowColor: "black",
    shadowRadius: 20,
    shadowOpacity: 0.5
  },
  secTitle: {
    alignSelf: "center",
    marginTop: 10,
    fontSize: 20,
    fontFamily: "Courier New"
  },
  sysCon: {
    marginTop: 20,
    width: screen.width,
    height: 300,
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowColor: "black",
    shadowRadius: 20,
    shadowOpacity: 0.5
  },
  news: {
    marginTop: 20,
    width: screen.width,
    height: 300,
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowColor: "black",
    shadowRadius: 20,
    shadowOpacity: 0.5
  },
  txtBox: {
    width: 300,
    borderBottomWidth: 1,
    marginTop: 10,
    padding: 8
  }
});
