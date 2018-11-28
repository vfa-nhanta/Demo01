const initialState = {
  isLoggedIn: false,
  currentUser: "Mister Midnight",
  currentBalance: 0,
  spending: 0,
  transaction: [
    {
      money_amount: 10,
      date: "test1",
      money_remain: 302,
      type: "spend"
    },
    {
      money_amount: 23,
      date: "test2",
      money_remain: 423,
      type: "receive"
    }
  ],
  isTransferShow: false,
  atmLocation: [
    {
      name: "Templars Square",
      address: "Templars Square, 4 Pound Way, Oxford",
      image: "../../src/media/place1.jpeg",
      coordinate: {
        latitude: 45.524548,
        longitude: -122.6749817
      },
      timings: {
        opensAt: "8:00",
        closesAt: "24:00"
      }
    },
    {
      name: "Prama House",
      address: "Prama House, 267 Banbury Road, Oxford",
      image: "../../src/media/place2.jpeg",
      coordinate: {
        latitude: 45.524698,
        longitude: -122.6655507
      },
      timings: {
        opensAt: "9:00",
        closesAt: "24:00"
      }
    },
    {
      name: "Santander",
      address: "52-54 Gracechurch St, London EC3V 0EH",
      image: require("../../src/media/place3.jpeg"),
      coordinate: {
        latitude: 45.5230786,
        longitude: -122.6701034
      },
      timings: {
        opensAt: "9:30",
        closesAt: "19:30"
      }
    }
  ]
};

export default (rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload
      };
    case "USER_LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        currentUser: "",
        currentUser: "",
        currentBalance: 0,
        spending: 0,
        transaction: []
      };
    case "SHOW_TRANSFER_SCREEN":
      return {
        ...state,
        isTransferShow: true
      };
    case "MONEY_CHEAT":
      return {
        ...state,
        currentBalance: state.currentBalance + action.payload.money_amount,
        transaction: state.transaction.concat(action.payload)
      };
    case "SPEND_MONEY":
      return {
        ...state,
        currentBalance: state.currentBalance - action.payload.money_amount,
        spending: state.spending + parseInt(action.payload.money_amount),
        transaction: state.transaction.concat(action.payload)
      };
    default:
      return state;
  }
});
