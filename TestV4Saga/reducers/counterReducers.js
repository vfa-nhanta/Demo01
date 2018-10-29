import { INCREASE, DECREASE } from '../actions/actionTypes';

const counterReducers = (times = 0, action) => {
    switch(action.type) {
        case INCREASE: 
            return times + action.step;
        case DECREASE: 
            return times - action.step;

        default: 
            return times;
    }
}

export default counterReducers;