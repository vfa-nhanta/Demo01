import React, { Component } from "react";
import {
  View,
  Text,
  Animated,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
// import MapView from "react-native-maps";

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

const screenDimenstion = Dimensions.get("window");

const CARD_HEIGHT = screenDimenstion.height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 45.52220671242907,
        longitude: -122.6653281029795,
        latitudeDelta: 0.04864195044303443,
        longitudeDelta: 0.040142817690068
      }
    };
  }
  goBackHandler = () => {
    this.props.navigation.goBack();
  };
  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }
  // mapMarkerPopulator() {
  //   this.props.atmLocation.map((marker, index) => {
  //     return (
  //       <MapView.Marker key={index} coordinate={this.props.atmLocation.coordinate}>
  //         <Animated.View style={styles.markerWrapper}>
  //           <Animated.View style={styles.ring} />
  //           <View style={styles.markers} />
  //         </Animated.View>
  //       </MapView.Marker>
  //     );
  //   });
  // }

  // mapMarkerContentPopulator() {
  //   this.props.atmLocation.map((marker, index) => (
  //     <View style={styles.card} key={index}>
  //       <Image 
  //         source={marker.image}
  //         style={styles.cardImage}
  //         resizeMode="cover"
  //       />
  //       <View style={styles.textContent}>
  //       </View>
  //     </View>
  //   ))
  // }

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
        {/* <MapView
          ref={map => (this.map = map)}
          initialRegion={this.state.region}
          style={styles.container}
        />
        {this.mapMarkerPopulator()}
        <Animated.ScrollView
          horizontal
          scrollEvenThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll = {Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  }
                }
              }
            ],
            {
              useNativeDriver: true
            }
          )}
          style={styles.scrollView}
          contentContainerStyle={StyleSheet.endPadding}
        >

        </Animated.ScrollView> */}
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
  return state;
};

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
    justifyContent: "center",
    alignItems: "center",
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
    borderColor: "white"
  },
  atmList: {
    marginTop: 20
  },
  listTitle: {
    fontSize: 20,
    fontFamily: "Courier New",
    textAlign: "center"
  },
  flContainer: {
    flex: 1,
    marginTop: 10
  },
  flBranch: {
    fontSize: 20,
    fontFamily: "Courier New",
    paddingLeft: 10,
    textAlign: "center"
  },
  flDetail: {
    fontSize: 14,
    fontFamily: "Courier New",
    color: "gray",
    paddingHorizontal: 20
  }
});
