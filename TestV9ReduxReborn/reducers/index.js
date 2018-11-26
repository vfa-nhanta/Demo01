import { combineReducers } from 'redux';
import studentReducers from '../reducers/studentReducers';

const allReducers = combineReducers({
    students: studentReducers,
});

export default allReducers;