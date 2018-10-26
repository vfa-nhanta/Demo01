var horizontalStatus = {
    rainy: {
        ios: 'ios-rainy',
        android: 'md-rainy'
    },
    cloudy: {
        ios: 'ios-cloudy',
        android: 'md-cloudy'
    },
    thunderstorm: {
        ios: 'ios-thunderstorm',
        android: 'md-thunderstorm'
    },
    sunny: {
        ios: 'ios-sunny',
        android: 'md-sunny'
    }
}



var horizontalFlatListData = [
    {
        hour: '1 AM',
        status: horizontalStatus.rainy,
        degree: '32'
    },
    {
        hour: '6 AM',
        status: horizontalStatus.rainy,
        degree: '24'
    },
    {
        hour: '9 AM',
        status: horizontalStatus.thunderstorm,
        degree: '31'
    },
    {
        hour: '12 PM',
        status: horizontalStatus.sunny,
        degree: '25'
    },
    {
        hour: '3 PM',
        status: horizontalStatus.cloudy,
        degree: '29'
    },
    {
        hour: '6 PM',
        status: horizontalStatus.sunny,
        degree: '40'
    },
];

export {horizontalStatus};
export {horizontalFlatListData};