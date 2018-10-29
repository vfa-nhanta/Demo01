import React, { Component } from 'react';
import { View, Text } from 'react-native';

const apiGetAll = 'localhost:8080';
const apiPostAll = 'http://ec2-54-238-158-106.ap-northeast-1.compute.amazonaws.com/api/qa';

// async function getDataFromServer() {
//     try {
//         let response = await fetch(apiGetAll);
//         let responseJson = await response.json();
//         return responseJson.data;
//     }
//     catch (error) {
//         console.error(`error is ${error}`);
//     }
// }

async function insertDataToServer(params){
    try {
        let response = await fetch(apiPostAll, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "user_id": 15,
                "login_token": "61bbf414606241acdc2345743517ad2b",
            },
            body: JSON.stringtify(params)
        });
        let responseJson = await response.json();
        return responseJson.result;
    } catch(error){
        console.log(`Error is ${error}`);
    }
}

export {getDataFromServer};
export {insertDataToServer};