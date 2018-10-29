import { combineReducers } from 'redux';
import taskReducers from '../reducers/taskReducers';

const allReducers = combineReducers({
    taskReducers,
});

export default allReducers;