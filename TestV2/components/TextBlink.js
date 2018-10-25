// // Phần code tự viết
// import React, { Component } from 'react';
// import { View, Text } from 'react-native';

// class Blink extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             showText: true
//         };
//     }
//     taskToDo = () =>  {
//         console.log("previousState");
//         this.setState(previousState => {
//             console.log(previousState);
//             return {
//                 showText: !previousState.showText
//             };
//         }); 
//     };
//     componentDidMount(){
//         const blinkingInterval = 1000;
//         this.var = setInterval(this.taskToDo, 1000);
//     }
//     render(){
//     let displayText = this.state.showText ? this.props.inputText : ' ';
//         return (
//                 <Text>{displayText}</Text>
//         );
//     }
// }

// export default class TextBlink extends Component {
//     render(){
//         return (
//             <View style={{alignItems: 'center', marginTop: 50}}>
//                 <Blink inputText='Watch me blink!'></Blink>
//             </View>
//         );
//     }
// }

// //Phần code mẫu trong bài 5
// //
// // import React, { Component } from 'react';
// // import { Text, View } from 'react-native';

// // class Blink extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //         showText: true
// //     };
// //     var taskToDo = () => {
// //         // this.state = "blabla" //Do not allow, only in constructor
// //         this.setState(previousState => {
// //             return {
// //                 showText: !previousState.showText
// //             };
// //         });

// //     };
// //     const timeToBlink = 500; //500 miliseconds
// //     setInterval(taskToDo, timeToBlink);
// //   }

// //   render() {
// //     //After state changed, component is rendered
// //     let textToDisplay = this.state.showText ? this.props.inputText : ' ';
// //     return (
// //         <Text>{textToDisplay }</Text>
// //     );
// //   }
// // }
// // export default class TextBlink extends Component {
// //   render() {
// //     return (
// //         <View style={{alignItems: 'center', marginTop: 50}}>
// //             <Blink inputText='Hello, how are you?'></Blink>
// //             <Blink inputText='I am '></Blink>
// //         </View>
// //     );
// //   }
// // }


//Code goc bi loi
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Blink extends Component {
    constructor(props){
        super(props);
        this.state = {
            showText: true
        };
        var taskToDo= ()=>{
            // //         // this.state = "blabla" //Do not allow, only in constructor
                    this.setState(previousState => {
                        return {
                            showText: !previousState.showText
                        };
                    });
            
        };
        const blinkingInterval = 1000;
        //setInterval(taskTodo,blinkingInterval);
        setInterval(taskToDo, 1000);
    }

    render(){
    let displayText = this.state.showText ? this.props.inputText : ' ';
        return (
                <Text>{displayText}</Text>
        );
    }
}

export default class TextBlink extends Component {
    render(){
        return (
            <View style={{alignItems: 'center', marginTop: 50}}>
                <Blink inputText='Watch me blink!'></Blink>
            </View>
        );
    }
}