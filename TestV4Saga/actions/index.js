import { INCREASE, DECREASE } from './actionTypes';


export const increaseAction = (step) => {
    return {
        type: INCREASE,
        step: step
    }
}

export const decreaseAction = (step) => {
    return {
        type: DECREASE,
        step: step
    }
}